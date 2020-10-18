const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/current', utils.createRouteWithLambda(MainLambda.getCurrentUser));
router.get('/activity/user_internal_id/:user_internal_id', utils.createRouteWithLambda(MainLambda.getUserActivity));
router.get('/shallowAll', utils.createRouteWithLambda(MainLambda.getAllUsersInShallowForm));
router.get('/contactInfo/:userId', utils.createRouteWithLambda(MainLambda.getUserContactInfo));
router.put('/change/details', utils.createRouteWithLambda(MainLambda.changeUserDetails));
router.put('/change/subscription/:subscriptionId', utils.createRouteWithLambda(MainLambda.changeSubscription));
router.put('/change/activeStatus/user_internal_id/:user_internal_id', utils.createRouteWithLambda(MainLambda.changeActiveStatus));


module.exports = router;
