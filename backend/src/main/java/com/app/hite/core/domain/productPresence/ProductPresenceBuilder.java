package com.app.hite.core.domain.productPresence;

import com.app.hite.core.domain.products.Product;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
public class ProductPresenceBuilder {

    ArrayList<Long> recipesIDs = new ArrayList<Long>();

    @Setter
    Product product;

    public ProductPresence build() {
        return new ProductPresence(recipesIDs, product);
    }

    public void setRecipesIDs(ArrayList<Long> recipesIDs) {
        if (recipesIDs != null) this.recipesIDs = recipesIDs;
    }
}
