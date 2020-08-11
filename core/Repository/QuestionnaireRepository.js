const DatabaseService = require('../Services/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_BY_ID(id));
};

exports.add = (priority, name) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.ADD(priority, name));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.DELETE(id));
}