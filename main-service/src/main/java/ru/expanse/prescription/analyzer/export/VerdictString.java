package ru.expanse.prescription.analyzer.export;

import ru.expanse.prescription.analyzer.model.PrescriptionVerdict;

import java.util.Map;

public class VerdictString {
    public static final Map<PrescriptionVerdict, String> verdictMap = Map.of(
            PrescriptionVerdict.FULL_COMPLIANCE, "Полностью соответствует",
            PrescriptionVerdict.DISCREPANCY_DETECTED, "Найдены сторонние назначения",
            PrescriptionVerdict.PARTIAL_COMPLIANCE, "Частично соответствует"
    );
}
