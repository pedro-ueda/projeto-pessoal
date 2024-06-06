create database psychobody;

use psychobody;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table dados (
	idDados int auto_increment,
    fkUsuario int,
    primary key (idDados, fkUsuario),
    foreign key (fkUsuario) references usuario(id),
    pergunta1 varchar(20),
    pergunta2 varchar(20),
    pergunta3 varchar(20),
    pergunta4 varchar(20),
    pergunta5 varchar(20),
    pergunta6 int,
    pergunta7 int
);

create table login (
	idLogin int,
    fkUsuario int,
    primary key (idLogin, fkUsuario),
    foreign key (fkUsuario) references usuario(id),
    email varchar(90),
    senha varchar(90)
);

insert into usuario (nome, email, senha) values
('Pedro', 'pedro@sptech.school', 'Pedro1205*');

insert into usuario (nome, email, senha) values ('Joana', 'joana@example.com', 'Joana#789');
insert into usuario (nome, email, senha) values ('Mateus', 'mateus@gmail.com', 'Mateus123!');
insert into usuario (nome, email, senha) values ('Carla', 'carla@hotmail.com', 'Carla456&');
insert into usuario (nome, email, senha) values ('Lucas', 'lucas@yahoo.com', 'Lucas@2024');
insert into usuario (nome, email, senha) values ('Ana', 'ana@outlook.com', 'Ana987*');

insert into dados (fkUsuario, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7) values 
(1, 'Sim', 'Sim', 'Sim', 'Sim', 'Sim', 2, 10 ),
(2, 'Sim', 'Sim', 'Não', 'Sim', 'Não', 3, 9),
(3, 'Não', 'Sim', 'Não', 'Não', 'Sim', 1, 10),
(4, 'Sim', 'Não', 'Sim', 'Sim', 'Não', 3, 8),
(5, 'Não', 'Não', 'Sim', 'Sim', 'Sim', 4, 10),
(6, 'Sim', 'Sim', 'Sim', 'Não', 'Sim', 1, 9);


select * from usuario;