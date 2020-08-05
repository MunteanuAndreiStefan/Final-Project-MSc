DROP SCHEMA IF EXISTS social_media_db CASCADE;
CREATE SCHEMA social_media_db;

DROP TYPE IF EXISTS answer_type_enum;
CREATE TYPE answer_type_enum AS ENUM ('SCALE', 'TEXT', 'IMAGE');


CREATE TABLE social_media_db.questionnaire (
  id                        serial NOT NULL,
  priority      			  int4 NOT NULL,
  CONSTRAINT questionnaire_id_pk PRIMARY KEY (id)
);

CREATE TABLE social_media_db.question (
  id                        serial NOT NULL,
  questionnaire_id      	  int8 NOT NULL,
  title      	      varchar(255) NOT NULL,
  description      	  varchar(255),
  CONSTRAINT question_id_pk PRIMARY KEY (id),
  CONSTRAINT question_to_questionnaire_fk FOREIGN KEY (questionnaire_id) REFERENCES social_media_db.questionnaire (id)
);

CREATE TABLE social_media_db.linkage (
  id                        serial NOT NULL,
  first_question_id      	  int8 NOT NULL,
  second_question_id      	  int8 NOT NULL,
  CONSTRAINT linkage_id_pk PRIMARY KEY (id),
  CONSTRAINT first_linkage_to_question_fk FOREIGN KEY (first_question_id) REFERENCES social_media_db.question (id),
  CONSTRAINT second_linkage_to_question_fk FOREIGN KEY (second_question_id) REFERENCES social_media_db.question (id)
);

CREATE TABLE social_media_db.answer (
  id                        serial NOT NULL,
  question_id      	          int8 NOT NULL,
  answer_type     answer_type_enum NOT NULL,
  priority      	          int4 NOT NULL,
  scale_min      	          int4,
  scale_max      	          int4,
  text      	      varchar(255),
  image_url      	  varchar(255),
  CONSTRAINT answer_id_pk PRIMARY KEY (id),
  CONSTRAINT answer_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id)
);

CREATE TABLE social_media_db.tag (
  id                        serial NOT NULL,
  name         	      varchar(255) NOT NULL,
  CONSTRAINT tag_id_pk PRIMARY KEY (id)
);

CREATE TABLE social_media_db.questionnaire_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  questionnaire_id      	  int8 NOT NULL,
  CONSTRAINT questionnaire_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT questionnaire_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT questionnaire_tag_to_questionnaire_fk FOREIGN KEY (questionnaire_id) REFERENCES social_media_db.questionnaire (id)
);

CREATE TABLE social_media_db.question_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  question_id      	          int8 NOT NULL,
  CONSTRAINT question_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT question_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT question_tag_to_question_fk FOREIGN KEY (question_id) REFERENCES social_media_db.question (id)
);

CREATE TABLE social_media_db.linkage_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  linkage_id      	          int8 NOT NULL,
  CONSTRAINT linkage_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT linkage_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT linkage_tag_to_linkage_fk FOREIGN KEY (linkage_id) REFERENCES social_media_db.linkage (id)
);

CREATE TABLE social_media_db.answer_tag (
  id                        serial NOT NULL,
  tag_id      	              int8 NOT NULL,
  answer_id      	          int8 NOT NULL,
  CONSTRAINT answer_tag_id_pk PRIMARY KEY (id),
  CONSTRAINT answer_tag_to_tag_fk FOREIGN KEY (tag_id) REFERENCES social_media_db.tag (id),
  CONSTRAINT answer_tag_to_answer_fk FOREIGN KEY (answer_id) REFERENCES social_media_db.answer (id)
);
