package com.app.hite.core.domain.recipes;

import com.app.hite.core.dto.CreateRecipeDTO;
import com.app.hite.core.dto.ProductsCharacteristicDTO;
import com.app.hite.core.dto.Product;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@NoArgsConstructor
public class RecipeBuilder {

    private String name;
    private String img;
    private Integer portions;
    private Integer difficulty;
    private ProductsCharacteristicDTO characteristicDTO;
    private List<CookingStage> cookingStages = new ArrayList<>();
    private List<Product> productList = new ArrayList<>();

    public void addCookingStage(CookingStage stage) {
        this.cookingStages.add(stage);
    }

    public void addCookingStages(List<CookingStage> stage) {
        this.cookingStages.addAll(stage);
    }

    public void addProduct(Product component) {
        this.productList.add(component);
    }

    public void addProducts(List<Product> products) {
        this.productList.addAll(products);
    }

    public Recipe build() {
        return new Recipe(name, cookingStages, productList, difficulty, portions, characteristicDTO);
    }

    public void setCreateRecipeDTO(CreateRecipeDTO createRecipeDTO) {
        this.name = createRecipeDTO.getName();
        this.portions = createRecipeDTO.getPortions();
        this.productList = createRecipeDTO.getProducts();
        this.cookingStages = createRecipeDTO.getCookingStages();
        this.difficulty = createRecipeDTO.getDifficulty();
    }
}
