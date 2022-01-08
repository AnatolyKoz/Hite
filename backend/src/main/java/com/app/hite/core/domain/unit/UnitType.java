package com.app.hite.core.domain.unit;


import lombok.AllArgsConstructor;
import lombok.Getter;

/**
    we do not use a string name because it is so difficult to localize

    helper class storing UnitType types

*/
@Getter
@AllArgsConstructor
public enum UnitType {
    MASS(1),
    VOLUME(3);

    private final int degree;
}
