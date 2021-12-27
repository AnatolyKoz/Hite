package com.app.hite.core.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@AllArgsConstructor
@Getter
@ToString
public class PageCharacteristicsDTO {
    @Min(value = 0)
    @NotNull(message = "Number of page should not be null")
    Integer number;

    @NotNull(message = "SortBy should not be null")
    @Size(min = 1)
    String sortBy;

    @Max(value = 20)
    @Min(value = 4)
    Integer pageSize = 10;
}
