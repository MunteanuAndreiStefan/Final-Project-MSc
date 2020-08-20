const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.GET_BY_ID(id))
};

exports.add = (tag_id, question_id, interest) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.ADD(tag_id, question_id, interest));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.DELETE(id));
}