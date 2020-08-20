const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.GET_BY_ID(id))
};

exports.add = (user_internal_id, post_id, reaction) => {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.ADD(user_internal_id, post_id, reaction));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.DELETE(id));
}