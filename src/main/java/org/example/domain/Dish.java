package org.example.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Entity(name = "Dish")
@Table(name = "dish")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@Setter(value = AccessLevel.PACKAGE)
@Getter(value = AccessLevel.PUBLIC)
@EqualsAndHashCode(of = {"id"})
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Size(min = 4, message = "Name of dish must be greater then 3")
    @NotBlank
    String name;

    @OneToMany
    List<Recipe> recipes;


    public static class Builder extends  Init<Builder> {
        @Override
        protected Builder self() {
            return this;
        }
    }
    protected static abstract class Init<T extends Init<T>> {
        private String name;


        public T setName(String name) {
            this.name = name;
            return self();
        }

        protected abstract T self();

        public Dish build() {
            return new Dish(this);
        }
    }

    protected Dish(Init<?> init) {
        this.name = init.name;
    }

}
