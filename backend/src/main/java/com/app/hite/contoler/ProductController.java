package com.app.hite.contoler;

import java.util.List;

import com.app.hite.core.domain.productPresence.ProductPresence;
import com.app.hite.core.domain.products.Product;
import com.app.hite.core.dto.CreateProductDTO;
import com.app.hite.core.dto.PageCharacteristicsDTO;
import com.app.hite.service.ProductPresenceService;
import com.app.hite.service.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final ProductPresenceService productPresenceService;

    //GET
    @GetMapping("/product/byId")
    public Product getComponentById(@RequestParam("id") Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/products/byIds/")
    public List<Product> getComponentsByIDs(@RequestParam("ids") List<Long> ids) {
        return productService.getAllProductsByIDS(ids);
    }

    @GetMapping("/products")
    public List<Product> getComponentsById(PageCharacteristicsDTO pageCharacteristicsDTO) {
        return productService.getProductsByPaging(pageCharacteristicsDTO);
    }

    @GetMapping("/products/productPresences")
    public List<ProductPresence> getComponentPresence() {
        return productPresenceService.getProductPresence();
    }

    //POST
    @PostMapping("/create/product")
    public ResponseEntity<?> addComponent(@RequestBody CreateProductDTO componentDTO) throws JsonProcessingException {
        productService.createProduct(componentDTO);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
