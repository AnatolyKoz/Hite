package org.example.services;

import lombok.AllArgsConstructor;
import org.example.domain.Dish;
import org.example.domain.Recipe;
import org.example.domain.RecipeProduct;
import org.example.dto.crudDto.recipeDto.CreateRecipeDTO;
import org.example.dto.crudDto.recipeDto.DeleteRecipeDTO;
import org.example.stores.DishStore;
import org.example.stores.ProductStore;
import org.example.stores.RecipeStore;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@AllArgsConstructor
public class RecipeCrudServiceJPA implements RecipeCrudService {

    RecipeStore recipeStore;
    DishStore dishStore;
    ProductStore productStore;

    @Transactional
    @Override
    public void create(CreateRecipeDTO createRecipeDTO) {
        Dish dish = dishStore.getReferenceById(createRecipeDTO.getDishId());
        Recipe recipe = new Recipe.Builder().setDish(dish).setName(createRecipeDTO.getName()).build();
        List<RecipeProduct> recipeProductList = createRecipeDTO.getRecipeProductsDTOs().stream()
                .map((recipeProduct) -> new RecipeProduct(recipe,
                        productStore.getReferenceById(recipeProduct.getProductID()),
                        recipeProduct.getPhysicalDetails()))
                .toList();
        recipe.setRecipeProducts(recipeProductList);
        recipeStore.save(recipe);
    }

    @Transactional
    @Override
    public void delete(DeleteRecipeDTO deleteRecipeDTO) {
        recipeStore.deleteById(deleteRecipeDTO.getId());
    }

    public Recipe get(Long id) {
        return recipeStore.getReferenceById(id);
    }
}
