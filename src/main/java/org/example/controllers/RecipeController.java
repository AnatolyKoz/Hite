package org.example.controllers;

import lombok.AllArgsConstructor;
import org.example.domain.MyUser;
import org.example.domain.Recipe;
import org.example.dto.crudDto.recipeDto.CreateRecipeDTO;
import org.example.dto.crudDto.recipeDto.DeleteRecipeDTO;
import org.example.services.RecipeCrudService;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@AllArgsConstructor
@RequestMapping("/api/recipe")
public class RecipeController {

    RecipeCrudService recipeCrudService;
    @PostMapping
    public ResponseEntity<String> createRecipe(RequestEntity<CreateRecipeDTO> createRecipeDTO) {
        recipeCrudService.create(createRecipeDTO.getBody());

        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @PutMapping
    public ResponseEntity<String> updateRecipe(RequestEntity<CreateRecipeDTO> createRecipeDTO) {
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }


    @DeleteMapping
    public ResponseEntity<String> deleteRecipe(RequestEntity<DeleteRecipeDTO> createRecipeDTO) {
        String message = "ok";
        return ResponseEntity.ok().body(message);
    }

    @GetMapping
    public  ResponseEntity<Recipe> getRecipe(RequestEntity<Long> request) {
        MyUser user = (MyUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(user);
        Recipe recipe = recipeCrudService.get(request.getBody());
        return ResponseEntity.ok(recipe);
    }
}
