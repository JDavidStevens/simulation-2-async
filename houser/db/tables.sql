Create Table client(
    user_id serial primary key not null,
    username varchar(25),
    password varchar(25)
);

Create Table Properties(
    property_id serial primary key not null,
    name varchar(75),
    description varchar(500),
    loan int,
    mortgage int,
    desired_rent int,
    steet varchar(100),
    city varchar(50),
    state varchar(2),
    zip int,
    image text,
    user_id int References user(user_id)
);