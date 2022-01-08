package com.app.hite.core.domainService;

import com.app.hite.core.domain.productDetails.ProductDetails;
import com.app.hite.core.dto.ProductsCharacteristicDTO;
import com.app.hite.service.ProductDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@AllArgsConstructor
public class DomainProductsService {

    private final ProductDetailsService productDetailsService;

    public ProductsCharacteristicDTO getComponentsCharacteristicDTO(Collection<Long> collection) {
        Integer calorificValue = 0;
        Integer carbohydrates = 0;
        Integer squirrels = 0;
        Integer fats = 0;

        Collection<ProductDetails> productsDetails =  productDetailsService.getAllProductsByIDS(collection);
        for( ProductDetails productDetails : productsDetails) {
            calorificValue += productDetails.getCalorificValue();
            carbohydrates += productDetails.getCarbohydrates();
            squirrels += productDetails.getFats();
            fats += productDetails.getSquirrels();
        }
        return new ProductsCharacteristicDTO(calorificValue, carbohydrates, squirrels, fats);
    }

    public static void getCallory() {

    }
}
