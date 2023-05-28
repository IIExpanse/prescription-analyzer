package ru.expanse.prescription.analyzer.export;

import org.apache.poi.xwpf.usermodel.*;
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

@Component
public class DOCCreator {
    private final String reportsDirectory = "reports";

    public void createDoc(Map<Integer, PrescriptionEntry> entryMap, long[] analysisResults) throws IOException {
        Files.createFile(Path.of(reportsDirectory + "/report1.doc"));
        XWPFDocument document = new XWPFDocument();

        XWPFParagraph paragraph = document.createParagraph();
        XWPFRun run = paragraph.createRun();

        run.setText(String.format("Проанализировано %d записей, из них:",
                analysisResults[0]));
        run.addBreak();
        run.setText(String.format("    %d полностью соответствуют стандартам оказания медуслуг; ",
                analysisResults[1]));
        run.addBreak();
        run.setText(String.format("    %d содержат дополнительные назначения, не входящие в стандарты;",
                analysisResults[2]));
        run.addBreak();
        run.setText(String.format("    %d частично соответствуют стандартам.",
                analysisResults[3]));

        XWPFTable table = document.createTable();
        table.addNewCol();
        table.addNewCol();
        table.addNewCol();
        fillHeader(table);
        fillRows(table, entryMap);

        FileOutputStream out = new FileOutputStream(reportsDirectory + "/report1.doc");
        document.write(out);
        out.close();
        document.close();
    }

    private void fillHeader(XWPFTable table) {
        XWPFTableRow row = table.getRow(0);
        XWPFTableCell cell = row.getCell(0);
        cell.setText("ID пациента");

        cell = row.getCell(1);
        cell.setText("Код МКБ");

        cell = row.getCell(2);
        cell.setText("Дата услуги");

        cell = row.getCell(3);
        cell.setText("Результат");
    }

    private void fillRows(XWPFTable table, Map<Integer, PrescriptionEntry> entries) {
        List<Integer> list = entries.keySet().stream()
                .sorted()
                .collect(Collectors.toList());

        for (int id : list) {
            int columnCounter = 0;

            XWPFTableRow row = table.createRow();
            PrescriptionEntry entry = entries.get(id);
            row.getCell(columnCounter++).setText(entry.getPatientId());
            row.getCell(columnCounter++).setText(entry.getICDCode());
            row.getCell(columnCounter++).setText(entry.getServiceDate());
            row.getCell(columnCounter).setText(VerdictString.verdictMap.get(entry.getVerdict()));
        }
    }
}
