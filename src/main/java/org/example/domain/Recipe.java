package org.example.domain;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CurrentTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.generator.EventType;

import java.time.Instant;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
@Entity(name = "Recipe")
@Table(name = "recipe")
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Setter(value = AccessLevel.PUBLIC)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode(of = {"id"})
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "name can not be empty")
    @Size(min = 4, message = "name size must be greater then 3")
    private String name;

    @Valid
    private NutritionDetails nutritionDetails;

    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
    @Fetch(FetchMode.SUBSELECT)
    @Size(min = 1, message = "recipe must have at least one product ")
    private List<RecipeProduct> recipeProducts;

    @NotNull
    @ManyToOne
    private Dish dish;

    @CurrentTimestamp(event = EventType.INSERT)
    private Instant createdAt;

    @CurrentTimestamp(event = {EventType.INSERT, EventType.UPDATE})
    private Instant updatedAt;

    public Recipe(String name, List<RecipeProduct> recipeProducts, @NotNull Dish dish) {
        this.name = name;
        this.recipeProducts = recipeProducts;
        this.dish = dish;
    }

    public static class Builder extends Init<Builder> {
        @Override
        protected Builder self() {
            return this;
        }
    }

    protected static abstract class Init<T extends Init<T>> {

        Init() {
            this.recipeProducts = new LinkedList<>();
        }
        private final List<RecipeProduct> recipeProducts;
        private String name;
        private Dish dish;

        public T addRecipeProduct(RecipeProduct recipeProduct) {
            this.recipeProducts.add(recipeProduct);
            return self();
        }

        public T setDish(Dish dish) {
            this.dish = dish;
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

        public Recipe build() {
            return new Recipe(this);
        }
    }

    protected Recipe(Init<?> init) {
        this.recipeProducts = init.recipeProducts;
        this.name = init.name;
        this.dish = init.dish;
    }

}
