delete from properties where user_id=$1 and property_id=$2;
select * from properties where user_id = $1;