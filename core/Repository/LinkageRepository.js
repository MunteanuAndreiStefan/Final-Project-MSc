const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.GET_BY_ID(id))
};

exports.add = (first_question_id, second_question_id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.ADD(first_question_id, second_question_id));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.DELETE(id));
}