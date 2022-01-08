package com.app.hite.core.domain.refrigerator;

import com.app.hite.core.domain.product.Product;
import com.app.hite.core.domain.user.User;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;


public @Entity class Refrigerator {
    @Id
    private Long id;

    @OneToMany
    private Set<User> users;

    @ElementCollection
    Set<Product> products;

    Date date;
}
