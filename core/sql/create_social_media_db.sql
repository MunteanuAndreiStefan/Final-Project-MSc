DROP SCHEMA IF EXISTS social_media_db CASCADE;
CREATE SCHEMA social_media_db;

CREATE TABLE social_media_db.questionnaire (
  id                        serial NOT NULL,
  questionnaire_data_id     varchar(255),
  CONSTRAINT campaign_id_pk PRIMARY KEY (id)
);