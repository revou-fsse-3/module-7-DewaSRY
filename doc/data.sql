
insert  into  species (species)
values 
	('Reptiles'),
	('Mammals'),
	('Invertebrates'),
	('Amphibians'),
	('Insect'),
	('Fish'),
	('Bird');

select  * from  species s ;

select  species_id, species  from  species s 
where  species = 'Mammals';

insert  into  gender (gender)
values 
	('Male'),
	('Female')


select * from  gender g 

insert  into  `role` (role)
values 
	('Animal keeper'),
	('Manager'),
	('Cleaner')


select  * from  `role` r 


insert  into  schedule (schedule)
values
	('Morning'),
	('Middle day'),
	('Afternoon')

select * from  schedule s 

select  * from  animal a 


select  * from  animal a 
inner join gender g  using(gender_id)
inner join species s  using(species_id)
select * from  gender g  

select  * from  `user` u 

