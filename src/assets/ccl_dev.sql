CREATE TABLE `ccl_dev`.`user` (
  `UID` BIGINT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(45) NULL,
  `AGE` VARCHAR(45) NULL,
  `GENDER` VARCHAR(45) NULL,
  PRIMARY KEY (`UID`));


CREATE TABLE `ccl_dev`.`sensor_data` (
  `UID` BIGINT NOT NULL AUTO_INCREMENT,
  `USER_ID` BIGINT NOT NULL,
  `TIME` DATETIME DEFAULT NOW(),
  `HEART_RATE` FLOAT NULL,
  `BREATH_RATE` FLOAT NULL,
  `BODY_TEMP` FLOAT NULL,
  `BLOOD_PRESSURE` FLOAT NULL,
  `HRV` FLOAT NULL,
  `STRESS` FLOAT NULL,
  `MOTION` VARCHAR(45) NULL,
  `SENSOR_TYPE` VARCHAR(45) NULL,
  PRIMARY KEY (`UID`));


CREATE TABLE `ccl_dev`.`wave_date` (
  `UID` BIGINT NOT NULL AUTO_INCREMENT,
  `TIME` DATETIME NULL DEFAULT NOW(),
  `HEART_WAVE_DATE` INT NULL,
  PRIMARY KEY (`UID`));
