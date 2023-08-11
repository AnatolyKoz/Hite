package org.example.controllers;


import lombok.AllArgsConstructor;
import org.example.stores.ProductStore;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
public class TestController {

    @RequestMapping(path = "/hello")
    public ResponseEntity<String> hello() {
        String resp = "hello";
        return ResponseEntity.ok().body(String.valueOf(resp));
    }
}
