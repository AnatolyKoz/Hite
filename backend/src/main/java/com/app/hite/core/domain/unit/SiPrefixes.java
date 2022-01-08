package com.app.hite.core.domain.unit;


import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 we do not use a string name because it is so difficult to localize

 helper class storing SiPrefixes and mantissa for them

 */
@AllArgsConstructor
@Getter
public enum SiPrefixes {
    YOCTO(-24),
    ZEPTO(-21),
    ATTO(-18),
    FEMTO(-15),
    PICO(-12),
    NANO(-9),
    MICRO(-6),
    MILLI(-3),
    CENTI(-2),
    DECI(-1),
    KILO (3),
    MEGA(6),
    GIGA(9),
    TERA(12),
    PETA(15),
    EXA(18),
    ZETTA(21),
    YOTTA(24);

    private final int mantissa;

}
