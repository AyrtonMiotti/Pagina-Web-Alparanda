DROP DATABASE if exists Yosai;
CREATE DATABASE if not exists Yosai;
USE Yosai;

CREATE TABLE IF NOT EXISTS CHARAC (
  characterID INT NOT NULL AUTO_INCREMENT,
  nameChar VARCHAR(30) NOT NULL,
  PRIMARY KEY (characterID));

CREATE TABLE IF NOT EXISTS USERS (
  user_id INT NOT NULL AUTO_INCREMENT,
  name_user VARCHAR(30) NOT NULL,
  passwor VARCHAR(30) NOT NULL,
  characterID INT NOT NULL,
  FOREIGN KEY (characterID) REFERENCES CHARAC (characterID),
  PRIMARY KEY (user_id));

CREATE TABLE IF NOT EXISTS tempUser(
  user_id INT NOT NULL,
  characterID INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES USERS (user_id),
  FOREIGN KEY (characterID) REFERENCES CHARAC(characterID));
  
  
  -- INSERTS
  INSERT INTO CHARAC (nameChar) VALUES ("Sharkson Maoma"),("Steffano"),("Emmit Nutriales"),("Hank");
  
  INSERT INTO USERS (name_user, passwor, characterID) VALUES ('admin', 'admin', 1);
  
  
  -- CONSULTAS
SELECT * FROM tempUser;
SELECT * FROM USERS;
SELECT * FROM CHARAC;

-- UPDATE USERS SET characterID = 2 WHERE user_id = 1;
