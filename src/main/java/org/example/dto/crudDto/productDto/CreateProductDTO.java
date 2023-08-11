package org.example.dto.crudDto.productDto;


import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.example.domain.NutritionDetails;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode
@ToString
public final class CreateProductDTO {

    @NotBlank(message = "Name cant be empty")
    private String name;

    @NotNull(message = "Nutrition details cant be empty")
    @Valid
    private NutritionDetails nutritionDetails;
}
