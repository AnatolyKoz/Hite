package com.app.hite.core.domain.products;

import com.app.hite.core.dto.CreateProductDTO;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
public class ComponentDetailsBuilder {

    public ComponentDetailsBuilder(CreateProductDTO componentDTO) {
        this.setFats(componentDTO.getFats());
        this.setSquirrels(componentDTO.getSquirrels());
        this.setCalorificValue(componentDTO.getCalorificValue());
        this.setCarbohydrates(componentDTO.getCarbohydrates());
        this.setName(componentDTO.getName());
    }
    private String name;

    Integer carbohydrates;
    Integer squirrels;
    Integer fats;
    Integer calorificValue;

    public ProductDetails build() {
        return new ProductDetails(name, carbohydrates, squirrels, fats, calorificValue);
    }
}
