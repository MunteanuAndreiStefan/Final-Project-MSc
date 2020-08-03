let SCHEMATAS = {
    SOCIAL_MEDIA_DB: {
        NAME: 'social_media_db',
        TABLES: {
            QUESTIONNAIRE: {
                NAME: 'questionnaire'
            }
        }
    }
}

let QUERIES = {
    QUESTIONNAIRE : {
        GET_BY_ID: (id) => {
            let schemaAndDatabaseName = SCHEMATAS.SOCIAL_MEDIA_DB.NAME + '.' + SCHEMATAS.SOCIAL_MEDIA_DB.TABLES.QUESTIONNAIRE.NAME;
            return `SELECT * FROM ${schemaAndDatabaseName} WHERE id = ${id};`;
        }
    }
}

module.exports = {
    QUERIES : QUERIES
}