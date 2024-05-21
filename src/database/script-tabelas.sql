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