const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.post('/addAlert', utils.createRouteWithLambda(MainLambda.addNotificationAlert));
router.post('/addNotification', utils.createRouteWithLambda(MainLambda.addNotificationForUser));
router.post('/addMessageForAdmin', utils.createRouteWithLambda(MainLambda.addAdminMessage));
router.post('/addMessageForUserAsAdmin', utils.createRouteWithLambda(MainLambda.addMessageForUserAsAdmin));
router.get('/', utils.createRouteWithLambda(MainLambda.getNotificationForUser));
router.get('/messages', utils.createRouteWithLambda(MainLambda.getMessagesForUser));

module.exports = router;
