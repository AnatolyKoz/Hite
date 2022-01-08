package com.app.hite.service;

import com.app.hite.core.domain.productDetails.ProductDetails;
import com.app.hite.core.dto.CreateProductDTO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ProductServiceTest {
    private final ProductDetailsService productDetailsService;
    private final CreateProductDTO componentDTO;

    /**
     * create component and get ID of created component
     **/
    @Autowired
    public ProductServiceTest(ProductDetailsService productDetailsService) {
        this.productDetailsService = productDetailsService;
        componentDTO = new CreateProductDTO("test", 1, 1, 1, 1);

    }

    @Test
    public void whenComponentCreate_mustStoreEqualComponent() {
        // save
        Long componentID = productDetailsService.createProduct(componentDTO).getId();

        //get
        ProductDetails productDetails = productDetailsService.getProductById(componentID);

        //test
        assertTrue(productDetailsService.isProductExistByID(componentID));
        assertEquals(productDetails.getName(), componentDTO.getName());
        assertEquals(productDetails.getCalorificValue(), componentDTO.getCalorificValue());
        assertEquals(productDetails.getCarbohydrates(), componentDTO.getCarbohydrates());
        assertEquals(productDetails.getFats(), componentDTO.getFats());
        assertEquals(productDetails.getSquirrels(), componentDTO.getSquirrels());
    }

    @Test
    public void whenDeletedComponentWithNotExist_mustGetNoSuchElementException() {
        //save
        Long componentID = productDetailsService.createProduct(componentDTO).getId();

        //delete
        assertTrue(productDetailsService.deleteProductByID(componentID));

        // check
        assertFalse(productDetailsService.isProductExistByID(componentID));

        // test
        Assertions.assertThrows(NoSuchElementException.class, () -> {
            productDetailsService.deleteProductByID(componentID);
        });
    }

    @Test
    public void whenComponentDeleted_mustNotStoreComponent() {
        //save
        Long componentID = productDetailsService.createProduct(componentDTO).getId();

        //delete
        assertTrue(productDetailsService.deleteProductByID(componentID));

        // check
        assertFalse(productDetailsService.isProductExistByID(componentID));
    }
}
