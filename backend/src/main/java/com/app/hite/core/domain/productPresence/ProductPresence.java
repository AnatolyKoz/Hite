package com.app.hite.core.domain.productPresence;

import com.app.hite.core.domain.products.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.util.ArrayList;


@Getter
@NoArgsConstructor
@Entity
@Setter
public class ProductPresence {
    @Id
    @GeneratedValue
    Long id;
    ArrayList<Long> recipesIDs = new ArrayList<Long>();

    @Column(nullable = false)
    Long componentID;

    @Column(nullable = false)
    String name;

    public ProductPresence(ArrayList<Long> recipesIDs, Product product) {
        this.recipesIDs =  recipesIDs;
        this.componentID = product.getId();
        this.name = product.getName();
    }
}
