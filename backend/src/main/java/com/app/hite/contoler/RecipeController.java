package com.app.hite.contoler;


import com.app.hite.core.domain.recipe.Recipe;
import com.app.hite.core.dto.CreateRecipeDTO;
import com.app.hite.core.dto.PageCharacteristicsDTO;
import com.app.hite.core.dto.RecipePreviewDTO;
import com.app.hite.service.RecipeService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@AllArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    // GET
    @GetMapping("/recipes/byId")
    public Recipe getRecipeById(Long id) {
       return recipeService.getRecipeById(id);
    }

    @GetMapping("/recipes/byPaging")
    public Set<Recipe> getRecipesByPaging(PageCharacteristicsDTO pageCharacteristicsDTO) {
        return new HashSet<>(recipeService.getRecipesByPaging(pageCharacteristicsDTO));
    }

    @GetMapping("/recipes/previews")
    public Set<RecipePreviewDTO> getRecipesPreview() {
        return new HashSet<>(recipeService.getRecipesPreview());
    }

    //POST
    @PostMapping("/create/recipe")
    public ResponseEntity<?> createRecipe(@RequestBody CreateRecipeDTO createRecipeDTO) throws Exception {
        recipeService.createRecipe(createRecipeDTO);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
