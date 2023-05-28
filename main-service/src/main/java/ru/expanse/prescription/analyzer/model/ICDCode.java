package ru.expanse.prescription.analyzer.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "icd_codes")
public class ICDCode {
    @Id
    @Column(name = "id")
    private String id;
    @ManyToOne
    @JoinColumn(name = "collection_id", referencedColumnName = "id")
    private PrescriptionCollection collection;
}
