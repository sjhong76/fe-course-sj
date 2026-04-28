/****************************************************
	 학적과 수강신청 실습 데이터베이스
****************************************************/

-- 데이터 베이스 생성
CREATE DATABASE IF NOT EXISTS `enroll2026`;

use enroll2026;


create table instructor(
	instructor_no 		int				auto_increment 		primary key,
    instructor_name 	varchar(10)		not null,
    age					int,
    gender				char(1)
    );

create table subject(
	subject_no 			int 			auto_increment 		primary key,
	subject_name 		varchar(10) 	not null,
	class_room			varchar(5),
	instructor_no 		int
);

create table student(
	student_id 			int 			auto_increment 		primary key,
	student_name 		varchar(10)		not null,
	address				varchar(20)
);
create table class_time(
	time_id 			int 			auto_increment 		primary key,
	subject_no	 		int,
	class_time			varchar(10)
);
create table enrollment(
	student_id 			int 			auto_increment 		primary key,
	subject_no	 		int,
	grade				char(3)
);
    
show tables;
drop table instructor;
drop table subject;
drop table student;
drop table class_time;
drop table enrollment;

select * from instructor;
desc instructor;
select @@sql_safe_updates;

alter table subject
	add constraint fk_subject_instructor_no foreign key(instructor_no)
			references instructor(instructor_no);

alter table class_time
	add constraint fk_class_time_subject_no foreign key(subject_no)
			references subject(subject_no);

alter table enrollment
	add constraint fk_enrollment_subject_no foreign key(subject_no)
			references subject(subject_no);

alter table enrollment
	add constraint fk_enrollment_student_id foreign key(student_id)
			references student(student_id);

insert into instructor(instructor_name, age, gender)
	values('홍상진', 49, 'M');
insert into instructor(instructor_name, age, gender)
	values('김말자', 37, 'F');    
insert into instructor(instructor_name, age, gender)
	values('소공자', 39, 'M');
insert into instructor(instructor_name, age, gender)
	values('조관순', 42, 'F'); 
select * from instructor;

insert into student(student_name, address)
	values('홍길동', null);
insert into student(student_name, address)
	values('강남길', null);
insert into student(student_name, address)
	values('나길주', null);
insert into student(student_name, address)
	values('독고탁', null);
insert into student(student_name, address)
	values('라미란', null);
insert into student(student_name, address)
	values('방수길', null);
insert into student(student_name, address)
	values('사유지', null);
insert into student(student_name, address)
	values('우지환', null);
insert into student(student_name, address)
	values('서구남', null);
insert into student(student_name, address)
	values('장종철', null);
insert into student(student_name, address)
	values('차무식', null);

select * from instructor;
select * from subject;
select * from student;
select * from class_time;
select * from enrollment;

create table class_time(
	time_id 			int 			auto_increment 		primary key,
	subject_no	 		int,
	class_time			varchar(10)
);
create table enrollment(
	student_id 			int 			auto_increment 		primary key,
	subject_no	 		int,
	grade				char(3)
);

insert into subject(subject_name, class_room, instructor_no)
	values('SQL', null, 1);
insert into subject(subject_name, class_room, instructor_no)
	values('React', null, 2);
insert into subject(subject_name, class_room, instructor_no)
	values('JavaScript', null, 3);
insert into subject(subject_no, class_room, instructor_no)
	values('Python', null, 4);

insert into class_time(subject_no, class_time)
	values(1, null);
insert into class_time(subject_no, class_time)
	values(2, null);
insert into class_time(subject_no, class_time)
	values(3, null);
insert into class_time(subject_no, class_time)
	values(4, null);

insert into enrollment(subject_no, grade)
	values(1, null);
insert into enrollment(subject_no, grade)
	values(2, null);
insert into enrollment(subject_no, grade)
	values(3, null);
insert into enrollment(subject_no, grade)
	values(4, null);
























































































S