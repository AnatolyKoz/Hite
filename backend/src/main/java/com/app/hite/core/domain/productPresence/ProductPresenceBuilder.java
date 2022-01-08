package com.app.hite.core.domain.productPresence;

import com.app.hite.core.domain.productDetails.ProductDetails;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
public class ProductPresenceBuilder {

    Set<Long> recipesIDs = null;

    @Setter
    ProductDetails productDetails;

    public ProductPresence build() {
        return new ProductPresence(recipesIDs, productDetails);
    }

    public void setRecipesIDs(Collection<Long> recipesIDs) {
        if (recipesIDs != null) this.recipesIDs = new HashSet<>(recipesIDs);
    }
}
