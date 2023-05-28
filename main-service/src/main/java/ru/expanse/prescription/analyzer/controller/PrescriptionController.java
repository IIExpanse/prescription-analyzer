package ru.expanse.prescription.analyzer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.expanse.prescription.analyzer.files.manager.PrescriptionFilesManager;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class PrescriptionController {
    private final PrescriptionFilesManager manager;

    @PostMapping(value = "/load")
    public void loadPrescriptions() throws IOException {
        manager.loadMSKTemplatePrescriptions();
        manager.loadGeneralTemplatePrescriptions();
    }
}
