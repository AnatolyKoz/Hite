package org.example.stores;

import org.example.domain.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  UserStore extends JpaRepository<MyUser, Long> {
    MyUser findByUsername(String username);

}
