const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.GET_BY_ID(id))
};

exports.add = (question_id, answer_type, priority, scale_min, scale_max, text, image_url) => {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.ADD(question_id, answer_type, priority, scale_min, scale_max, text, image_url));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.DELETE(id));
}