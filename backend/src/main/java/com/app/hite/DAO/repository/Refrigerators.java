package com.app.hite.DAO.repository;

import com.app.hite.core.domain.refrigerator.Refrigerator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Refrigerators extends JpaRepository<Refrigerator, Long> {
}
