package org.example.services;

import org.example.domain.Recipe;
import org.example.dto.crudDto.recipeDto.CreateRecipeDTO;
import org.example.dto.crudDto.recipeDto.DeleteRecipeDTO;

public interface RecipeCrudService {
    void create(CreateRecipeDTO createRecipeDTO);
    void delete(DeleteRecipeDTO deleteRecipeDTO);
    Recipe get(Long id);
}
