const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.post('/', utils.createRouteWithLambda(MainLambda.createDB));

module.exports = router;
