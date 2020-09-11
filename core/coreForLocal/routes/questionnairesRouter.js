const express = require('express');
const router = express.Router();
const cors = require('cors');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.use(cors());

router.get('/', function (req, res) {
    MainLambda.hello(req.apiGateway.event)
        .then(message => respond(res, message))
        .catch(err => errors(res, err));
});

let respond = (res, message) => {
    if (message === undefined || message === null) {
        res.status(404).send({error: "Resource not  found."});
    } else if (message.status !== undefined) {
        res.status(message.status).send(message);
    } else {
        res.status(200).send(message);
    }
}

let errors = (res, errors) => {
    res.status(500).send(errors);
}

module.exports = router;
