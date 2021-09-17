
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
  comments_active          BOOLEAN DEFAULT FALSE,
  reactions_active         BOOLEAN DEFAULT FALSE,
  "support"			  varchar(255) NOT NULL,
  price      	           decimal NOT NULL,
  CONSTRAINT subscription_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db."user";
CREATE TABLE social_media_db."user" (
  id                        serial NOT NULL,
  user_internal_id      	serial NOT NULL,
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
  "timestamp"    	     timestamp NOT NULL,
  active                   BOOLEAN DEFAULT true,
  CONSTRAINT user_id_pk PRIMARY KEY (user_internal_id),
  CONSTRAINT user_email_unique UNIQUE(email),
  CONSTRAINT user_to_subscription_fk FOREIGN KEY (subscription_id) REFERENCES social_media_db.subscription (id)
);

DROP TABLE IF EXISTS social_media_db.questionnaire;
CREATE TABLE social_media_db.questionnaire (
  id                        serial NOT NULL,
  priority      			  int4 NOT NULL,
  title      	      varchar(255) NOT NULL,
  description      	  varchar(255) NOT NULL,
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
  CONSTRAINT user_answer_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (user_internal_id),
  CONSTRAINT user_answer_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id),
  CONSTRAINT user_answer_to_answer_fk FOREIGN KEY (answer_id) REFERENCES social_media_db.answer (id)
);

DROP TABLE IF EXISTS social_media_db.post_category;
CREATE TABLE social_media_db.post_category (
  id                        serial NOT NULL,
  "text"      	      varchar(255) NOT NULL,
  CONSTRAINT post_category_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db.post;
CREATE TABLE social_media_db.post (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  post_category_id      	  int8 NOT NULL,
  "text"      	      varchar(255) NOT NULL,
  priority      	          int8 NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT post_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (user_internal_id),
  CONSTRAINT post_category_to_user_fk FOREIGN KEY (post_category_id) REFERENCES social_media_db.post_category (id),
  CONSTRAINT post_id_pk PRIMARY KEY (id)
);

DROP TABLE IF EXISTS social_media_db.resource;
CREATE TABLE social_media_db.resource (
  id                        serial NOT NULL,
  post_id      	              int8 NOT NULL,
  resource      	   varchar(255) NOT NULL,
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
  visible                  BOOLEAN DEFAULT false,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT comment_id_pk PRIMARY KEY (id),
  CONSTRAINT comment_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (user_internal_id),
  CONSTRAINT comment_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);

DROP TABLE IF EXISTS social_media_db.reaction;
CREATE TABLE social_media_db.reaction (
  id                        serial NOT NULL,
  user_internal_id      	  int8 NOT NULL,
  post_id      	              int8 NOT NULL,
  reaction      reaction_type_enum NOT NULL,
  "timestamp"    	        timestamp NOT NULL,
  CONSTRAINT reaction_unique UNIQUE(user_internal_id, post_id),
  CONSTRAINT reaction_id_pk PRIMARY KEY (id),
  CONSTRAINT reaction_to_user_fk FOREIGN KEY (user_internal_id) REFERENCES social_media_db."user" (user_internal_id),
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
CREATE TABLE social_media_db.post_tag
(
    id       serial NOT NULL,
    tag_id   int8   NOT NULL,
    post_id  int8   NOT NULL,
    interest int8   NOT NULL,
    CONSTRAINT post_tag_id_pk PRIMARY KEY (id),
    CONSTRAINT post_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
    CONSTRAINT post_tag_to_post_fk FOREIGN KEY (post_id) REFERENCES social_media_db.post (id)
);

DROP TABLE IF EXISTS social_media_db.notification;
CREATE TABLE social_media_db.notification
(
    id          		         serial       NOT NULL,
    receiver                     numeric      NOT NULL,
    sender                       numeric      NOT NULL,
    "timestamp" 		         timestamp    NOT NULL,
    message     		         varchar(255) NOT NULL,
    type        		         varchar(255) NOT NULL,
    info        		         varchar(255),
    CONSTRAINT notification_id_pk PRIMARY KEY (id)
);

INSERT INTO social_media_db.subscription (name, description, post_limit, questionnaire_limit, comments_active,
                                          reactions_active, "support", price)
VALUES ('Free tier', 'This contains limited features.', 10, 5, FALSE, FALSE, 'No', 0.0);
INSERT INTO social_media_db.subscription (name, description, post_limit, questionnaire_limit, comments_active,
                                          reactions_active, "support", price)
VALUES ('Silver tier', 'This contains more features.', 50, 25, FALSE, TRUE, 'No', 9.99);
INSERT INTO social_media_db.subscription (name, description, post_limit, questionnaire_limit, comments_active,
                                          reactions_active, "support", price)
VALUES ('Gold tier', 'This contains a lot of features.', 100, 50, TRUE, TRUE, 'Bussines hours', 17.99);
INSERT INTO social_media_db.subscription (name, description, post_limit, questionnaire_limit, comments_active,
                                          reactions_active, "support", price)
VALUES ('Pltinum tier', 'This contains all the features.', -1, -1, TRUE, TRUE, '24/7', 29.99);

INSERT INTO social_media_db."user"
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp", active)
VALUES (1, 'USER', 'marin.andrei@domain.com', 'marin.andrei', 'Marin', 'Andrei', 'Str. Principala', 'Iasi', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP, TRUE);

INSERT INTO social_media_db."user"
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp", active)
VALUES (3, 'ADMIN', 'marcu.andrei@domain.com', 'marcu.andrei', 'Marcu', 'Andrei', 'Str. Mare', 'Botosani', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP, TRUE);

INSERT INTO social_media_db."user"
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp", active)
VALUES (2, 'USER', 'popescu.robert@domain.com', 'popescu.robert', 'Popescu', 'Robert', 'Str. Ciurci', 'Cluj', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP, TRUE);

INSERT INTO social_media_db."user"
(subscription_id, "type", email, username, first_name, last_name, address, city, country, zip_code, theme, "timestamp", active)
VALUES (2, 'USER', 'george.ai@domain.com', 'george.ai', 'Aionesei', 'George', 'Str. Rozelor', 'Timisoara', 'Romania', '787878', 'dark', CURRENT_TIMESTAMP, TRUE);

INSERT INTO social_media_db.questionnaire (priority, title, description) VALUES (5, 'Politics', 'Lets find out how much do you know about the people you vote with.') RETURNING id;
INSERT INTO social_media_db.questionnaire (priority, title, description) VALUES (8, 'Sports', 'Fotbal or Tenis? Snooker or Golf? Answer this to mark it.');
INSERT INTO social_media_db.questionnaire (priority, title, description) VALUES (9, 'Education', 'Lets see how big your IQ is.');
INSERT INTO social_media_db.questionnaire (priority, title, description) VALUES (1, 'IT', 'Do you want to make money?');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'TEXT', 'Do you know mister Trump?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (1, 5, 'Yes');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (1, 3, 'No');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'TEXT', 'What do you know about Obama?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (2, 6, 'He is cool');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (2, 2, 'He was the best president ever');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (2, 4, 'He was the worst president ever');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'SCALE', 'How much do you like President Putin?');
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 5, 1);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 1, 2);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 2, 3);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 3, 4);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 4, 5);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (3, 1, 6);

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (1, 'IMAGE', 'Select the president of Romania');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 2, 'https://pbs.twimg.com/profile_images/943443404503035905/IR4g2F3r.jpg');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 1, 'https://www.oceanfm.ie/wp-content/uploads/2020/04/EUhGDpvXYAAt-i6-1.jpg');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 9, 'https://www.turnulsfatului.ro/wp-content/uploads/2017/07/Untitled.jpg');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 2, 'https://vignette.wikia.nocookie.net/future/images/3/38/Cruz.jpg/revision/latest?cb=20170710144551');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (4, 1, 'https://www.coe.int/documents/29148167/34952529/Photo+Ramin.jpg/d507672d-d380-fa87-7f59-d0e8ce6d0dfe?t=1547112581000');

