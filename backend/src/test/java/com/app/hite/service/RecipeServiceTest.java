package com.app.hite.service;

import com.app.hite.core.domain.recipes.CookingStage;
import com.app.hite.core.domain.recipes.Recipe;
import com.app.hite.core.domain.recipes.RecipeProduct;
import com.app.hite.core.domain.units.SiPrefixes;
import com.app.hite.core.domain.units.Unit;
import com.app.hite.core.domain.units.UnitType;
import com.app.hite.core.dto.CreateProductDTO;
import com.app.hite.core.dto.CreateRecipeDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class RecipeServiceTest {

    private final  RecipeService recipeService;
    private  final ProductService productService;
    private  final ProductPresenceService productPresenceService;

    private  final  CreateRecipeDTO createRecipeDTO;
    private  final  Long proudctID;

    @Autowired
    public RecipeServiceTest(RecipeService recipeService, ProductService productService, ProductPresenceService productPresenceService) {
        this.recipeService = recipeService;
        this.productService = productService;

        // Creating new product and save id
        proudctID = productService.createProduct(
                new CreateProductDTO("test", 1, 1, 1, 1)).getId();
        this.productPresenceService = productPresenceService;

        // init recipeDto with one recipe component
        List<CookingStage> cookingStages = new ArrayList<>();
        cookingStages.add(new CookingStage("img", "header", "paragraph"));
        List<RecipeProduct> components = new ArrayList<>();
        components.add(new RecipeProduct(proudctID, new Unit(SiPrefixes.DECI, UnitType.MASS, 1)));

        createRecipeDTO = new CreateRecipeDTO(1, 1, "test", cookingStages, components);
    }

    @Test
    @Transactional
    public void whenRecipeCreate_mustStoreRecipe() throws Exception {
        // create
        Recipe recipe = recipeService.createRecipe(createRecipeDTO);

        // get
        recipe = recipeService.getRecipeById(recipe.getId());

        // check
        assertNotEquals(recipe.getId(), null);
        assertEquals(recipe.getDifficulty(), createRecipeDTO.getDifficulty());
        assertEquals(recipe.getName(), createRecipeDTO.getName());
        assertEquals(recipe.getPortions(), createRecipeDTO.getPortions());
    }


    @Test
    @Transactional
    public void whenRecipeCreated_mustComponentPresenceStoreRecipeID() throws Exception {
        // create
        Recipe recipe = recipeService.createRecipe(createRecipeDTO);

        // get
        recipe = recipeService.getRecipeById(recipe.getId());

        // check
        assertEquals(productPresenceService.getProductPresenceByID(proudctID).getRecipesIDs().get(0), recipe.getId());
    }


    @Test
    @Transactional
    public void whenRecipeDeleted_mustNotContainRecipe() throws Exception {
        // create
        Recipe recipe = recipeService.createRecipe(createRecipeDTO);

        Long id = recipe.getId();
        // delete
        recipeService.deleteRecipeByID(id);

        // check
        assertEquals(recipeService.getRecipeById(id), null);
    }

    @Test
    @Transactional
    public void whenRecipeDeleted_mustNotComponentPresenceContainRecipeID() throws Exception {
        // create
        Recipe recipe = recipeService.createRecipe(createRecipeDTO);

        Long id = recipe.getId();
        // delete
        recipeService.deleteRecipeByID(id);

        System.out.println(productPresenceService.getProductPresenceByID(proudctID).getRecipesIDs());
        // check
        assertFalse(productPresenceService.getProductPresenceByID(proudctID).getRecipesIDs().contains(id));
    }


}
