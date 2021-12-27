package com.app.hite.core.domain.products;

import com.app.hite.core.dto.CreateProductDTO;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
public class ComponentBuilder {

    public ComponentBuilder(CreateProductDTO componentDTO) {
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

    public Product build() {
        return new Product(name, carbohydrates, squirrels, fats, calorificValue);
    }
}
