package ru.expanse.prescription.analyzer;

import com.itextpdf.text.DocumentException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.util.ResourceUtils;
import ru.expanse.prescription.analyzer.export.DOCCreator;
import ru.expanse.prescription.analyzer.export.PDFCreator;
import ru.expanse.prescription.analyzer.files.manager.PrescriptionFilesManager;
import ru.expanse.prescription.analyzer.parser.ExcelPrescriptionParser;
import ru.expanse.prescription.analyzer.service.PrescriptionService;

import java.io.IOException;


/**
 * Для работы тестовых методов необходима запущенная БД PostgreSQL. Порт 6541 (если не менялся в настройках)
 */
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class PrescriptionFilesManagerTest {
    @Autowired
    private PrescriptionFilesManager manager;
    @Autowired
    private ExcelPrescriptionParser parser;
    @Autowired
    private PrescriptionService service;
    @Autowired
    private PDFCreator pdfCreator;
    @Autowired
    private DOCCreator docCreator;

    @Test
    public void loadPrescriptionsTest() throws IOException {
        manager.loadMSKTemplatePrescriptions();
        manager.loadGeneralTemplatePrescriptions();
    }

    @Test
    public void loadDataSetTest() throws IOException {
        System.out.println(
                parser.parsePrescriptions(
                        ResourceUtils.getFile("classpath:dataset/Dataset.xlsx").getPath()));
    }

    @Test
    public void analyzePrescriptionsTest() throws IOException {
        System.out.println(
                service.analyzePrescriptions(
                        ResourceUtils.getFile("classpath:dataset/Dataset.xlsx").getPath()));
    }

    @Test
    public void createPDFTest() throws DocumentException, IOException {

        pdfCreator.createPDF(service.analyzePrescriptions(
                ResourceUtils.getFile("classpath:dataset/Dataset.xlsx").getPath()));
    }

    @Test
    public void createDOCTest() throws IOException {
        docCreator.createDoc(service.analyzePrescriptions(
                ResourceUtils.getFile("classpath:dataset/Dataset.xlsx").getPath()), new long[]{1, 2, 3, 4});
    }
}
