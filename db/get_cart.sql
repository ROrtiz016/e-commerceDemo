SELECT * from CART2 c
JOIN Products2 p on
c.productid = p.id
order by c.id;