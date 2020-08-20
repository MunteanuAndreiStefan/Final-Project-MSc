const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.GET_BY_ID(id))
};

exports.add = (tag_id, questionnaire_id, interest) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.ADD(tag_id, questionnaire_id, interest));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.DELETE(id));
}