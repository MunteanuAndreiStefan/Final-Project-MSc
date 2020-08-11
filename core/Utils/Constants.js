let SCHEMATAS = {
    SOCIAL_MEDIA_DB: {
        NAME: 'social_media_db',
        TABLES: {
            QUESTIONNAIRE: {
                NAME: 'questionnaire',
                COLUMNS: [
                    'priority', 'name'
                ]
            },
            QUESTION: {
                NAME: 'question',
                COLUMNS: [
                    'questionnaire_id', 'title'
                ]
            },
            LINKAGE: {
                NAME: 'linkage',
                COLUMNS: [
                    'first_question_id', 'second_question_id'
                ]
            },
            ANSWER: {
                NAME: 'answer',
                COLUMNS: [
                    'question_id', 'answer_type', 'priority', 'scale_min', 'scale_max', 'text', 'image_url'
                ]
            },
            USER_ANSWER: {
                NAME: 'user_answer',
                COLUMNS: [
                    'user_internal_id', 'question_id', 'answer_id', 'timestamp'
                ]
            },
            POST: {
                NAME: 'post',
                COLUMNS: [
                    'text', 'priority', 'timestamp'
                ]
            },
            RESOURCE: {
                NAME: 'resource',
                COLUMNS: [
                    'post_id', 'url', 'type', 'timestamp'
                ]
            },
            COMMENT: {
                NAME: 'comment',
                COLUMNS: [
                    'user_internal_id', 'post_id', 'text', 'timestamp'
                ]
            },
            REACTION: {
                NAME: 'reaction',
                COLUMNS: [
                    'user_internal_id', 'post_id', 'reaction', 'timestamp'
                ]
            },
            TAG: {
                NAME: 'tag',
                COLUMNS: [
                    'name'
                ]
            },
            QUESTIONNAIRE_TAG: {
                NAME: 'questionnaire_tag',
                COLUMNS: [
                    'tag_id', 'questionnaire_id', 'interest'
                ]
            },
            QUESTION_TAG: {
                NAME: 'question_tag',
                COLUMNS: [
                    'tag_id', 'question_id', 'interest'
                ]
            },
            LINKAGE_TAG: {
                NAME: 'linkage_tag',
                COLUMNS: [
                    'tag_id', 'linkage_id', 'interest'
                ]
            },
            POST_TAG: {
                NAME: 'post_tag',
                COLUMNS: [
                    'tag_id', 'post_id', 'interest'
                ]
            }
        }
    }
}

let QUERIES = {
    QUESTIONNAIRE: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (priority, name) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${priority}, ${name});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTION: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (questionnaire_id, title) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${questionnaire_id}, ${title});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (first_question_id, second_question_id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${first_question_id}, ${second_question_id});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    ANSWER: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (question_id, answer_type, priority, scale_min = null, scale_max = null, text = null, image_url = null) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.COLUMNS.join(', ')
            let values = question_id + ', ' + answer_type + ', ' + priority + ', ' + scale_min + ', ' + scale_max + ', ' + text + ', ' + image_url;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    USER_ANSWER: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id, question_id, answer_id, timestamp) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + question_id + ', ' + answer_id + ', ' + timestamp;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    POST: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (text, priority, timestamp) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST.COLUMNS.join(', ')
            let values = text + ', ' + priority + ', ' + timestamp;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    RESOURCE: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (post_id, url, type, timestamp) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = post_id + ', ' + url + ', ' + type  + ', ' + timestamp;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    COMMENT: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id, post_id, text, timestamp) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COMMENT.join(', ')
            let values = user_internal_id + ', ' + post_id + ', ' + text  + ', ' + timestamp;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    REACTION: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id, post_id, reaction, timestamp) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.REACTION.join(', ')
            let values = user_internal_id + ', ' + post_id + ', ' + reaction  + ', ' + timestamp;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    TAG: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (name) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.TAG.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${name});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTIONNAIRE_TAG: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, questionnaire_id, interest) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.QUESTIONNAIRE_TAG.join(', ')
            let values = tag_id + ', ' + questionnaire_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTION_TAG: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, question_id, interest) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.QUESTION_TAG.join(', ')
            let values = tag_id + ', ' + question_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE_TAG: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, linkage_id, interest) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.LINKAGE_TAG.join(', ')
            let values = tag_id + ', ' + linkage_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    POST_TAG: {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id, post_id, interest) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            let columns = SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.POST_TAG.join(', ')
            let values = tag_id + ', ' + post_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values});`;
        },
        DELETE: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    }
}

module.exports = {
    QUERIES: QUERIES
}