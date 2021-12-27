package com.app.hite.DAO.repository;


import com.app.hite.core.domain.products.Product;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface Products extends PagingAndSortingRepository<Product, Long> {}
