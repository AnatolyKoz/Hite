package com.app.hite.contoler;

import java.util.*;

import com.app.hite.core.domain.productPresence.ProductPresence;
import com.app.hite.core.domain.productDetails.ProductDetails;
import com.app.hite.core.dto.CreateProductDTO;
import com.app.hite.core.dto.PageCharacteristicsDTO;
import com.app.hite.service.ProductPresenceService;
import com.app.hite.service.ProductDetailsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class ProductController {

    private final ProductDetailsService productDetailsService;
    private final ProductPresenceService productPresenceService;

    //GET
    @GetMapping("/product/byId")
    public ProductDetails getComponentById(@RequestParam("id") Long id) {
        return productDetailsService.getProductById(id);
    }

    @GetMapping("/products/byIds/")
    public Set<ProductDetails> getComponentsByIDs(@RequestParam("ids") List<Long> ids) {
        return new HashSet<>(productDetailsService.getAllProductsByIDS(ids));
    }

    @GetMapping("/products")
    public Set<ProductDetails> getComponentsById(PageCharacteristicsDTO pageCharacteristicsDTO) {
        return new HashSet<>(productDetailsService.getProductsByPaging(pageCharacteristicsDTO));
    }

    @GetMapping("/products/productPresences")
    public Set<ProductPresence> getComponentPresence() {
        return new HashSet<>(productPresenceService.getProductPresence());
    }

    //POST
    @PostMapping("/create/product")
    public ResponseEntity<?> addComponent(@RequestBody CreateProductDTO componentDTO) throws JsonProcessingException {
        productDetailsService.createProduct(componentDTO);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
