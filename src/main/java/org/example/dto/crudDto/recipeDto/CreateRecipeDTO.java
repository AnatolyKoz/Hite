package org.example.dto.crudDto.recipeDto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.example.dto.crudDto.recipeProductDto.CreateRecipeProductDTO;

import java.util.List;
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode
public final class CreateRecipeDTO {
    @NotBlank(message = "name can not be empty")
    @Size(min = 4, message = "name size must be greater then 3")
    private String name;

    @NotNull
    private Long dishId;

    @Size(min = 1, message = "recipe Products count must be greater then 0")
    private List<CreateRecipeProductDTO> recipeProductsDTOs;

}