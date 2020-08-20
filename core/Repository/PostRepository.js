const DatabaseService = require('../Services/Database/DatabaseService')
const Constants = require('../Utils/Constants')

exports.getById = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_BY_ID(id))
};

exports.add = (text, priority) => {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.ADD(text, priority));
}

exports.remove = (id) => {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.DELETE(id));
}