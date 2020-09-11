const express = require('express');
const router = express.Router();

const bundle = require('../../dist/dist/bundle');
const QuestionnaireController = bundle.Controllers.QuestionnaireController

router.get('/questionnaires/id/:id', function (req, res) {
    QuestionnaireController.getById({queryStringParameters: {id: req.params.id}})
        .then(message => respond(res, message))
        .catch(err => {
            console.error(err)
            if (err.status) {
                res.status(err.status).end(err.error);
            } else {
                errors(res, err)
            }

        })
});

router.post('/questionnaires', function (req, res) {
    QuestionnaireController.add(req)
        .then(message => respond(res, message))
        .catch(err => errors(res, err))
});

router.delete('/questionnaires/id/:id', function (req, res) {
    QuestionnaireController.remove(req)
        .then(message => respond(res, message))
        .catch(err => errors(res, err))
});

let respond = (res, message) => {
  if (message === undefined || message === null) {
    res.status(404).send({error: "Resource not found."});
  } else if(message.status !== undefined) {
    res.status(message.status).send(message);
  } else {
    res.status(200).send(message);
  }
}

let errors = (res, errors) => {
  res.status(500).send(errors);
}

module.exports = router;
