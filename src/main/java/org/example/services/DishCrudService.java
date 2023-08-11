package org.example.services;

import org.example.dto.crudDto.dishDto.CreateDishDTO;
import org.example.dto.crudDto.dishDto.DeleteDishDTO;

public interface DishCrudService {

    void create(CreateDishDTO createDishDTO);
    void delete(DeleteDishDTO deleteDishDto);

}
