const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.GET_BY_ID(id))
};

exports.add = (post_id, url, type) => {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.ADD(post_id, url, type));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.DELETE(id));
}