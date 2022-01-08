package com.app.hite.core.domain.recipe;



import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.app.hite.core.dto.ProductsCharacteristicDTO;
import com.app.hite.core.domain.product.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Table(name = "recipes")
public @Entity class Recipe  {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Integer difficulty;
    private Integer portions;

    private String name;

    private Integer calorificValue;

    private Integer carbohydrates;
    private Integer squirrels;
    private Integer fats;

    @ElementCollection
    private Set<CookingStage> cookingStages;

    @ElementCollection
    private Set<Product> productList;


    public Recipe(String name, Collection<CookingStage> cookingStages, Collection<Product> productList, Integer difficulty, Integer portions,
                  ProductsCharacteristicDTO characteristicDTO) {
        this.name = name;
        this.productList = new HashSet<>(productList);
        this.cookingStages = new HashSet<>(cookingStages);
        this.difficulty = difficulty;
        this.portions = portions;
        this.carbohydrates = characteristicDTO.getCarbohydrates();
        this.calorificValue = characteristicDTO.getCalorificValue();
        this.squirrels = characteristicDTO.getSquirrels();
        this.fats = characteristicDTO.getFats();
    }
}
