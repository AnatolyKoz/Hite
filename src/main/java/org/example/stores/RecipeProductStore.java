package org.example.stores;


import org.example.domain.RecipeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RecipeProductStore extends JpaRepository<RecipeProduct, Long> {
}
