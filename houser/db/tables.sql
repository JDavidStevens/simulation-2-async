Create Table client(
    user_id serial primary key not null,
    username varchar(25),
    password varchar(25)
);

Create Table Properties(
    property_id serial primary key not null,
    propertyName varchar(75),
    propertyDescription varchar(500),
    address varchar(100),
    city varchar(50),
    stateName varchar(2),
    zip int,
    img text,
    loanAmount int,
    mortgage int,
    desiredRent int,
    recommendedRent int,
    user_id int References client(user_id)
);