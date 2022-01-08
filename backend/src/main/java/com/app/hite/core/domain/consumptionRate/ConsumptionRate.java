package com.app.hite.core.domain.consumptionRate;

import com.app.hite.core.domain.activity.ActivityGroup;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
public @Entity
class ConsumptionRate {
    @Id
    Long id;

    ActivityGroup activityGroup;
    Integer age;
    Integer energyConsumptionRate;
    Integer carbohydrateIntake;
    Integer proteinIntake;
    Integer fatIntake;
}
