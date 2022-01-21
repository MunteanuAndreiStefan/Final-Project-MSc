import {ALGORITHM} from './ALGORITHM_QUERIES'

const SCHEMAS = {
    SOCIAL_MEDIA_DB: {
        NAME: 'social_media_db',
        TABLES: {
            QUESTIONNAIRE: {
                NAME: 'questionnaire',
                COLUMNS: [
                    'priority', 'title', 'description'
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
                    'user_internal_id', 'post_category_id', 'text', 'priority', 'timestamp'
                ]
            },
            CATEGORY: {
                NAME: 'post_category',
                COLUMNS: [
                    'text'
                ]
            },
            POST_CATEGORY: {
                NAME: 'post_category',
                COLUMNS: [
                    'text'
                ]
            },
            RESOURCE: {
                NAME: 'resource',
                COLUMNS: [
                    'post_id', 'resource', 'type', 'timestamp'
                ]
            },
            COMMENT: {
                NAME: 'comment',
                COLUMNS: [
                    'user_internal_id', 'post_id', 'text', 'visible', 'timestamp'
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
                    'name', 'description', 'post_limit', 'questionnaire_limit', 'comments_active', 'reactions_active', 'support', 'price'
                ]
            },
            USER: {
                NAME: 'user',
                COLUMNS: [
                   'subscription_id', 'type', 'email', 'username', 'first_name', 'last_name', 'address', 'city', 'country', 'zip_code', 'theme', 'timestamp', 'active'
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
            },
            NOTIFICATION: {
                NAME: 'notification',
                COLUMNS: [
                    'user_internal_id', 'timestamp', 'message', 'type', 'info'
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
        ADD: (priority: number, title: string, description: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.COLUMNS.join(', ')
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${priority}, '${title}', '${description}') RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ALL_QUESTIONNAIRES_BY_USER_AND_ORDERED: (email: string): string => {
            return `SELECT * FROM social_media_db.questionnaire q
                    ORDER BY priority DESC
                    LIMIT (
                        SELECT s.questionnaire_limit FROM social_media_db."user" u 
                        JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}'
                    )`;
        },
        GET_ANSWERED_QUESTIONNAIRE_LIST: (email: string): string => {
            return `SELECT * FROM social_media_db.questionnaire q2 WHERE q2.id IN (
                        SELECT DISTINCT (questionnaire_id) 
                        FROM social_media_db.question q 
                        WHERE q.id IN (
                            SELECT question_id 
                            FROM social_media_db.user_answer ua 
                            WHERE ua.user_internal_id  = (
                                SELECT user_internal_id 
                                FROM social_media_db.USER 
                                WHERE email = '${email}'
                            )
                        )
                    )`;
        },
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
        GET_BY_QUESTIONNAIRE_ID: (questionnaireId: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE questionnaire_id = ${questionnaireId};`;
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
        GET_ALL_BY_QUESTION_ID: (questionId: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.ANSWER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE question_id = ${questionId};`;
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
        },
        GET_ACTIVITY_OF: (user_internal_id: number): string => {
            return `SELECT 
                        q.title AS "question_text",
                        ua."timestamp" AS "timestamp" 
                    FROM social_media_db.user_answer ua 
                    JOIN social_media_db.question q ON q.id = ua.question_id 
                    WHERE ua.user_internal_id = ${user_internal_id};`;
        }
    },
    POST: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        GET_ALL_BY_CATEGORY_ID: (category_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_category_id = ${category_id};`;
        },
        COUNT: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT COUNT(*) FROM ${schemaAndDatabaseName}`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        ADD: (user_internal_id: number, post_category_id: number, text: string, priority: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.COLUMNS.join(', ')
            let values = `${user_internal_id}, ${post_category_id}, '${text}', ${priority}, CURRENT_TIMESTAMP`;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id: number): string => {
            return `SELECT 
                        p."text" AS "post_text",
                        pc.TEXT AS "category_name",
                        p."timestamp" AS "timestamp" 
                    FROM social_media_db.post p 
                    JOIN social_media_db.post_category pc ON pc.id = p.post_category_id 
                    WHERE user_internal_id = ${user_internal_id};`;
        },
        GET_ALL_BY_SUBSCRIPTION_AND_ORDERED: (email: string): string => {
            return `SELECT p.id, p.post_category_id, p.user_internal_id, p."text", p.priority, p."timestamp" FROM social_media_db.post p
                    ORDER BY priority DESC, "timestamp" DESC 
                    LIMIT (
                        SELECT s.post_limit FROM social_media_db."user" u 
                        JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}' LIMIT 1
                    )`;
        },
        GET_RECOMMENDED: (email: string): string => {
            return ALGORITHM.GET_RECOMMENDED(email);
        },
        GET_BULK: (email: string, recommendedPostsIds: number[]): string => {
            return ALGORITHM.GET_BULK(email, recommendedPostsIds);
        },

    },
    CATEGORY: {
        GET_ALL: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName}`;
        },
        ADD: (text: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.COLUMNS.join(', ')
            let values = '\'' + text + '\'';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.CATEGORY.NAME;
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
        GET_BY_POST_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${id};`;
        },
        ADD: (post_id: number, resource: any, type: any): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = post_id + ', \'' + resource + '\', \'' + type + '\', CURRENT_TIMESTAMP';
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
        GET_UNAPPROVED_COMMENTS: (): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} c WHERE c.visible = FALSE;`;
        },
        GET_BY_POST_ID: (post_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${post_id};`;
        },
        ADD: (user_internal_id: number, post_id: number, text: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + post_id +  ', \'' + text + '\', FALSE, CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        APPROVE_COMMENT: (commentId: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `UPDATE ${schemaAndDatabaseName} SET visible = TRUE WHERE id = ${commentId}`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.COMMENT.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id: number): string => {
            return `SELECT 
                        c."text" AS "comment_text",
                        c.visible AS "comment_visible",
                        p."text" AS "post_text",
                        c."timestamp" AS "timestamp" 
                    FROM social_media_db."comment" c 
                    JOIN social_media_db.post p ON p.id = c.post_id 
                    WHERE c.user_internal_id = ${user_internal_id};`;
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
        GET_BY_POST_ID: (post_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE post_id = ${post_id};`;
        },
        ADD: (user_internal_id: number, post_id: number, reaction: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.COLUMNS.join(', ')
            let values = user_internal_id + ', ' + post_id + ', \'' + reaction + '\', CURRENT_TIMESTAMP';
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.REACTION.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_ACTIVITY_OF: (user_internal_id: number): string => {
            return `SELECT 
                        r."reaction" AS "reaction",
                        p."text" AS "post_text",
                        r."timestamp" AS "timestamp" 
                    FROM social_media_db."reaction" r 
                    JOIN social_media_db.post p ON p.id = r.post_id 
                    WHERE r.user_internal_id = ${user_internal_id};`;
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
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.TAG.COLUMNS.join(', ')
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
        ADD: (name: string, description: string, post_limit: number, questionnaire_limit: number, comments_active: boolean,
              reactions_active: boolean, support: string, price: number) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.SUBSCRIPTION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.RESOURCE.COLUMNS.join(', ')
            let values = '\'' + name + '\', \'' + description + '\', ' + post_limit + ', ' + questionnaire_limit + ', '
                + comments_active + ', ' + reactions_active + ', \'' + support + '\', ' + price;
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
        GET_SHALLOW_USERS_BY_IDS: (ids: number[]): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT user_internal_id, first_name, last_name FROM ${schemaAndDatabaseName} WHERE id IN (${ids.join(',')})`;
        },
        GET_BY_ID: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let selectedColumns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(',')
            return `SELECT ${selectedColumns} FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        },
        GET_BY_USER_INTERNAL_ID: (user_internal_id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let selectedColumns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(',')
            return `SELECT ${selectedColumns} FROM ${schemaAndDatabaseName} WHERE user_internal_id = ${user_internal_id};`;
        },
        CHANGE_SUBSCRIPTION: (subscription_id: number, user_email: string): string => {
            return `UPDATE social_media_db."user" u
                    SET subscription_id = (SELECT id FROM social_media_db."subscription" s WHERE id = ${subscription_id})
                    WHERE u.email = '${user_email}';`;
        },
        CHANGE_ACTIVE_STATUS: (user_internal_id: number, activeStatus: boolean): string => {
            return `UPDATE social_media_db."user" 
                    SET active = ${activeStatus} 
                    WHERE user_internal_id = ${user_internal_id};`;
        },
        GET_BY_EMAIL: (email: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE email = '${email}';`;
        },
        ADD: (subscription_id: number, type: string, email: string, username: string,
              first_name: string, last_name: string, address: string, city: string,
              country: string, zip_code: string, theme: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.COLUMNS.join(', ')
            let values = subscription_id + ', \'' + type + '\', \'' + email + '\', \''
                + username + '\', \'' + first_name + '\', \'' + last_name + '\', \'' + address + '\', \'' + city + '\', \''
                + country + '\', \'' + zip_code + '\', \'' + theme + '\', CURRENT_TIMESTAMP, TRUE'
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        EDIT_DETAILS: (email: string, new_email: string, first_name: string, last_name: string, city: string, country: string, zip_code: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.USER.NAME;
            return `UPDATE ${schemaAndDatabaseName} u
                SET email = '${new_email}',  first_name = '${first_name}', last_name = '${last_name}', city = '${city}', country = '${country}', zip_code = '${zip_code}'
                WHERE u.email = '${email}'`;
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
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE_TAG.COLUMNS.join(', ')
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
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.QUESTION_TAG.COLUMNS.join(', ')
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
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.COLUMNS.join(', ')
            let values = tag_id + ', ' + post_id + ', ' + interest;
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${values}) RETURNING id;`;
        },
        DELETE: (id: number): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.POST_TAG.NAME;
            return `DELETE FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    },
    NOTIFICATION: {
        GET_FOR_USER_ID: (user_internal_id: number, isAdmin: boolean): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            if (isAdmin) {
                return `SELECT * FROM ${schemaAndDatabaseName} WHERE user_internal_id = ${user_internal_id} OR user_internal_id = -1 OR user_internal_id = -2 
                    ORDER BY timestamp DESC;`
            }

            return `SELECT * FROM ${schemaAndDatabaseName} WHERE user_internal_id = ${user_internal_id} OR user_internal_id = -1
                    ORDER BY timestamp DESC;`
        },
        ADD_FOR_USER: (user_internal_id: number, message: string, type: string, info: string): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.COLUMNS.join(', ')
            let goodInfo = (info === null || info === undefined) ? "NULL" : `'${info}'`
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${user_internal_id}, CURRENT_TIMESTAMP, '${message}', '${type}', ${goodInfo})`
        },
        ADD_ALERT_FOR_ALL: (message: string, info: string) => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.COLUMNS.join(', ')
            let goodInfo = (info === null || info === undefined) ? `NULL` : `'${info}'`
            let user_internal_id = -1
            let type = 'alert'
            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES (${user_internal_id}, CURRENT_TIMESTAMP, '${message}', '${type}', ${goodInfo})`
        },
        ADD_FOR_POST_ID: (postId: number, reactorName: string, type: string, info: string | null): string => {
            let schemaAndDatabaseName = SCHEMAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.NAME;
            let columns = SCHEMAS.SOCIAL_MEDIA_DB.TABLES.NOTIFICATION.COLUMNS.join(', ')
            let goodInfo = (info === null || info === undefined) ? "NULL" : `'${info}'`

            return `INSERT INTO ${schemaAndDatabaseName} (${columns}) VALUES ((SELECT user_internal_id from social_media_db.post p where p.id = ${postId}), CURRENT_TIMESTAMP, '${reactorName} liked one of your posts', '${type}', ${goodInfo});
            INSERT INTO ${schemaAndDatabaseName} (${columns})
            select r.user_internal_id, CURRENT_TIMESTAMP, '${reactorName} liked a post you also liked', 'general', NULL from social_media_db.reaction r where r.post_id = ${postId};
            `
        }
    },
};

export const MESSAGES = {
    NOT_FOUND: {
        status: 404,
        QUESTIONNAIRE: 'QUESTIONNAIRE not found.',
        QUESTION: 'QUESTION not found.',
        LINKAGE: 'LINKAGE not found.',
        ANSWER: 'ANSWER not found.',
        USER_ANSWER: 'USER_ANSWER not found.',
        USER: 'USER not found.',
        POST: 'POST not found.',
        CATEGORIES: 'CATEGORIES not found.',
        RESOURCE: 'RESOURCE not found.',
        COMMENT: 'COMMENT not found.',
        REACTION: 'REACTION not found.',
        TAG: 'TAG not found.',
        QUESTIONNAIRE_TAG: 'QUESTIONNAIRE_TAG not found.',
        QUESTION_TAG: 'QUESTION_TAG not found.',
        LINKAGE_TAG: 'LINKAGE_TAG not found.',
        POST_TAG: 'POST_TAG not found.',
        SUBSCRIPTION: 'SUBSCRIPTION not found.',
        NOTIFICATION: 'NOTIFICATION not found'
    },
    SUCCESS: {
        SUBSCRIPTION_UPDATED: 'Subscription plan updated successfully.'
    }
};
