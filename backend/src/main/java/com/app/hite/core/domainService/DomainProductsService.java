package com.app.hite.core.domainService;

import com.app.hite.core.domain.products.Product;
import com.app.hite.core.dto.ProductsCharacteristicDTO;
import com.app.hite.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DomainProductsService {

    private final ProductService ser;

    public ProductsCharacteristicDTO getComponentsCharacteristicDTO(List<Long> list) {
        Integer calorificValue = 0;
        Integer carbohydrates = 0;
        Integer squirrels = 0;
        Integer fats = 0;

        List<Product> products =  ser.getAllProductsByIDS(list);
        for( Product product : products) {
            calorificValue += product.getCalorificValue();
            carbohydrates += product.getCarbohydrates();
            squirrels += product.getFats();
            fats += product.getSquirrels();
        }
        return new ProductsCharacteristicDTO(calorificValue, carbohydrates, squirrels, fats);
    }

    public static void getCallory() {

    }
}
