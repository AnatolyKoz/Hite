package org.example.stores;

import org.example.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductStore extends JpaRepository<Product, Long> {
}
