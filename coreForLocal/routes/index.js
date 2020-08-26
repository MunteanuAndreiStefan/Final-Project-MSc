var express = require('express');
var router = express.Router();

const DatabaseCreatorService = require('../../core/Services/Database/DatabaseCreatorService')

const QuestionnaireController = require('../../core/Controllers/QuestionnaireController')

router.get('/questionnaires/id/:id', function(req, res, next) {
  QuestionnaireController.getById(req)
      .then(message => respond(res, message))
      .catch(err => errors(res, err))
});

router.post('/questionnaires', function(req, res, next) {
  QuestionnaireController.add(req)
      .then(message => respond(res, message))
      .catch(err => errors(res, err))
});

router.delete('/questionnaires/id/:id', function(req, res, next) {
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
