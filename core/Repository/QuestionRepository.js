const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.GET_BY_ID(id))
};

exports.add = (questionnaire_id, title) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.ADD(questionnaire_id, title));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.DELETE(id));
}