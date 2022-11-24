DROP DATABASE if exists chat;
CREATE DATABASE if not exists  chat;
USE chat;

CREATE TABLE if not exists chat1(
    TextB VARCHAR(30),
    DialogCharacter VARCHAR(100));
    
CREATE TABLE if not exists chat_history(
    txtBot VARCHAR(100),
    txtUser VARCHAR(100));
    

INSERT INTO chat1 VALUES
('Muy Bien', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('Bien', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('No tan Bien', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('Mal', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('Prefiero no contestar', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('Excelente', 'Me alegra mucho verte, ¿Como te sientes hoy?'),
('Para el orto', 'Me alegra mucho verte, ¿Como te sientes hoy?');

INSERT INTO chat_history VALUES
("Hola", "");

SELECT * FROM chat1;
SELECT * FROM chat_history;
