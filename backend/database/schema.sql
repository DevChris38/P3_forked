CREATE DATABASE IF NOT EXISTS shortDigital;
USE shortDigital;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS video_category;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
firstname VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
mail VARCHAR(80) NOT NULL UNIQUE,
pseudo VARCHAR(45) NOT NULL,
avatar VARCHAR(45) NOT NULL,
hashed_password VARCHAR(255) NOT NULL);


CREATE TABLE video (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
title VARCHAR(100) NOT NULL,
link TEXT NOT NULL,
image TEXT NOT NULL,
description VARCHAR(255) NOT NULL,
weight VARCHAR(10) NOT NULL,
duration INT NOT NULL,
nb_view INT NOT NULL DEFAULT 0,
user_id INT NOT NULL,
CONSTRAINT ownBy
FOREIGN KEY (user_id)
REFERENCES user(id));

CREATE TABLE category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
name VARCHAR(45)
);

CREATE TABLE video_category (
id INT NOT NULL AUTO_INCREMENT, 
PRIMARY KEY (id),
category_id INT,
video_id INT,
CONSTRAINT assigned
	FOREIGN KEY (category_id)
    REFERENCES category(id),
CONSTRAINT class 
	FOREIGN KEY (video_id)
    REFERENCES video(id)
);


CREATE TABLE likes (
user_id INT NOT NULL,
video_id INT NOT NULL,
CONSTRAINT likedBy
	FOREIGN KEY (user_id)
    REFERENCES user(id),
CONSTRAINT beLiked
	FOREIGN KEY (video_id)
    REFERENCES video(id),
PRIMARY KEY (user_id, video_id));
