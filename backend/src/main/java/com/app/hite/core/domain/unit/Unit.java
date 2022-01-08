package com.app.hite.core.domain.units;

import lombok.*;


import java.lang.annotation.Annotation;

/**
 Creates a new {@literal immutable} Unit for the given {@link UnitType}, {@link SiPrefixes } and Value


 */
@Getter
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class Unit  {

    private SiPrefixes siPrefix;
    private UnitType type;
    private double value;

    /**
     Creates a new {@literal immutable} Unit for the given {@link SiPrefixes }

     @param  prefix
     */
    public Unit convertToAnotherSiPrefixes(SiPrefixes prefix) {
        return new Unit(prefix, this.type, (double)(this.value * Math.pow(10, this.siPrefix.getMantissa() - prefix.getMantissa())));
    }

}
