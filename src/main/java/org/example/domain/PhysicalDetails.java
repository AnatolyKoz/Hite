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
public class PhysicalDetails {
    @Min(value = 1, message = "width must be greater then 0")
    private long width;
}
