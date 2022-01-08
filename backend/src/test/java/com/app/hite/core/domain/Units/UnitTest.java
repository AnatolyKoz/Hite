package com.app.hite.core.domain.Units;


import com.app.hite.core.domain.unit.SiPrefixes;
import com.app.hite.core.domain.unit.Unit;
import com.app.hite.core.domain.unit.UnitType;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
public class UnitTest {


    @Test
    public void whenConvertToAnotherSiPrefixes_ValueCorrect()  {
        Unit un1 = new Unit(SiPrefixes.KILO, UnitType.MASS, 1);
        Unit un2 = un1.convertToAnotherSiPrefixes(SiPrefixes.DECI);
        Unit un3 = new Unit(SiPrefixes.DECI, UnitType.MASS, 10000);
        assertEquals(un2.getValue(), un3.getValue());
        assertEquals(un2.getSiPrefix(), un3.getSiPrefix());
        assertEquals(un2.getType(), un3.getType());
    }

    @Test
    public void whenConvertToAnotherSameSiPrefixes_ValueCorrect()  {
        Unit un1 = new Unit(SiPrefixes.KILO, UnitType.MASS, 1);
        Unit un2 = un1.convertToAnotherSiPrefixes(SiPrefixes.KILO);
        assertEquals(un1.getValue(), un2.getValue());
        assertEquals(un1.getSiPrefix(), un2.getSiPrefix());
        assertEquals(un1.getType(), un2.getType());
    }

    @Test
    public void whenConvertToAnotherSiPrefixes_ReverseConversionShouldGiveTheSameValue() {
        Unit un1 = new Unit(SiPrefixes.KILO, UnitType.MASS, 1);
        Unit un2 = un1.convertToAnotherSiPrefixes(SiPrefixes.DECI);
        Unit un3 = un2.convertToAnotherSiPrefixes(SiPrefixes.KILO);
        assertEquals(un1.getValue(), un3.getValue());
        assertEquals(un1.getSiPrefix(), un3.getSiPrefix());
        assertEquals(un1.getType(), un3.getType());
    }


}
