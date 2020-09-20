const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/current', utils.createRouteWithLambda(MainLambda.getCurrentUser));
router.put('/change/subscription/:subscriptionId', utils.createRouteWithLambda(MainLambda.changeSubscription));

module.exports = router;
