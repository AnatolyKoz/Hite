package com.app.hite.core.domain.productPresence;

import com.app.hite.core.domain.product.Product;
import com.app.hite.core.domain.productDetails.ProductDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.*;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public @Entity class ProductPresence {
    @Id
    @GeneratedValue
    private Long id;

    @ElementCollection
    private Set<Long> recipesIDs = null;

    @Column(nullable = false)
    private Long componentID;

    @Column(nullable = false)
    private String name;

    public ProductPresence(Collection<Long> recipesIDs, ProductDetails product) {
        this.recipesIDs = new HashSet<>(recipesIDs);
        this.componentID = product.getId();
        this.name = product.getName();
    }
}
