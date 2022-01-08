package com.app.hite.service;

import com.app.hite.core.domain.recipe.CookingStage;
import com.app.hite.core.domain.recipe.Recipe;
import com.app.hite.core.domain.product.Product;
import com.app.hite.core.domain.unit.SiPrefixes;
import com.app.hite.core.domain.unit.Unit;
import com.app.hite.core.domain.unit.UnitType;
import com.app.hite.core.dto.CreateProductDTO;
import com.app.hite.core.dto.CreateRecipeDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class RecipeServiceTest {

    private final  RecipeService recipeService;
    private final ProductDetailsService productDetailsService;
    private final ProductPresenceService productPresenceService;

    private  final  CreateRecipeDTO createRecipeDTO;
    private  final  Long productID;

    @Autowired
    public RecipeServiceTest(RecipeService recipeService, ProductDetailsService productDetailsService, ProductPresenceService productPresenceService) {
        this.recipeService = recipeService;
        this.productDetailsService = productDetailsService;

        // Creating new product and save id
        productID = productDetailsService.createProduct(
                new CreateProductDTO("test", 1, 1, 1, 1)).getId();
        this.productPresenceService = productPresenceService;

        // init recipeDto with one recipe component
        Set<CookingStage> cookingStages = new HashSet<>();
        cookingStages.add(new CookingStage("img", "header", "paragraph"));
        Set<Product> components = new HashSet<>();
        components.add(new Product(productID, new Unit(SiPrefixes.DECI, UnitType.MASS, 1)));

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
        assertTrue(productPresenceService.getProductPresenceByID(productID).getRecipesIDs().contains(recipe.getId()));
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
        assertNull(recipeService.getRecipeById(id));
    }

    @Test
    @Transactional
    public void whenRecipeDeleted_mustNotComponentPresenceContainRecipeID() throws Exception {
        // create
        Recipe recipe = recipeService.createRecipe(createRecipeDTO);

        Long id = recipe.getId();
        // delete
        recipeService.deleteRecipeByID(id);

        System.out.println(productPresenceService.getProductPresenceByID(productID).getRecipesIDs());
        // check
        assertFalse(productPresenceService.getProductPresenceByID(productID).getRecipesIDs().contains(id));
    }


}
