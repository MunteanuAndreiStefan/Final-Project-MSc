const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.post('/addAlert', utils.createRouteWithLambda(MainLambda.addNotificationAlert));
router.post('/addNotification', utils.createRouteWithLambda(MainLambda.addNotificationForUser));
router.post('/addMessage', utils.createRouteWithLambda(MainLambda.addAdminMessage));
router.get('/', utils.createRouteWithLambda(MainLambda.getNotificationForUser));
router.get('/messages', utils.createRouteWithLambda(MainLambda.getMessagesForUser));

module.exports = router;
