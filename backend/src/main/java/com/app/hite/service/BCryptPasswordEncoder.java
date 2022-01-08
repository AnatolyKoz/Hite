package com.app.hite.service;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class BCryptPasswordEncoder {
    @Bean BCryptPasswordEncoder bcryptPasswordEncoder() {
        return  new BCryptPasswordEncoder();
    }
}
