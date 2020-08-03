const DatabaseService = require('../Services/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_BY_ID(id));
};

exports.add = (questionnaire) => {

}

exports.remove = (id) => {

}