INSERT INTO social_media_db.question (questionnaire_id, question_type, multiple_answers, title) VALUES (2, 'TEXT', TRUE, 'What is your favorite sport?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (5, 1, 'Fotbal');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (5, 6, 'Tennis');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (5, 2, 'Snooker');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (5, 3, 'Table tennis');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (5, 8, 'Golf');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (2, 'TEXT', 'Do you play sports?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (6, 3, 'Yes');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (6, 8, 'No');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (3, 'TEXT', 'Do you have kids?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (7, 3, 'Yes');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (7, 8, 'No');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (3, 'SCALE', 'How many?');
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 3, 0);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 8, 1);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 3, 2);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 8, 3);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 3, 4);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (8, 8, 5);

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (3, 'TEXT', 'Do you have a school nearby?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (9, 3, 'Yes');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (9, 8, 'No');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (3, 'IMAGE', 'Please select the school from the photos.');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (10, 4, 'https://emerging-europe.com/wp-content/uploads/2020/04/bigstock-121724798-990x556.jpg');
INSERT INTO social_media_db.answer (question_id, priority, image_url) VALUES (10, 2, 'https://isor.ro/wp-content/uploads/2018/07/photo-video02.png');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (4, 'TEXT', 'How big is your salary now?');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (11, 3, '< $1000');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (11, 8, '$1000-$2000');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (11, 8, '$2000-$4000');
INSERT INTO social_media_db.answer (question_id, priority, text) VALUES (11, 8, '$4000+');

INSERT INTO social_media_db.question (questionnaire_id, question_type, title) VALUES (4, 'SCALE', 'How much do you like the IT industry?');
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 3, 0);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 2, 1);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 4, 2);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 1, 3);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 9, 4);
INSERT INTO social_media_db.answer (question_id, priority, scale_value) VALUES (12, 7, 5);

