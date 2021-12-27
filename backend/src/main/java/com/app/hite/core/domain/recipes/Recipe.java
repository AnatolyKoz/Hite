package com.app.hite.core.domain.recipes;



import javax.persistence.*;
import java.util.List;

import com.app.hite.core.dto.ProductsCharacteristicDTO;
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
    private List<CookingStage> cookingStages;

    @ElementCollection
    private List<RecipeProduct> productList;


    public Recipe(String name, List<CookingStage> cookingStages, List<RecipeProduct> productList, Integer difficulty, Integer portions,
                  ProductsCharacteristicDTO characteristicDTO) {
        this.name = name;
        this.productList = productList;
        this.cookingStages = cookingStages;
        this.difficulty = difficulty;
        this.portions = portions;
        this.carbohydrates = characteristicDTO.getCarbohydrates();
        this.calorificValue = characteristicDTO.getCalorificValue();
        this.squirrels = characteristicDTO.getSquirrels();
        this.fats = characteristicDTO.getFats();
    }

//    @Column(name = "dateOfCreation", updatable = false)
//    @Temporal(TemporalType.DATE)
//    @CreatedDate
//    Date dateOfCreation;

//    @UpdateTimestamp
//    Date dateOfUpdate;
}
