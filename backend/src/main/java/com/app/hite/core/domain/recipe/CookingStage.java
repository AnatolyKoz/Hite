package com.app.hite.core.domain.recipes;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@AllArgsConstructor
@Getter
@Embeddable
@NoArgsConstructor
@EqualsAndHashCode
public class CookingStage {
    String img;
    String header;
    String paragraph;
}
