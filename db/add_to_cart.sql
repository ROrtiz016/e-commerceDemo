DELETE from CART2 
WHERE productid = $1;

INSERT INTO CART2(
  productid,
  quantity
)
VALUES(
  $1,
  $2
);

SELECT * from CART2 c
JOIN Products2 p on
c.productid = p.id
order by c.productid;