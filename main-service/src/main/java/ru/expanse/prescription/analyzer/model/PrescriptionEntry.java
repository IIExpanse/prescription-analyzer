package ru.expanse.prescription.analyzer.model;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PrescriptionEntry {
    private String gender;
    private String birthDate;
    private String patientId;
    private String ICDCode;
    private String diagnosis;
    private String serviceDate;
    private String doctorTitle;
    private String prescriptions;
    private PrescriptionVerdict verdict;
}
