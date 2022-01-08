package com.app.hite.core.domain.role;

import com.app.hite.core.domain.user.User;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;


public @Entity class Role implements GrantedAuthority {

    @Id
    private Long id;

    @ManyToMany(mappedBy = "roles")
    private Set<User> users;

    @Override
    public String getAuthority() {
        return null;
    }
}
