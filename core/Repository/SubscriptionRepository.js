const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.GET_BY_ID(id))
};

exports.add = (name, description, post_limit, price) => {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.ADD(name, description, post_limit, price));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.DELETE(id));
}