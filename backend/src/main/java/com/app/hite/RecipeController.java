//package com.app.hite;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Sort;
//import org.springframework.hateoas.mediatype.hal.HalModelBuilder;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.ResponseEntity;
//
//import static org.springframework.data.domain.Sort.sort;
//
//public class RecipeController {
//    private static final Sort BY_NAME = sort(Recipe.class).by(Recipe::getName).ascending();
//
//    private final Recipes recipe;
//
//    @Autowired
//    RecipeController(Recipes recipes) {
//        this.recipes = recipes;
//    }
//
//
//    public HttpEntity<?> getRecipe() {
//        var model = HalModelBuilder.halModel().build();
//
//        return ResponseEntity.ok(model);
//    }
//
//}