INSERT INTO social_media_db.linkage (first_question_id, second_question_id) VALUES (1, 2);
INSERT INTO social_media_db.linkage (first_question_id, second_question_id) VALUES (1, 3);

INSERT INTO social_media_db.user_answer (user_internal_id, question_id, answer_id, "timestamp") VALUES (1, 1, 2, CURRENT_TIMESTAMP);

INSERT INTO social_media_db.post_category ("text") VALUES ('Politics');
INSERT INTO social_media_db.post_category ("text") VALUES ('Something else');
INSERT INTO social_media_db.post_category ("text") VALUES ('Sports');


INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (1, 1, 'Administration and GOP officials defend Trumps Covid response despite recordings showing he deliberately minimized virus', 7, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (2, 2, 'United CEO sees low air travel until a widely available vaccine', 5, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (3, 1, 'Biden ahead in Minnesota and Arizona, CBS polls indicate', 4, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (4, 3, 'Pompeo to resume Madison Dinners despite controversy', 5, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (1, 3, 'Some State Department officials have complained about the dinners, saying they have little to do with diplomacy and will unduly burden the staff amid a pandemic.', 7, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (2, 1, 'Trump team says history will vindicate him on coronavirus', 5, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (3, 2, 'Top advisers blame everyone but the president for the nation’s plight during the pandemic.', 4, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.post (user_internal_id, post_category_id, "text", priority, "timestamp") VALUES (4, 1, 'The pandemic has left airlines hard-hit amid safety concerns and as other countries bar American travelers from entry.', 5, CURRENT_TIMESTAMP);

INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (1, 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (1, '<h1>Ceva</h1>', 'HTML', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (5, 'https://emerging-europe.com/wp-content/uploads/2020/04/bigstock-121724798-990x556.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (2, 'https://isor.ro/wp-content/uploads/2018/07/photo-video02.png', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (3, 'https://pbs.twimg.com/profile_images/943443404503035905/IR4g2F3r.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (4, 'https://www.oceanfm.ie/wp-content/uploads/2020/04/EUhGDpvXYAAt-i6-1.jpg', 'IMAGE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.resource (post_id, resource, "type", "timestamp") VALUES (6, 'https://vignette.wikia.nocookie.net/future/images/3/38/Cruz.jpg/revision/latest?cb=20170710144551', 'IMAGE', CURRENT_TIMESTAMP);

INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 2, 'Politics comment.', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 2, 'Trump is gay', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 2, 'Obama is a lengend', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 2, 'How are you?', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 3, 'Vand golf 4', FALSE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 3, 'Stie cineva cum pot da comentarii aici?', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 6, 'How are you?', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (1, 6, 'The world will be a better place without me', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (2, 2, 'Black lives mather', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (2, 2, 'Where is the library?', FALSE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (2, 4, 'Please like my video', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (2, 3, 'Im a influencer', FALSE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (2, 5, 'Programming is hard', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (3, 6, 'Putin is the best president ever', FALSE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (3, 6, 'This sistem is actually working?', TRUE, CURRENT_TIMESTAMP);
INSERT INTO social_media_db.comment (user_internal_id, post_id, text, visible, "timestamp") VALUES (3, 7, 'Work hard. Play hard', TRUE, CURRENT_TIMESTAMP);

INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (1, 1, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (1, 4, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (1, 5, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 1, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 2, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 3, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 4, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 5, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 6, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (2, 7, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (3, 2, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (3, 4, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (3, 5, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (3, 6, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (3, 7, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (4, 8, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (4, 1, 'LIKE', CURRENT_TIMESTAMP);
INSERT INTO social_media_db.reaction (user_internal_id, post_id, reaction, "timestamp") VALUES (4, 7, 'LIKE', CURRENT_TIMESTAMP);

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

INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (1, 1, 10);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (2, 1, 20);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (3, 1, 5);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (4, 1, 10);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (6, 1, 15);
INSERT INTO social_media_db.question_tag (tag_id, question_id, interest)
VALUES (3, 2, 15);

INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (1, 1, 10);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (2, 1, 20);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (3, 1, 5);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (4, 1, 10);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (6, 1, 15);
INSERT INTO social_media_db.linkage_tag (tag_id, linkage_id, interest)
VALUES (3, 2, 15);

INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (1, 1, 10);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (2, 1, 20);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (3, 1, 5);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (4, 1, 10);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (6, 1, 15);
INSERT INTO social_media_db.post_tag (tag_id, post_id, interest)
VALUES (3, 2, 15);

INSERT INTO social_media_db.notification (receiver, sender, "timestamp", message, type, info)
VALUES (-1, -3, CURRENT_TIMESTAMP, 'Welcome everybody', 'alert', NULL);