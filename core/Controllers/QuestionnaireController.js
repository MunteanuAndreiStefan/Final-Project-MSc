const QuestionnaireRepository = require('../Repository/QuestionnaireRepository')

exports.handle = (request) => {
    return QuestionnaireRepository.getById(1);
}
