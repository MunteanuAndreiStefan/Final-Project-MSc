const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.GET_BY_ID(id))
};

exports.add = (name) => {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.ADD(name));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.DELETE(id));
}