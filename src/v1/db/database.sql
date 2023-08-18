/* 20230731. script para la creacion de la BD
  usada en el curso tutorial: NODE-MYSQL-RESTAPI
*/
create database IF NOT EXISTS companydb;
use companydb;

// tabla de empleados
CREATE TABLE employees (
    id INT (12) not null AUTO_INCREMENT,
    name VARCHAR(80) default null,
    salary int(06) default null,
    primary key (id)
);
describe employees;

/*
insert into employees VALUES
    (1,"Clem", 40000),
    (2,"Juan", 30000),
    (3,"Pablo",2000),
    (4,"Adriana", 20000);

);

*/