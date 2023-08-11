package org.example.services;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.example.domain.MyUser;
import org.example.stores.UserStore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service("userDetailsService")
@AllArgsConstructor
public class CustomUserDetailService implements UserDetailsService {
    UserStore userStore;

    @PostConstruct
    void Init() {
        MyUser user = new MyUser("{noop}password", "admin", null, true, true, true, true);
        userStore.save(user);
    }

    @Override
    @Transactional(readOnly = true)
    public MyUser loadUserByUsername(String username) throws UsernameNotFoundException {
        Set<Integer> integers = new HashSet<>(1, 2);
        Set<GrantedAuthority> s = new HashSet<>();
        s.add("add")
        MyUser user = userStore.findByUsername(username);
    }
}
