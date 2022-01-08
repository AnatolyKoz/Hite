package com.app.hite.core.dto;

import com.app.hite.core.domain.product.Product;
import com.app.hite.core.domain.recipe.CookingStage;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

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
    private Set<CookingStage> cookingStages;

    @NotNull(message = "ProductsDetails cannot be null")
    private  Set<Product> products;
}
