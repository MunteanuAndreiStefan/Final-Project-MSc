const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.post('/addAlert', utils.createRouteWithLambda(MainLambda.addNotificationAlert));

router.post('/addNotification', utils.createRouteWithLambda(MainLambda.addNotificationForUser));
router.get('/:userId', utils.createRouteWithLambda(MainLambda.getNotificationForUser));

module.exports = router;
