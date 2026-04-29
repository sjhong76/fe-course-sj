CREATE DATABASE IF NOT EXISTS `shoppy2028`;

CREATE TABLE MEMBER(
	MEMBER_ID		CHAR(5)			PRIMARY KEY,
    NAME			VARCHAR(5)		NOT NULL,
    EMAIL			VARCHAR(20),
    CREATED_AT		DATETIME
);

CREATE TABLE PRODUCT(
	PRODUCT_ID		CHAR(5)			PRIMARY KEY,
    NAME			VARCHAR(10)		NOT NULL,
    PRICE			INT
);

CREATE TABLE ORDERS(
	ORDER_ID		CHAR(7)			PRIMARY KEY,
    MEMBER_ID		CHAR(5),
    ORDER_DATE		DATE
);

CREATE TABLE ORDERITEM(
	ORDERITEM_ID	CHAR(7)			PRIMARY KEY,
	ORDER_ID		CHAR(7),
    PRODUCT_ID		CHAR(5),
    QUANTITY		INT,
    UNIT_PRICE		INT
);

alter table ORDERS
	add CONSTRAINT FK_ORDER_MEMBER_ID FOREIGN KEY (MEMBER_ID)
	REFERENCES MEMBER(MEMBER_ID);
alter table ORDERITEM
	add CONSTRAINT FK_ORDERITEM_ORDER_ID FOREIGN KEY (ORDER_ID)
		REFERENCES ORDERS(ORDER_ID),
	add CONSTRAINT FK_ORDERITEM_PRODUCT_ID FOREIGN KEY (PRODUCT_ID)
		REFERENCES PRODUCT(PRODUCT_ID);
show tables;
/******************************************************
	Member 		- mid 		- trg_member_mid
    Order 		- orid 		- trg_order_orid
    OrderItem 	- ord_id 	- trg_orderitem_ord_id
    Product 	- pid 		- trg_product_pid
*******************************************************/

-- ORDER TABLE PK TRIGGER
delimiter $$
create trigger TRG_ORDER_ORID
before insert on ORDERS
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(ORDER_ID, 4) AS UNSIGNED)), 0)
INTO max_code
FROM ORDERS; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.ORDER_ID = concat('ORD', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;

-- PRODUCT TABLE PK TRIGGER
delimiter $$
create trigger TRG_PRODUCT_PID
before insert on PRODUCT
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(PRODUCT_ID, 4) AS UNSIGNED)), 0)
INTO max_code
FROM PRODUCT; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.PRODUCT_ID = concat('P', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;

-- ORDERITEM TABLE PK TRIGGER
delimiter $$
create trigger TRG_ORDERITEM_ORD_ID
before insert on ORDERITEM
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(ORDERITEM_ID, 4) AS UNSIGNED)), 0)
INTO max_code
FROM ORDERITEM; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.ORDERITEM_ID = concat('ORI', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;

INSERT INTO PRODUCT(NAME) VALUES ('water');
SELECT * FROM PRODUCT;

INSERT INTO ORDERS(MEMBER_ID) VALUES ('M0004');
SELECT * FROM ORDERS;

INSERT INTO ORDERITEM(ORDER_ID, PRODUCT_ID) VALUES ('ORD0003', 'P0003');
SELECT * FROM ORDERITEM;
