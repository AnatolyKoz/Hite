package com.app.hite.DAO.repository;



import com.app.hite.core.domain.recipes.Recipe;
import com.app.hite.core.dto.RecipePreviewDTO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface Recipes extends PagingAndSortingRepository<Recipe, Long> {

    @Query("SELECT new com.app.hite.core.dto.RecipePreviewDTO(recipe.name, recipe.id) FROM Recipe recipe")
    List<RecipePreviewDTO> getRecipePreview();
}
