//package com.app.hite.recipeBook.domain;
//
//import com.app.hite.recipeBook.domain.recipes.Recipe;
//import org.junit.jupiter.api.Test;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.event.annotation.BeforeTestClass;
//
//
//import java.lang.reflect.Constructor;
//import java.lang.reflect.Method;
//import java.util.*;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//class RecipeTest {
//
//    private final Class<?> componentsConverter;
//    private final Constructor<?> componentsConverterConstructor;
//
//    @BeforeTestClass
//    public static  void setup() {
//
//    }
//
//    RecipeTest() throws Exception {
//        this.componentsConverter = Recipe.class.getDeclaredClasses()[0];
//        this.componentsConverterConstructor = componentsConverter.getDeclaredConstructor();
//        componentsConverterConstructor.setAccessible(true);
//    }
//
//    @Test
//    public void whenStoringAString_SerializedVersionMatches()  throws Exception {
//
//        List<Map<String, Integer>> maps = new ArrayList<>();
//        HashMap<String, Integer> map = new HashMap<>();
//
//        map.put("1", 1);
//        map.put("2", 2);
//        maps.add(map);
//
//
//        Method[] mets = componentsConverter.getMethods();
//
//        Object componentsConverter = componentsConverterConstructor.newInstance();
//        String  serialized = (String) mets[1].invoke(componentsConverter, maps);
//
//        assertEquals("[{\"1\":1,\"2\":2}]", serialized);
//    }
//
//
//    @Test
//    public void whenStoringAString_DeserializedVersionMatches()  throws Exception {
//
//        List<Map<String, Integer>> maps = new ArrayList<>();
//        HashMap<String, Integer> map = new HashMap<>();
//
//        map.put("1", 1);
//        map.put("2", 2);
//        maps.add(map);
//        maps.add(map);
//
//
//        Object componentsConverter = componentsConverterConstructor.newInstance();
//        Method[] mets = this.componentsConverter.getMethods();
//        String serialized = (String) mets[1].invoke(componentsConverter, maps);
//        ArrayList<HashMap<String, Integer>> deserialized =  (ArrayList<HashMap<String, Integer>>) mets[3].invoke(componentsConverter, serialized);
//        assertEquals(maps, deserialized);
//    }
//
//
//}
