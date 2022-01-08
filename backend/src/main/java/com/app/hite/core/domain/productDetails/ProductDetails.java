package com.app.hite.core.domain.productDetails;



import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Getter
@NoArgsConstructor
public @Entity class ProductDetails {


    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private Integer calorificValue;

    private Integer carbohydrates;
    private Integer squirrels;
    private Integer fats;

    public ProductDetails(String name, Integer carbohydrates, Integer squirrels, Integer fats, Integer calorificValue) {
        this.name = name;
        this.carbohydrates = carbohydrates;
        this.squirrels = squirrels;
        this.fats = fats;
        this.calorificValue = calorificValue;
    }

}
