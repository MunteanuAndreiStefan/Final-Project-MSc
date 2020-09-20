function respond(res, message) {
    console.log('Message', JSON.stringify(message));
    if (message === undefined || message === null) {
        res.status(404).json({error: "Resource not  found."});
    } else  {
        if (message.statusCode && message.body) {
            res.status(message.statusCode).json(JSON.parse(message.body));
        } else {
            res.status(404).json({error: "Resource not found."});
        }
    }
}

function errors(res, errors) {
    res.status(500).send(errors);
}

module.exports = {
    respond: respond,
    errors: errors,
    createRouteWithLambda: function (lambda) {
        return function (req, res) {
            lambda(req.apiGateway.event, req.params, req.body)
                .then(message => respond(res, message))
                .catch(err => errors(res, err));
        }
    }
}
