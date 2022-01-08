package com.app.hite.DAO.repository;

import com.app.hite.core.domain.role.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Roles extends JpaRepository<Role, Long> {
}
