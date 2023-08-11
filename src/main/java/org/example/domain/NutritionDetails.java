package org.example.domain;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.Min;
import lombok.*;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Getter(value = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@EqualsAndHashCode
public final class NutritionDetails {
    @Min(value = 1, message = "calories must be greater then 0")
    private long calories;
    @Min(value = 1, message = "squirrels must be greater then 0")
    private long squirrels;
    @Min(value = 1, message = "carbohydrates must be greater then 0")
    private long carbohydrates;
    @Min(value = 1, message = "fats must be greater then 0")
    private long fats;
}
