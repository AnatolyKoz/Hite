package org.example.stores;

import org.example.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RecipeStore extends JpaRepository<Recipe, Long> {
}
