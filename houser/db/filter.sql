select * from properties 
where user_id = $1 and desiredrent > $2
order by property_id asc;
-- select automatically returns