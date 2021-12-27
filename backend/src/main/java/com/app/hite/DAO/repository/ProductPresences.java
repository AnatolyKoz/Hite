package com.app.hite.DAO.repository;

import com.app.hite.core.domain.productPresence.ProductPresence;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductPresences extends PagingAndSortingRepository<ProductPresence, Long> {

    ProductPresence findByComponentID(Long id);

    void deleteByComponentID(Long id);
}
