package org.example.stores;

import org.example.domain.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishStore extends JpaRepository<Dish, Long> {
}
