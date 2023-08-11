package org.example.domain;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.*;


@Entity(name = "RecipeProduct")
@Table(name = "recipeProduct")
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode(of = {"id"})
public class RecipeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @NotNull
    private Recipe recipe;

    @ManyToOne
    @NotNull
    private Product product;

    @Valid
    private PhysicalDetails physicalDetails;

    @Valid
    private NutritionDetails nutritionDetails;

    public RecipeProduct(@NotNull Recipe recipe, @NotNull Product product, PhysicalDetails physicalDetails) {
        this.recipe = recipe;
        this.product = product;
        this.physicalDetails = physicalDetails;
    }
}
