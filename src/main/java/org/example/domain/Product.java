package org.example.domain;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.CurrentTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.generator.EventType;

import java.time.Instant;
import java.util.LinkedList;
import java.util.List;

@Entity(name = "Product")
@Table(name = "product")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter(value = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PROTECTED)
@EqualsAndHashCode(of = {"id"})
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Name cant be empty")
    private String name;

    @NotNull(message = "Nutrition details cant be empty")
    @Valid
    private NutritionDetails nutritionDetails;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @Fetch(FetchMode.SUBSELECT)
    private List<RecipeProduct> recipeProducts;

    @CurrentTimestamp(event = EventType.INSERT)
    private Instant createdAt;

    @CurrentTimestamp(event = {EventType.INSERT, EventType.UPDATE})
    private Instant updatedAt;

    public Product(String name) {
        this.name = name;
    }

    public static class Builder extends Init<Builder> {
        @Override
        protected Builder self() {
            return this;
        }
    }

    protected static abstract class Init<T extends Init<T>> {

        private NutritionDetails nutritionDetails;

        Init() {
            this.recipeProducts = new LinkedList<>();
        }
        private final List<RecipeProduct> recipeProducts;
        private String name;
        public T addRecipeProduct(RecipeProduct recipeProduct) {
            this.recipeProducts.add(recipeProduct);
            return self();
        }
        public T setNutritionDetails(NutritionDetails nutritionDetails) {
            this.nutritionDetails = nutritionDetails;
            return self();
        }
        public T addRecipeProducts(List<RecipeProduct> recipeProduct) {
            this.recipeProducts.addAll(recipeProduct);
            return self();
        }

        public T setName(String name) {
            this.name = name;
            return self();
        }

        protected abstract T self();

        public Product build() {
            return new Product(this);
        }
    }

    protected Product(Init<?> init) {
        this.recipeProducts = init.recipeProducts;
        this.name = init.name;
        this.nutritionDetails = init.nutritionDetails;
    }
}
