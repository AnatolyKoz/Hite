package org.example.services;

import org.example.dto.crudDto.productDto.CreateProductDTO;
import org.example.dto.crudDto.productDto.DeleteProductDTO;

public interface ProductCrudService {
    void create(CreateProductDTO createProductDTO);
    void delete(DeleteProductDTO deleteProductDTO);
}
