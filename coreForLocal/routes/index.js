var express = require('express');
var router = express.Router();

const PostController = require('../../core/Controllers/PostController')
const QuestionnaireController = require('../../core/Controllers/QuestionnaireController')
const DatabaseCreatorService = require('../../core/Services/DatabaseCreatorService')

router.get('/', function(req, res, next) {
  QuestionnaireController.handle(req)
      .then(message => respond(res, message))
      .catch(err => errors(res, err))
});

let respond = (res, message) => {
  res.send({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({message: message})
  });
}

let errors = (res, errors) => {
  res.send({
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({errors: errors})
  });
}

module.exports = router;
