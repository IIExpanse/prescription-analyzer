package ru.expanse.prescription.analyzer.files.manager;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import ru.expanse.prescription.analyzer.model.ICDCode;
import ru.expanse.prescription.analyzer.model.PrescriptionCollection;
import ru.expanse.prescription.analyzer.model.PrescriptionEntry;
import ru.expanse.prescription.analyzer.parser.ExcelPrescriptionParser;
import ru.expanse.prescription.analyzer.parser.GeneralTemplatePrescriptionsParser;
import ru.expanse.prescription.analyzer.parser.MSKTemplatePrescriptionsParser;
import ru.expanse.prescription.analyzer.repository.ICDCodeRepository;
import ru.expanse.prescription.analyzer.repository.PrescriptionRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Component
public class PrescriptionFilesManager {
    private final PrescriptionRepository prescriptionRepository;
    private final ICDCodeRepository icdCodeRepository;
    private final MSKTemplatePrescriptionsParser mskTemplateParser;
    private final GeneralTemplatePrescriptionsParser generalTemplateParser;
    private final ExcelPrescriptionParser excelPrescriptionParser;

    public void loadGeneralTemplatePrescriptions() throws IOException {
        try (Stream<Path> files = Files.list(
                ResourceUtils.getFile("classpath:prescription-templates/general").toPath())) {
            files.forEach(path -> {
                try {
                    List<List<String>> parsedData = generalTemplateParser.parsePrescriptions(path);
                    StringBuilder sb = new StringBuilder();
                    for (String word : parsedData.get(1)) {
                        sb.append(word).append(" ");
                    }
                    int right = sb.lastIndexOf(" ");
                    right = right < 0 ? sb.length() : right;

                    PrescriptionCollection collection = prescriptionRepository.save(PrescriptionCollection.builder()
                            .collection(sb.substring(0, right))
                            .build());

                    for (String code : parsedData.get(0)) {
                        if (!icdCodeRepository.existsById(code)) {
                            icdCodeRepository.save(ICDCode.builder().id(code).collection(collection).build());
                        }
                    }

                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        }
    }

    public void loadMSKTemplatePrescriptions() {
        List<List<String>> parsedData;

        try {
            parsedData = mskTemplateParser.parsePrescriptions(
                    ResourceUtils.getFile("classpath:prescription-templates/msk/msk-prescriptions.pdf"));

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        StringBuilder sb = new StringBuilder();
        int l = parsedData.size();

        for (int i = 1; i < l; i += 2) {
            for (String word : parsedData.get(i)) {
                sb.append(word).append(" ");
            }
            int right = sb.lastIndexOf(" ");
            right = right < 0 ? sb.length() : right;

            String s = sb.substring(0, right);
            PrescriptionCollection collection = prescriptionRepository.save(PrescriptionCollection.builder()
                    .collection(s)
                    .build());
            for (String code : parsedData.get(i - 1)) {
                if (!icdCodeRepository.existsById(code)) {
                    icdCodeRepository.save(ICDCode.builder().id(code).collection(collection).build());
                }
            }
        }
    }

    public Map<Integer, PrescriptionEntry> parseExcelPrescriptions(String filePath) throws IOException {
        return excelPrescriptionParser.parsePrescriptions(filePath);
    }
}
