/*
	MySQL
    - 정형 데이터를 저장하는 데이터베이스
    - RDBMS(Relational DataBase Management System) 구조를 가지고 있음
    - SQL(Structured Query Language) 문법을 사용하여 데이터의 CRUD를 구현한다.
    - C(Create) :: Insert
    - R(Read) :: Select
    - U(Update) :: Update
    - D(Delete) :: Delete
    - 개발자는 DML 중심의 SQL 문법을 숙지하는 것을 권장한다.
    - SQL는 대소문자를 구분하지 않음, 대부분 소문자로 작성한다.
    - snake case 방식으로 파일명을 작성한다. 예) sql_001
    
    SQL
    - SQL의 종류는 DDL, DML, DCL, DTL로 구분한다.
    1. DDL(Date Definition Language) : 데이터 정의어
      - 데이터를 저장하기 위한 공간을 생성하고 논리적으로 정의하는 언어
      - create, alter, truncate, drop 등
	2. DML(Data Manipulation Language) : 데이터 조작어
      - 데이터의 CRUD하는 명력어
      - insert, select, update, delete
	3. DCL(Data Control Language) : 데이터 제어어
      - 데이터에 대한 권한과 보안을 정의하는 언어
      - grant, revoke
	4. DTL(Data Transaction Language) : 데이터 트랜젝션 제어어
      - 데이터베이스의 처리 작업인 트랜젝션을 관리하는 언어
      - commit, save, rollback
*/

/********************************************
	   ☆워크벤치 실행시 필수 명령어☆
	   1. 데이터베이스 접속
	   show databases; --데이터베이스 확인
	   use 데이터베이스명; -- 사용할 데이터베이스 오픈
	   select database(); -- 데이터베이스 선택
       use 
       
********************************************/

show databases;
use hrdb2019;
select database();
show tables;

/********************************************
	DESC(DESCRIBE) : 테이블 구조를 확인
    형식 > desc 테이블명
********************************************/
show tables;
desc department;
desc employee;
desc vacation;
desc unit;



/********************************************
	SELECT : 테이블 내용을 조회
    형식 > select [컬럼리스트] from [테이블명]
********************************************/

show tables;
desc employee;
select emp_id, emp_name, eng_name from employee;
select * from employee;

-- 사원 테이블의 사번, 사원명, 성별, 입사일, 급여를 조회
select emp_id, emp_name, gender, hire_date, salary from employee; 

-- 부서 테이블의 모든 데이터를 조회
show tables;
desc department;
select * from department;


/********************************************
	AS : 컬럼의 별칭 부여
    형식 > select [컬럼명 as 별칭, ...]
		  from [데이블명]
	☆ 컴럼명에 함수를 적용하여 실행하는 경우에 별칭 부여
********************************************/
-- 사원테이블의 사번 emp_id 컬럼명을 '사번' 별칭으로 조회
select emp_id as 사번 from employee;

-- 사원테이블의 별칭을 사번(emp_id), 사원명(emp_name), 입사일(hire_date), 급여(salary)로 조회
select emp_id as 사번,
		emp_name as 사원명,
        hire_date as 입사일,
        salary as 급여
        from employee;

-- 사원테이블의 사원명, 폰번호, 급여, 보너스(급여의 10%), 입사일 조회
select emp_name, phone, salary, salary*0.1, hire_date from employee;
select salary*0.1 as 보너스 from employee;
select salary*0.1 as bonus from employee;
select * from employee;

-- 현재 날짜를 조회 : curdate()
select curdate() as today from dual;

/********************************************
	SELECT ~ FROM ~ WHERE : 테이블 상세 내역을 조회
    형식 > select [컬럼명 as 별칭, ...]
		  from [데이블명]
          where [컬럼명] [조건절]
********************************************/
select * from employee where emp_id='s0004';
-- 사원테이블에서 '정주고' 사원의 정보 조회
select * from employee where emp_name='정주고';

-- SYS 부서에 속한 모든 사원을 조회
desc department;
select * from department where dept_id='SYS';

-- 사번이  s0005인 사원의 사원명, 성별, 입사일, 급여를 조회
select *
	from employee
    where hire_date = '2014-08-01';
    
-- 급여가 5000인 사원들을 조회
select *
	from employee
	where salary = 5000;
    
-- 성별이 남자인 사월들을 조회
select *
	from employee
    where gender = 'M';

-- 성별이 여자인 사월들을 조회
select *
	from employee
    where gender = 'F';