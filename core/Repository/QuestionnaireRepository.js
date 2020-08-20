const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_BY_ID(id))
};

exports.getAll = () => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_ALL())
};

exports.add = (priority, name) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.ADD(priority, name));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.DELETE(id));
}