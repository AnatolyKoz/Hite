package com.app.hite.core.domain.user;

import com.app.hite.core.domain.refrigerator.Refrigerator;
import com.app.hite.core.domain.role.Role;
import lombok.*;
import org.hibernate.Hibernate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public @Entity class User implements UserDetails {
    @Id
    private  Long id;

    private String username;
    private Date userBirthDay;

    @ElementCollection
    private Set<UserHeight> userHeight;
    @ElementCollection
    private Set<UserWidth> userWidth;


    @ToString.Exclude
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;

    @ToString.Exclude
    @ManyToOne
    private Refrigerator userRefrigerator;

    private String password;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return id != null && Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
