package org.example.controllers;


import lombok.AllArgsConstructor;
import org.example.dto.crudDto.dishDto.CreateDishDTO;
import org.example.dto.crudDto.dishDto.DeleteDishDTO;
import org.example.dto.crudDto.productDto.CreateProductDTO;
import org.example.dto.crudDto.productDto.DeleteProductDTO;
import org.example.services.DishCrudService;
import org.example.services.ProductCrudService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/dish")
@AllArgsConstructor
public class DishController {

    DishCrudService dishCrudService;
    @PostMapping
    public ResponseEntity<String> createDish(RequestEntity<CreateDishDTO> request) {
        dishCrudService.create(request.getBody());
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @PutMapping
    public ResponseEntity<String> updateDish(RequestEntity<CreateDishDTO> request) {

        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteDish(RequestEntity<DeleteDishDTO> request) {
        String message = "ok";
        dishCrudService.delete(request.getBody());
        return ResponseEntity.ok().body(message);
    }

    @GetMapping
    public ResponseEntity<String> getProduct(RequestEntity<Long> deleteProductDTO) {
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

}