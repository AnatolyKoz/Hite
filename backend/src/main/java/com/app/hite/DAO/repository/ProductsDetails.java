package com.app.hite.DAO.repository;


import com.app.hite.core.domain.productDetails.ProductDetails;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductsDetails extends PagingAndSortingRepository<ProductDetails, Long> {}
