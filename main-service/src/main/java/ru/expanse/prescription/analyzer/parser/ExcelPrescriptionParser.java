package ru.expanse.prescription.analyzer.parser;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import ru.expanse.prescription.analyzer.model.PrescriptionEntry;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ExcelPrescriptionParser {
    public Map<Integer, PrescriptionEntry> parsePrescriptions(String filePath) throws IOException {
        FileInputStream file = new FileInputStream(filePath);
        XSSFWorkbook workbook = new XSSFWorkbook(file);
        XSSFSheet sheet = workbook.getSheetAt(0);
        Map<Integer, PrescriptionEntry> data = new HashMap<>();
        int i = 0;

        for (Row row : sheet) {
            List<String> list = new ArrayList<>();
            for (Cell cell : row) {
                list.add(cell.toString());
            }
            PrescriptionEntry entry = PrescriptionEntry.builder()
                    .gender(list.get(0))
                    .birthDate(list.get(1))
                    .patientId(list.get(2))
                    .ICDCode(list.get(3))
                    .diagnosis(list.get(4))
                    .serviceDate(list.get(5))
                    .doctorTitle(list.get(6))
                    .prescriptions(list.get(7))
                    .build();
            data.put(i++, entry);
        }
        return data;
    }
}
