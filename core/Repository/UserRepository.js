const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_BY_ID(id))
};

exports.add = (subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.ADD(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.DELETE(id));
}