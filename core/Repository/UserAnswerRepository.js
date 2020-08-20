const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.GET_BY_ID(id))
};

exports.add = (user_internal_id, question_id, answer_id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.ADD(user_internal_id, question_id, answer_id));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.DELETE(id));
}