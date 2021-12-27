package com.app.hite.service;

import com.app.hite.DAO.repository.ProductPresences;
import com.app.hite.core.domain.productPresence.ProductPresence;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductPresenceService {
    private final ProductPresences productPresencesRepository;

    @Transactional
    public void addRecipeToProductPresence(Long componentID, Long recipeID) {

        ProductPresence productPresence = productPresencesRepository.findByComponentID(componentID);
        productPresence.getRecipesIDs().add(recipeID);
        productPresencesRepository.save(productPresence);
    }

    @Transactional
    public void removeRecipeFromProductPresence(List<Long> componentIDs, Long recipeID) {
        for (Long componentID : componentIDs) {
            ProductPresence productPresence = productPresencesRepository.findByComponentID(componentID);
            productPresence.getRecipesIDs().remove(recipeID);
            productPresencesRepository.save(productPresence);
        }
    }

    @Transactional
    public void save(ProductPresence productPresence) {
        productPresencesRepository.save(productPresence);
    }


    @Transactional
    public void deleteProductPresences(Long componentID) {
        if (!productPresencesRepository.findByComponentID(componentID).getRecipesIDs().isEmpty())
            throw new IllegalStateException("Recipe List of componentPresents must be empty");
        productPresencesRepository.deleteByComponentID(componentID);
    }

    @ReadOnlyProperty
    public List<ProductPresence> getProductPresence() {
        return (List<ProductPresence>) productPresencesRepository.findAll();
    }

    @ReadOnlyProperty
    public ProductPresence getProductPresenceByID(Long id) {
        return productPresencesRepository.findByComponentID(id);
    }

}
