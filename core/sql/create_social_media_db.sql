DROP SCHEMA IF EXISTS social_media_db CASCADE;
CREATE SCHEMA social_media_db;

--- TYPES

DROP TYPE IF EXISTS question_type_enum;
CREATE TYPE question_type_enum AS ENUM ('SCALE', 'TEXT', 'IMAGE');

DROP TYPE IF EXISTS user_type_enum;
CREATE TYPE user_type_enum AS ENUM ('USER', 'ADMIN');

DROP TYPE IF EXISTS resource_type_enum;
CREATE TYPE resource_type_enum AS ENUM ('IMAGE', 'HTML');

DROP TYPE IF EXISTS reaction_type_enum;
CREATE TYPE reaction_type_enum AS ENUM ('LIKE', 'LOVE');


--- TABLES

DROP TABLE IF EXISTS social_media_db.subscription;
CREATE TABLE social_media_db.subscription (
  id                        serial NOT NULL,
  name      	      varchar(255) NOT NULL,
  description      	  varchar(255) NOT NULL,
  post_limit      	          int4 NOT NULL,
  questionnaire_limit      	  int4 NOT NULL,
  comments_active          BOOLEAN DEFAULT false
  reactions_active         BOOLEAN DEFAULT false
  price      	              int4 NOT NULL,
  CONSTRAINT subscription_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db."user";
CREATE TABLE social_media_db."user" (
  id                        serial NOT NULL,
  internal_id      	        serial NOT NULL,
  subscription_id      	      int8 NOT NULL,
  "type"      	    user_type_enum NOT NULL,
  email      	      varchar(255) NOT NULL,
  username      	  varchar(255) NOT NULL,
  first_name      	  varchar(255) NOT NULL,
  last_name      	  varchar(255) NOT NULL,
  address      	      varchar(255),
  city      	      varchar(255) NOT NULL,
  country      	      varchar(255) NOT NULL,
  zip_code      	  varchar(255) NOT NULL,
  about_me      	  varchar(255),
  theme      	      varchar(255) NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT user_id_pk PRIMARY KEY (internal_id),
  CONSTRAINT user_to_subscription_fk FOREIGN KEY (subscription_id) REFERENCES social_media_db.subscription (id)
);

DROP TABLE IF EXISTS social_media_db.questionnaire;
CREATE TABLE social_media_db.questionnaire (
  id                        serial NOT NULL,
  priority      			  int4 NOT NULL,
  name      	      varchar(255) NOT NULL,
  CONSTRAINT questionnaire_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db.question;
CREATE TABLE social_media_db.question (
  id                        serial NOT NULL,
  questionnaire_id      	  int8 NOT NULL,
  question_type question_type_enum NOT NULL,
  multiple_answers         BOOLEAN DEFAULT false,
  title      	      varchar(255) NOT NULL,
  description      	  varchar(255),
  CONSTRAINT question_id_pk PRIMARY KEY (id),
  CONSTRAINT question_to_questionnaire_fk FOREIGN KEY (questionnaire_id) REFERENCES social_media_db.questionnaire (id)
);

DROP TABLE IF EXISTS social_media_db.linkage;
CREATE TABLE social_media_db.linkage (
  id                        serial NOT NULL,
  first_question_id      	  int8 NOT NULL,
  second_question_id      	  int8 NOT NULL,
  CONSTRAINT linkage_id_pk PRIMARY KEY (id),
  CONSTRAINT first_linkage_to_question_fk FOREIGN KEY (first_question_id) REFERENCES social_media_db.question (id),
  CONSTRAINT second_linkage_to_question_fk FOREIGN KEY (second_question_id) REFERENCES social_media_db.question (id)
);

DROP TABLE IF EXISTS social_media_db.answer;
CREATE TABLE social_media_db.answer (
  id                        serial NOT NULL,
  question_id      	          int8 NOT NULL,
  priority      	          int4 NOT NULL,
  scale_value      	          int4,
  text      	      varchar(255),
  image_url      	  varchar(255),
  CONSTRAINT answer_id_pk PRIMARY KEY (id),
  CONSTRAINT answer_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id)
);

DROP TABLE IF EXISTS social_media_db.user_answer;
CREATE TABLE social_media_db.user_answer (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  question_id      	          int8 NOT NULL,
  answer_id      	          int8 NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT user_answer_id_pk PRIMARY KEY (id),
  CONSTRAINT user_answer_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (internal_id),
  CONSTRAINT user_answer_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id),
  CONSTRAINT user_answer_to_answer_fk FOREIGN KEY (answer_id) REFERENCES social_media_db.answer (id)
);

