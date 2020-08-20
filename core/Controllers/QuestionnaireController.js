const QuestionnaireService = require('../Services/QuestionnaireService')

exports.getById = (request) => {
    return QuestionnaireService.getById(request.params.id);
}

exports.add = (request) => {
    let body = request.body;
    return QuestionnaireService.add(body.priority, body.name);
}

exports.remove = (request) => {
    return QuestionnaireService.remove(request.params.id);
}