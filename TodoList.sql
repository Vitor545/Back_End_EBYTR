DROP DATABASE IF EXISTS TodoList;

CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE tarefas (
    id INT NOT NULL auto_increment,
    tarefa VARCHAR(100) NOT NULL,
    data VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO TodoList.tarefas (tarefa, data, status) VALUES
    ("Fazer compras para o dods", "21/09/2002", "andamento"),
    ("Fazer compras para o dods", "21/09/2002", "andamento");
