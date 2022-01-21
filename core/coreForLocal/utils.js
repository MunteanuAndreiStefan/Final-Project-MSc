global.atob = require("atob");

function respond(res, message) {
    if (message === undefined || message === null) {
        res.status(404).json({error: "Resource not  found."});
    } else  {
        if (message.hasOwnProperty("statusCode") && message.hasOwnProperty("body")) {
            let body = message.body

            try {
                body = JSON.parse(message.body);
                res.status(message.statusCode).json(body);
                return
            } catch (err) {
            }

            res.status(message.statusCode).send(body);
        } else {
            res.status(404).json({error: "Resource not found."});
        }
    }
}

function errors(res, errors) {
    res.status(500).send(errors);
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        console.log(e)
        return null;
    }
};

module.exports = {
    respond: respond,
    errors: errors,
    createRouteWithLambda: function (lambda) {
        return function (req, res) {
            let params = req.params;
            params.authorization = parseJwt(req.headers.authorization);

            lambda(req.apiGateway.event, params, JSON.parse(JSON.stringify(req.body)))
                .then(message => respond(res, message))
                .catch(err => errors(res, err));
        }
    }
}
