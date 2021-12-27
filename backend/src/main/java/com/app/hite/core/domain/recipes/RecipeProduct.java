package com.app.hite.core.domain.recipes;


import com.app.hite.core.domain.units.Unit;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.AttributeConverter;
import javax.persistence.Convert;
import javax.persistence.Embeddable;
import java.io.IOException;

@AllArgsConstructor
@Getter
@Embeddable
@NoArgsConstructor
@EqualsAndHashCode
public class RecipeProduct {

    Long id;

    @Convert(converter = ConverterToString.class)
    Unit value;

    private static class ConverterToString implements AttributeConverter<Unit, String> {
        private final ObjectMapper objectMapper = new ObjectMapper();

        @Override
        public String convertToDatabaseColumn(Unit unit) {
            String componentsListJson = null;
            try {
                componentsListJson = objectMapper.writeValueAsString(unit);
            } catch (final JsonProcessingException e) {
                System.out.print("Error: " + e);
            }
            return componentsListJson;
        }

        @Override
        public Unit convertToEntityAttribute(String rawUnit) {
            Unit unit = null;
            try {
                unit = objectMapper.readValue(rawUnit, Unit.class);
            } catch (final IOException e) {
                System.out.print("Error: " + e);
            }
            return unit;
        }
    }
}
