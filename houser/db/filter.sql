select * from properties 
where user_id = $1 and desiredrent > $2;
-- select automatically returns