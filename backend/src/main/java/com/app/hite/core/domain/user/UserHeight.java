package com.app.hite.core.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Date;

@AllArgsConstructor
@Getter
public class UserHeight {
    Date date;
    Integer height;
}