DROP TABLE IF EXISTS social_media_db.post;
CREATE TABLE social_media_db.post (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  "text"      	      varchar(255) NOT NULL,
  priority      	          int8 NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT post_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (internal_id),
  CONSTRAINT post_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db.resource;
CREATE TABLE social_media_db.resource (
  id                        serial NOT NULL,
  post_id      	              int8 NOT NULL,
  url      	          varchar(255) NOT NULL,
  "type"      	resource_type_enum NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT resource_id_pk PRIMARY KEY (id),
  CONSTRAINT resource_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);

DROP TABLE IF EXISTS social_media_db.comment;
CREATE TABLE social_media_db.comment (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  post_id      	              int8 NOT NULL,
  text      	      varchar(255) NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT comment_id_pk PRIMARY KEY (id),
  CONSTRAINT comment_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (internal_id),
  CONSTRAINT comment_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);

DROP TABLE IF EXISTS social_media_db.reaction;
CREATE TABLE social_media_db.reaction (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  post_id      	              int8 NOT NULL,
  reaction      reaction_type_enum NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT reaction_id_pk PRIMARY KEY (id),
  CONSTRAINT reaction_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (internal_id),
  CONSTRAINT reaction_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);

DROP TABLE IF EXISTS social_media_db.tag;
CREATE TABLE social_media_db.tag (
  id                        serial NOT NULL,
  name         	      varchar(255) NOT NULL,
  CONSTRAINT tag_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db.questionnaire_tag;
CREATE TABLE social_media_db.questionnaire_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  questionnaire_id      	  int8 NOT NULL,
  interest			      	  int8 NOT NULL,
  CONSTRAINT questionnaire_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT questionnaire_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT questionnaire_tag_to_questionnaire_fk FOREIGN KEY (questionnaire_id) REFERENCES social_media_db.questionnaire (id)
);

DROP TABLE IF EXISTS social_media_db.question_tag;
CREATE TABLE social_media_db.question_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  question_id      	          int8 NOT NULL,
  interest			      	  int8 NOT NULL,
  CONSTRAINT question_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT question_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT question_tag_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id)
);

DROP TABLE IF EXISTS social_media_db.linkage_tag;
CREATE TABLE social_media_db.linkage_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  linkage_id      	          int8 NOT NULL,
  interest			      	  int8 NOT NULL,
  CONSTRAINT linkage_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT linkage_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT linkage_tag_to_linkage_fk FOREIGN KEY (linkage_id) REFERENCES social_media_db.linkage (id)
);

DROP TABLE IF EXISTS social_media_db.post_tag;
CREATE TABLE social_media_db.post_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  post_id      	          int8 NOT NULL,
  interest			      	  int8 NOT NULL,
  CONSTRAINT post_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT post_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT post_tag_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);


INSERT INTO social_media_db.subscription (name, description, post_limit, price) VALUES ('Free tier', 'Free tier is just free.', 5, 0);
INSERT INTO social_media_db.subscription (name, description, post_limit, price) VALUES ('Medium tier', 'Medium tier is medium in benefits.', 10, 15);
INSERT INTO social_media_db.subscription (name, description, post_limit, price) VALUES ('Premium tier', 'Premium tier is expensive but has lot of benefits.', 50, 50);
 

INSERT INTO social_media_db."user" 
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp") 
VALUES (1, 'USER', 'user@domain.com', 'john.doe', 'John', 'Doe', 'Str. Principala', 'Iasi', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP);

INSERT INTO social_media_db."user" 
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp") 
VALUES (3, 'ADMIN', 'user@domain.com', 'john.doe', 'John', 'Doe', 'Str. Principala', 'Iasi', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP);

