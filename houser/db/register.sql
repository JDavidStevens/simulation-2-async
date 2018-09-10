Insert Into client(username,password)Values($1,$2);
select * from client where username = $1;