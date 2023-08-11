package org.example.dto.crudDto.dishDto;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode
public final class DeleteDishDTO {
    Long id;
}
