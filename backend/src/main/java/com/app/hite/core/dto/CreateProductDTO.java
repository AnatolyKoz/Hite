package com.app.hite.core.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class CreateProductDTO {
    @NotNull(message = "Name cannot be null")
    private String name;

    @Min(value = 0, message = "CalorificValue should be more than 0")
    @NotNull(message = "CalorificValue cannot be null")
    private Integer calorificValue;
    @Min(value = 0, message = "Carbohydrates should be more than 0")
    @NotNull(message = "Carbohydrates cannot be null")
    private Integer carbohydrates;
    @Min(value = 0, message = "Squirrels should be more than 0")
    @NotNull(message = "Squirrels cannot be null")
    private Integer squirrels;
    @Min(value = 0, message = "Fats should be more than 0")
    @NotNull(message = "Fats cannot be null")
    private Integer fats;
}
