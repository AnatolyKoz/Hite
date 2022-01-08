package com.app.hite.core.domain.productDetails;

import com.app.hite.core.dto.CreateProductDTO;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
public class ProductDetailsBuilder {

    public ProductDetailsBuilder(CreateProductDTO componentDTO) {
        this.setFats(componentDTO.getFats());
        this.setSquirrels(componentDTO.getSquirrels());
        this.setCalorificValue(componentDTO.getCalorificValue());
        this.setCarbohydrates(componentDTO.getCarbohydrates());
        this.setName(componentDTO.getName());
    }
    private String name;

    private Integer carbohydrates;
    private Integer squirrels;
    private Integer fats;
    private Integer calorificValue;

    public ProductDetails build() {
        return new ProductDetails(name, carbohydrates, squirrels, fats, calorificValue);
    }
}
