package ru.expanse.prescription.analyzer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.expanse.prescription.analyzer.model.ICDCode;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface ICDCodeRepository extends JpaRepository<ICDCode, Long> {
    boolean existsById(String code);
    Optional<ICDCode> findById(String id);
}
