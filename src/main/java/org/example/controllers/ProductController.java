package org.example.controllers;


import lombok.AllArgsConstructor;
import org.example.dto.crudDto.productDto.CreateProductDTO;
import org.example.dto.crudDto.productDto.DeleteProductDTO;
import org.example.dto.crudDto.recipeDto.DeleteRecipeDTO;
import org.example.services.ProductCrudService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/product")
@AllArgsConstructor
public class ProductController {

    ProductCrudService productCrudService;
    @PostMapping
    public ResponseEntity<String> createProduct(RequestEntity<CreateProductDTO> createProductDTO) {
        productCrudService.create(createProductDTO.getBody());
        System.out.println("AAAAAAAa" + createProductDTO);
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @PutMapping
    public ResponseEntity<String> updateProduct(RequestEntity<CreateProductDTO> createProductDTO) {

        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteProduct(RequestEntity<DeleteProductDTO> deleteProductDTO) {
        String message = "ok";
        productCrudService.delete(deleteProductDTO.getBody());
        return ResponseEntity.ok().body(message);
    }

    @GetMapping
    public ResponseEntity<String> getProduct(RequestEntity<Long> deleteProductDTO) {
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

}
