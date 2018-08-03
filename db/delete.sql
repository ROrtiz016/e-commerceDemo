DELETE from Cart2 
where productid = $1;

SELECT * from Cart2 c
Join Products2 p on 
c.productid = p.id
ORDER by c.id;
