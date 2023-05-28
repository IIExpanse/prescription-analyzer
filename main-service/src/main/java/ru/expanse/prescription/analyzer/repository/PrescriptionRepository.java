package ru.expanse.prescription.analyzer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.expanse.prescription.analyzer.model.ICDCode;
import ru.expanse.prescription.analyzer.model.PrescriptionCollection;

import java.util.Collection;

@Repository
public interface PrescriptionRepository extends JpaRepository<PrescriptionCollection, Long> {
}
