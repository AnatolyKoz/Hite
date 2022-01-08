package com.app.hite.service;

import com.app.hite.DAO.repository.Recipes;
import com.app.hite.core.domain.recipe.Recipe;
import com.app.hite.core.domain.recipe.RecipeBuilder;
import com.app.hite.core.domain.product.Product;
import com.app.hite.core.domainService.DomainProductsService;
import com.app.hite.core.dto.CreateRecipeDTO;
import com.app.hite.core.dto.PageCharacteristicsDTO;
import com.app.hite.core.dto.RecipePreviewDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@AllArgsConstructor
public class RecipeService {

    private final Recipes recipesRepository;

    private final ProductPresenceService productPresenceService;

    private final DomainProductsService domainProductsService;
    private final ProductDetailsService productDetailsService;


    public Recipe getRecipeById(Long id) {
        return recipesRepository.findById(id).orElse(null);
    }

    public Collection<Recipe> getRecipesByPaging(PageCharacteristicsDTO characteristic) {
        Pageable paging = PageRequest.of(characteristic.getNumber(),
                characteristic.getPageSize(),
                Sort.by(characteristic.getSortBy()));
        Page<Recipe> pagedResult = recipesRepository.findAll(paging);
        return  pagedResult.hasContent() ? pagedResult.getContent() : new ArrayList<>();
    }

    public Collection<RecipePreviewDTO> getRecipesPreview() {
        return recipesRepository.getRecipePreview();
    }

    @Transactional
    public Recipe createRecipe(CreateRecipeDTO createRecipeDTO)  {
        Set<Long> componentIdentifierSet = new HashSet<>();

        for (Product product : createRecipeDTO.getProducts()) {
            Long componentIdentifier = product.getId();
            componentIdentifierSet.add(componentIdentifier);
            if (!productDetailsService.isProductExistByID(componentIdentifier))
                throw new NoSuchElementException("ProductDetails don't exist");
        }

        RecipeBuilder builder = new RecipeBuilder();

        builder.setCreateRecipeDTO(createRecipeDTO);
        builder.setCharacteristicDTO(domainProductsService.getComponentsCharacteristicDTO(componentIdentifierSet));

        Recipe recipe = recipesRepository.save(builder.build());

        for (Long componentID : componentIdentifierSet) {
            productPresenceService.addRecipeToProductPresence(componentID, recipe.getId());
        }
        return recipe;
    }

    @Transactional
    public void deleteRecipeByID(Long id) {
        if (!this.isRecipeExistByID(id)) throw new NoSuchElementException("Recipe don't exist");
        Collection<Long> componentIDs= new HashSet<>();
        for (Product component :  this.getRecipeById(id).getProductList()) {
            componentIDs.add(component.getId());
        }
        productPresenceService.removeRecipeFromProductPresence(componentIDs, id);
        recipesRepository.deleteById(id);
    }

    /**
     * {@literal ReadOnly} METHODE which will return true if recipe Exist or false if not
     */
    @ReadOnlyProperty
    public Boolean isRecipeExistByID(Long id) {
        return recipesRepository.existsById(id);
    }
}