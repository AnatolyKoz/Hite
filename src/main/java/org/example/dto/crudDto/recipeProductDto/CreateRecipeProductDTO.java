package org.example.dto.crudDto.recipeProductDto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.example.domain.PhysicalDetails;
import org.example.domain.Recipe;



@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode
public final class CreateRecipeProductDTO {
    @NotNull
    private Long productID;

    @Valid
    private PhysicalDetails physicalDetails;
}