const express = require('express');
const router = express.Router();
const utils = require('../utils')
const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/', utils.createRouteWithLambda(MainLambda.getQuestionnaires));

router.post('/id/:questionnaireId', utils.createRouteWithLambda(MainLambda.addUserAnswers));

module.exports = router;
