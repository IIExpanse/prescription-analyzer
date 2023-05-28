package ru.expanse.prescription.analyzer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import ru.expanse.prescription.analyzer.files.manager.PrescriptionFilesManager;
import ru.expanse.prescription.analyzer.model.ICDCode;
import ru.expanse.prescription.analyzer.model.PrescriptionEntry;
import ru.expanse.prescription.analyzer.model.PrescriptionVerdict;
import ru.expanse.prescription.analyzer.repository.ICDCodeRepository;
import ru.expanse.prescription.analyzer.repository.PrescriptionRepository;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor
public class PrescriptionService {
    private final PrescriptionFilesManager manager;
    private final ICDCodeRepository icdCodeRepository;
    private final PrescriptionRepository prescriptionRepository;
    private final double COMPLIANCE_THRESHOLD = 0.5;
    private boolean templatesLoaded = false;
    private boolean discrepancyFound;
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    private final String reportsPath = "reports/";

    public Map<Integer, PrescriptionEntry> analyzePrescriptions(String filePath) throws IOException {
        if (!templatesLoaded) {
            manager.loadMSKTemplatePrescriptions();
            manager.loadGeneralTemplatePrescriptions();
        }

        Map<Integer, PrescriptionEntry> prescriptions = manager.parseExcelPrescriptions(filePath);
        prescriptions.remove(0);
        Collection<PrescriptionEntry> entries = prescriptions.values();
        Map<String, Long> collectionsIdsByCodes = new HashMap<>();
        Map<Long, String> collectionsByIds = new HashMap<>();

        for (PrescriptionEntry entry : entries) {
            String code = entry.getICDCode();

            Optional<ICDCode> icdCodeOptional = icdCodeRepository.findById(code);
            if (icdCodeOptional.isPresent()) {
                ICDCode icdCode = icdCodeOptional.get();
                long collectionId = icdCode.getCollection().getId();

                collectionsIdsByCodes.put(
                        icdCode.getId(), collectionId);
                collectionsByIds.put(
                        collectionId,
                        prescriptionRepository.findById(collectionId).get().getCollection());

            }
        }

        for (PrescriptionEntry entry : entries) {
            String entryPrescriptions = entry.getPrescriptions();
            String template = collectionsByIds.get(collectionsIdsByCodes.get(entry.getICDCode()));
            if (template == null || template.isBlank() || entryPrescriptions.isBlank()) {
                entry.setVerdict(PrescriptionVerdict.FULL_COMPLIANCE);
                continue;
            }

            double rating = getComplianceRating(
                    entry.getPrescriptions(),
                    collectionsByIds.get(collectionsIdsByCodes.get(entry.getICDCode())));

            if (discrepancyFound) {
                entry.setVerdict(PrescriptionVerdict.DISCREPANCY_DETECTED);

            } else if (COMPLIANCE_THRESHOLD <= rating) {
                entry.setVerdict(PrescriptionVerdict.FULL_COMPLIANCE);

            } else {
                entry.setVerdict(PrescriptionVerdict.PARTIAL_COMPLIANCE);
            }
        }

        return prescriptions;
    }

    private double getComplianceRating(String entryPrescriptions, String template) {
        String[] prescriptions = entryPrescriptions.split(System.lineSeparator());
        double templateLength = template.length();
        double matchCounter = 0;
        discrepancyFound = false;

        for (String prescription : prescriptions) {
            String[] words = prescription.split(" ");
            boolean minimalMatchFound = false;

            for (String word : words) {
                int l = word.length();

                if (l >= 5 && isGeneralWord(word)) {
                    if (template.contains(word.substring(0, l - 2))) {
                        matchCounter += l;
                        minimalMatchFound = true;
                    }

                } else if (template.contains(word)) {
                    matchCounter += l;
                    minimalMatchFound = true;
                }
            }
            if (!minimalMatchFound) {
                discrepancyFound = true;
            }
        }
        return matchCounter / templateLength;
    }

    private boolean isGeneralWord(String word) {
        return !word.matches("(.*\\d.*)|(^[А-Я|A-Z].*[А-Я|A-Z].*)");
    }
}
