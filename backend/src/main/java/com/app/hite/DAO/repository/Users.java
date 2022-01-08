package com.app.hite.DAO.repository;

import com.app.hite.core.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Users extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
