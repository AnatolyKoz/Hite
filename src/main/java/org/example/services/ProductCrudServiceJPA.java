package org.example.services;

import lombok.AllArgsConstructor;
import org.example.domain.NutritionDetails;
import org.example.domain.Product;
import org.example.dto.crudDto.productDto.CreateProductDTO;
import org.example.dto.crudDto.productDto.DeleteProductDTO;
import org.example.stores.ProductStore;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class ProductCrudServiceJPA implements ProductCrudService {

    ProductStore productStore;
    @Override
    public void create(CreateProductDTO createProductDTO) {
        Product product = new Product.Builder().setName(createProductDTO.getName())
                 .setNutritionDetails(createProductDTO.getNutritionDetails()).build();
        productStore.save(product);
    }

    @Override
    public void delete(DeleteProductDTO deleteProductDTO) {
        productStore.deleteById(deleteProductDTO.getId());
    }
}
