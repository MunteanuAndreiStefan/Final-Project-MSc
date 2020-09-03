const SCHEMAS = {
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
                    'questionnaire_id', 'question_type', 'multiple_answers', 'title', 'description'
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
                    'question_id', 'priority', 'scale_value', 'text', 'image_url'
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
            SUBSCRIPTION: {
                NAME: 'subscription',
                COLUMNS: [
                    'name', 'description', 'post_limit', 'price'
                ]
            },
            USER: {
                NAME: 'user',
                COLUMNS: [
                    'subscription_id', 'type', 'email', 'username', 'first_name', 'last_name', 'address', 'city', 'country', 'zip_code', 'theme', 'timestamp'
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
} as const


export const QUERIES = {
    QUESTIONNAIRE: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (priority: number, name: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${priority}, '${name}') RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTION: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (questionnaire_id: number, question_type: string, multiple_answers: boolean, title: string, description: string) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${questionnaire_id}, '${question_type}', ${multiple_answers}, '${title}', '${description}') RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (first_question_id: number, second_question_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${first_question_id}, ${second_question_id}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    ANSWER: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (question_id: number, priority: number, scale_value: number, text: string, image_url: string) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.COLUMNS.join(', ')
            let values = question_id + ', ' + priority + ', ' + scale_value + ', \'' + text + '\', \'' + image_url + '\'';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    USER_ANSWER: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id: number, question_id: number, answer_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + question_id + ', ' + answer_id + ', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER_ANSWER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    POST: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (text: string, priority: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.COLUMNS.join(', ')
            let values = '\'' + text + '\', ' + priority + ', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    RESOURCE: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (post_id: number, url: string, type: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = post_id + ', \'' + url + '\', \'' + type + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    COMMENT: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id: number, post_id: number, text: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + post_id + ', \'' + text + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    REACTION: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id: number, post_id: number, reaction: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + post_id + ', \'' + reaction + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    TAG: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (name: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES ('${name}') RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    SUBSCRIPTION: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (name: string, description: string, post_limit: number, price: number) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = '\'' + name + '\', \'' + description + '\', ' + post_limit + ', ' + price;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    USER: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (subscription_id: number, type: string, email: string, username: string,
              first_name: string, last_name: string, address: string, city: string,
              country: string, zip_code: string, theme: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = subscription_id + ', \'' + type + '\', \'' + email + '\', \''
                + username + '\', \'' + first_name + '\', \'' + last_name + '\', \'' + address + '\', \'' + city + '\', \''
                + country + '\', \'' + zip_code + '\', \'' + theme + '\', CURRENT_TIMESTAMP'
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTIONNAIRE_TAG: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id: number, questionnaire_id: number, interest: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = tag_id + ', ' + questionnaire_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    QUESTION_TAG: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id: number, question_id: number, interest: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = tag_id + ', ' + question_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    LINKAGE_TAG: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id: number, linkage_id: number, interest: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.COLUMNS.join(', ')
            let values = tag_id + ', ' + linkage_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.LINKAGE_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    POST_TAG: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (tag_id: number, post_id: number, interest: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = tag_id + ', ' + post_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    }
};

export const MESSAGES = {
    NOT_FOUND: {
        status: 404,
        QUESTIONNAIRE: 'QUESTIONNAIRE not found.',
        QUESTION: 'QUESTION not found.',
        LINKAGE: 'LINKAGE not found.',
        ANSWER: 'ANSWER not found.',
        USER_ANSWER: 'USER_ANSWER not found.',
        POST: 'POST not found.',
        RESOURCE: 'RESOURCE not found.',
        COMMENT: 'COMMENT not found.',
        REACTION: 'REACTION not found.',
        TAG: 'TAG not found.',
        QUESTIONNAIRE_TAG: 'QUESTIONNAIRE_TAG not found.',
        QUESTION_TAG: 'QUESTION_TAG not found.',
        LINKAGE_TAG: 'LINKAGE_TAG not found.',
        POST_TAG: 'POST_TAG not found.'
    }
};
