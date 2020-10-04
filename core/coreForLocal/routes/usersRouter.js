const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/current', utils.createRouteWithLambda(MainLambda.getCurrentUser));
router.get('/contactInfo/:userId', utils.createRouteWithLambda(MainLambda.getUserContactInfo));
router.put('/change/details', utils.createRouteWithLambda(MainLambda.changeUserDetails));
router.put('/change/subscription/:subscriptionId', utils.createRouteWithLambda(MainLambda.changeSubscription));

module.exports = router;
