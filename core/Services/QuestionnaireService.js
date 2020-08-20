const QuestionnaireRepository = require('../Repository/QuestionnaireRepository')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return new Promise(function (resolve, reject) {
        QuestionnaireRepository.getById(id)
            .then(response => {
                let rowCount = response.rowCount;
                if (rowCount === 0) {
                    resolve({
                        status: Constants.MESSAGES.NOT_FOUND.status,
                        error: Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE
                    })
                }
                resolve(response.rows[0])
            })
            .catch(error => reject(error))
    });
};

exports.add = (priority, name) => {
    return new Promise(function (resolve, reject) {
        QuestionnaireRepository.add(priority, name)
            .then(response => resolve(response.rows[0]))
            .catch(error => reject(error))
    });
};

exports.remove = (id) => {
    return new Promise(function (resolve, reject) {
        QuestionnaireRepository.remove(id)
            .then(response => {
                let rowCount = response.rowCount;
                if (rowCount === 0) {
                    resolve({
                        status: Constants.MESSAGES.NOT_FOUND.status,
                        error: Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE
                    })
                }
                resolve(response.rows)
            })
            .catch(error => reject(error))
    });
}