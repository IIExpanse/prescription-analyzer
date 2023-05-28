package ru.expanse.prescription.analyzer.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "prescriptions_collection")
public class PrescriptionCollection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "collection")
    private String collection;
    @OneToMany(mappedBy = "collection")
    @ToString.Exclude
    private List<ICDCode> codes;
}
