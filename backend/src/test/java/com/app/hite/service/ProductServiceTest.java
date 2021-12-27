package com.app.hite.service;

import com.app.hite.core.domain.products.Product;
import com.app.hite.core.dto.CreateProductDTO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ProductServiceTest {
    private final ProductService productService;
    private final CreateProductDTO componentDTO;

    /**
     * create component and get ID of created component
     **/
    @Autowired
    public ProductServiceTest(ProductService productService) {
        this.productService = productService;
        componentDTO = new CreateProductDTO("test", 1, 1, 1, 1);

    }

    @Test
    public void whenComponentCreate_mustStoreEqualComponent() {
        // save
        Long componentID = productService.createProduct(componentDTO).getId();

        //get
        Product product = productService.getProductById(componentID);

        //test
        assertTrue(productService.isProductExistByID(componentID));
        assertEquals(product.getName(), componentDTO.getName());
        assertEquals(product.getCalorificValue(), componentDTO.getCalorificValue());
        assertEquals(product.getCarbohydrates(), componentDTO.getCarbohydrates());
        assertEquals(product.getFats(), componentDTO.getFats());
        assertEquals(product.getSquirrels(), componentDTO.getSquirrels());
    }

    @Test
    public void whenDeletedComponentWithNotExist_mustGetNoSuchElementException() {
        //save
        Long componentID = productService.createProduct(componentDTO).getId();

        //delete
        assertTrue(productService.deleteProductByID(componentID));

        // check
        assertFalse(productService.isProductExistByID(componentID));

        // test
        Assertions.assertThrows(NoSuchElementException.class, () -> {
            productService.deleteProductByID(componentID);
        });
    }

    @Test
    public void whenComponentDeleted_mustNotStoreComponent() {
        //save
        Long componentID = productService.createProduct(componentDTO).getId();

        //delete
        assertTrue(productService.deleteProductByID(componentID));

        // check
        assertFalse(productService.isProductExistByID(componentID));
    }
}