INSERT INTO social_media_db."user" 
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp") 
VALUES (2, 'USER', 'user@domain.com', 'john.doe', 'John', 'Doe', 'Str. Principala', 'Iasi', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP);

INSERT INTO social_media_db."user" 
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp") 
VALUES (2, 'USER', 'user@domain.com', 'john.doe', 'John', 'Doe', 'Str. Principala', 'Iasi', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP);

INSERT INTO social_media_db.questionnaire (priority, name) VALUES (5, 'Politics') RETURNING id;
INSERT INTO social_media_db.questionnaire (priority, name) VALUES (8, 'Sports');
INSERT INTO social_media_db.questionnaire (priority, name) VALUES (2, 'Religion');
INSERT INTO social_media_db.questionnaire (priority, name) VALUES (9, 'Education');
INSERT INTO social_media_db.questionnaire (priority, name) VALUES (1, 'IT');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'TEXT', 'Do you know mister Trump?');
INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'SCALE', 'What do you know about Obama?');
INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'IMAGE', 'How much do you like President Putin?');

INSERT INTO social_media_db.linkage (first_question_id, second_question_id) VALUES (1, 2);
INSERT INTO social_media_db.linkage (first_question_id, second_question_id) VALUES (1, 3);

INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (1, 6, 'Yes');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (1, 4, 'No');
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 5, 10);
INSERT INTO social_media_db.answer (question_id, priority, scale_value, text, image_url) VALUES (3, 1, 10, NULL, null);

INSERT INTO social_media_db.user_answer (user_internal_id, question_id, answer_id, "timestamp") VALUES (1, 1, 2, CURRENT_TIMESTAMP);

INSERT INTO social_media_db.post (user_internal_id, "text", priority, "timestamp") VALUES (1, 'Hello world', 7, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, "text", priority, "timestamp") VALUES (2, 'Covid19 does not exist', 5, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, "text", priority, "timestamp") VALUES (1, 'Trump is the best president', 4, CURRENT_TIMESTAMP);

INSERT INTO social_media_db.resource (post_id, url, "type", "timestamp") VALUES (1, 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, url, "type", "timestamp") VALUES (2, 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, url, "type", "timestamp") VALUES (2, 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg', 'IMAGE', CURRENT_TIMESTAMP);

INSERT INTO social_media_db.comment (user_internal_id, post_id, text, "timestamp") VALUES (1, 1, 'How are you?', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, "timestamp") VALUES (1, 2, 'Ce faci?', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, "timestamp") VALUES (2, 2, 'Merge treaba?', CURRENT_TIMESTAMP);

INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 2, 'LIKE', CURRENT_TIMESTAMP);

INSERT INTO social_media_db.tag (name) VALUES ('IT');
INSERT INTO social_media_db.tag (name) VALUES ('SMARTPHONE');
INSERT INTO social_media_db.tag (name) VALUES ('POLITICS');
INSERT INTO social_media_db.tag (name) VALUES ('REDDIT');
INSERT INTO social_media_db.tag (name) VALUES ('PROGRAMMING');
INSERT INTO social_media_db.tag (name) VALUES ('POSTGRES');
INSERT INTO social_media_db.tag (name) VALUES ('AWS');
INSERT INTO social_media_db.tag (name) VALUES ('LAMBDA');
INSERT INTO social_media_db.tag (name) VALUES ('CLOUDFORMATION');
INSERT INTO social_media_db.tag (name) VALUES ('AZURE');

INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (1, 1, 10);
INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (2, 1, 20);
INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (3, 1, 5);
INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (4, 1, 10);
INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (6, 1, 15);
INSERT INTO social_media_db.questionnaire_tag (tag_id, questionnaire_id, interest) VALUES (3, 2, 15);

INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (1, 1, 10);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (2, 1, 20);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (3, 1, 5);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (4, 1, 10);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (6, 1, 15);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest) VALUES (3, 2, 15);

INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (1, 1, 10);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (2, 1, 20);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (3, 1, 5);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (4, 1, 10);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (6, 1, 15);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest) VALUES (3, 2, 15);

INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (1, 1, 10);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (2, 1, 20);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (3, 1, 5);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (4, 1, 10);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (6, 1, 15);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest) VALUES (3, 2, 15);