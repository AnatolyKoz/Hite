package com.app.hite.core.domain.user;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public @Embeddable class UserHeight {
    Date date;
    Integer height;
}
