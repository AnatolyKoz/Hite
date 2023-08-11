package org.example.services;

import lombok.AllArgsConstructor;
import org.example.domain.Dish;
import org.example.dto.crudDto.dishDto.CreateDishDTO;
import org.example.dto.crudDto.dishDto.DeleteDishDTO;
import org.example.stores.DishStore;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class DishCrudServiceJPA implements DishCrudService {

    DishStore dishStore;
    @Override
    @Transactional
    public void create(CreateDishDTO createDishDTO) {
        Dish dish = new Dish.Builder().setName(createDishDTO.getName()).build();
        dishStore.save(dish);
    }

    @Override
    @Transactional
    public void delete(DeleteDishDTO deleteDishDto) {
        dishStore.deleteById(deleteDishDto.getId());
    }
}
