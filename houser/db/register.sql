Insert Into client(username,password)Values($1,$2) returning *;
-- select * from client where username = $1;