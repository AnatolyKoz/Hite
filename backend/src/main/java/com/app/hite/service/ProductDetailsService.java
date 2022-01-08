package com.app.hite.service;


import com.app.hite.DAO.repository.Products;
import com.app.hite.core.domain.productPresence.ProductPresenceBuilder;
import com.app.hite.core.domain.products.ProductDetails;
import com.app.hite.core.domain.products.ComponentDetailsBuilder;
import com.app.hite.core.dto.CreateProductDTO;
import com.app.hite.core.dto.PageCharacteristicsDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@AllArgsConstructor
public class ProductService {

    private final Products productsRepository;
    private final ProductPresenceService productPresenceService;

    /**
     * {@literal ReadOnly} METHODE get a {@link ProductDetails} from {@link Products} by {@link Long} id
     */
    @ReadOnlyProperty
    public ProductDetails getProductById(@PathVariable("id") Long id) {
        return productsRepository.findById(id).orElse(null);
    }

    /**
     * {@literal ReadOnly} METHODE get {@link List}  of {@link ProductDetails} from {@link PageCharacteristicsDTO} with sorting
     */
    @ReadOnlyProperty
    public List<ProductDetails> getProductsByPaging(PageCharacteristicsDTO characteristicsDTO) {
        Pageable paging = PageRequest.of(characteristicsDTO.getNumber(), characteristicsDTO.getPageSize(),
                Sort.by(characteristicsDTO.getSortBy()));
        return productsRepository.findAll(paging).getContent();
    }

    /**
     * {@literal ReadOnly} METHODE get {@link List} of {@link ProductDetails} from {@link Products} by {@link List<Long>} of IDs
     */
    @ReadOnlyProperty
    public List<ProductDetails> getAllProductsByIDS(Iterable<Long> ids) {
        return (List<ProductDetails>) productsRepository.findAllById(ids);
    }

    /**
     * {@literal Transactional} METHODE create a new {@link ProductDetails} from {@link CreateProductDTO} and return created component
     */
    @Transactional
    public ProductDetails createProduct(CreateProductDTO componentDTO) {
        ComponentDetailsBuilder componentbuilder = new ComponentDetailsBuilder(componentDTO);
        ProductDetails productDetails = productsRepository.save(componentbuilder.build());

        // CREATE NEW presents of component to optimize
        ProductPresenceBuilder presenceBuilder = new ProductPresenceBuilder();
        presenceBuilder.setProductDetails(productDetails);
        presenceBuilder.setRecipesIDs(null);

        productPresenceService.save(presenceBuilder.build());
        return productDetails;
    }

    @Transactional
    public Boolean deleteProductByID(Long id) {
        if (!this.isProductExistByID(id)) throw new NoSuchElementException("Component don't exist");
        productsRepository.deleteById(id);
        productPresenceService.deleteProductPresences(id);
        return true;
    }

    /**
     * {@literal ReadOnly} METHODE witch return true if component Exist or false if not
     */
    @ReadOnlyProperty
    public Boolean isProductExistByID(Long id) {
        return productsRepository.existsById(id);
    }
}
