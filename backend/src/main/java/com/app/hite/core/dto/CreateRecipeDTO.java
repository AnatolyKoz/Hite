package com.app.hite.core.dto;

import com.app.hite.core.domain.recipes.CookingStage;
import com.app.hite.core.domain.recipes.RecipeProduct;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@AllArgsConstructor
public class CreateRecipeDTO {

    @Min(value = 0)
    @Max(value = 5)
    @NotNull(message = "difficulty cannot be null")
    private  Integer difficulty;

    @Min(value = 0)
    @Max(value = 12)
    @NotNull(message = "Portions cannot be null")
    private  Integer portions;

    @NotNull(message = "Name cannot be null")
    @Size(min = 4, max = 20)
    private  String name;

    @NotNull(message = "CookingStages cannot be null")
    private  List<CookingStage> cookingStages;

    @NotNull(message = "Products cannot be null")
    private  List<RecipeProduct> products;
}
