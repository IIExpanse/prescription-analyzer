package ru.expanse.prescription.analyzer.export;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Component;
import ru.expanse.prescription.analyzer.model.PrescriptionEntry;
import ru.expanse.prescription.analyzer.model.PrescriptionVerdict;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class PDFCreator {
    private final String reportsDirectory = "reports";

    public void createPDF(Map<Integer, PrescriptionEntry> entryMap) throws IOException, DocumentException {
        Document document = new Document(PageSize.A4.rotate());
        Files.createFile(Path.of(reportsDirectory + "/report1.pdf"));
        PdfWriter.getInstance(document,
                new FileOutputStream(reportsDirectory + "/report1.pdf"));
        Collection<PrescriptionEntry> entries = entryMap.values();
        long totalEntries = entries.size();
        long fullyCompliant = entries.stream()
                .filter(prescriptionEntry -> prescriptionEntry.getVerdict() == PrescriptionVerdict.FULL_COMPLIANCE)
                .count();
        long containDiscrepancies = entries.stream()
                .filter(prescriptionEntry -> prescriptionEntry.getVerdict() == PrescriptionVerdict.DISCREPANCY_DETECTED)
                .count();;
        long partiallyCompliant = entries.stream()
                .filter(prescriptionEntry -> prescriptionEntry.getVerdict() == PrescriptionVerdict.PARTIAL_COMPLIANCE)
                .count();;

        document.open();
        Font font = new Font(BaseFont.createFont("font/timesnrcyrmt.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
        PdfPTable table = new PdfPTable(4);
        table.setWidths(new int[]{15, 15, 20, 50});
        addTableHeader(table, font);
        addRows(table, font, entryMap);

        Chunk chunk = new Chunk(String.format("Проанализировано %d записей, из них:" + System.lineSeparator() +
                "    %d полностью соответствуют стандартам оказания медуслуг; " + System.lineSeparator() +
                "    %d содержат дополнительные назначения, не входящие в стандарты;" + System.lineSeparator() +
                "    %d частично соответствуют стандартам." + System.lineSeparator(),
                totalEntries,
                fullyCompliant,
                containDiscrepancies,
                partiallyCompliant), font);
        Paragraph paragraph = new Paragraph(chunk);
        paragraph.setSpacingAfter(15);

        document.add(paragraph);
        document.add(new Paragraph());
        document.add(table);
        document.close();
    }

    private void addTableHeader(PdfPTable table, Font font) {
        Stream.of("ID пациента", "Код МКБ", "Дата услуги", "Результат")
                .forEach(columnTitle -> {
                    PdfPCell header = new PdfPCell();
                    header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                    header.setBorderWidth(2);
                    header.setPhrase(new Phrase(columnTitle, font));
                    table.addCell(header);
                });
    }

    private void addRows(PdfPTable table, Font font, Map<Integer, PrescriptionEntry> entries) {
        List<Integer> collection = entries.keySet()
                .stream()
                .sorted()
                .collect(Collectors.toList());

        for (int id : collection) {
            PrescriptionEntry entry = entries.get(id);
            table.addCell(new PdfPCell(new Phrase(entry.getPatientId(), font)));
            table.addCell(new PdfPCell(new Phrase(entry.getICDCode(), font)));
            table.addCell(new PdfPCell(new Phrase(entry.getServiceDate(), font)));
            table.addCell(new PdfPCell(new Phrase(VerdictString.verdictMap.get(entry.getVerdict()), font)));
        }
    }
}
