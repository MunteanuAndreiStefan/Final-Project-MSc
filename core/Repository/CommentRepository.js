const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.GET_BY_ID(id))
};

exports.add = (user_internal_id, post_id, text) => {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.ADD(user_internal_id, post_id, text));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.DELETE(id));
}