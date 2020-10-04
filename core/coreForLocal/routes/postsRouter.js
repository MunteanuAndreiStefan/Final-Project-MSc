const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/', utils.createRouteWithLambda(MainLambda.getPosts));

router.get('/categories', utils.createRouteWithLambda(MainLambda.getCategories));
router.get('/categoryId/:categoryId', utils.createRouteWithLambda(MainLambda.getPostsByCategoryId));

router.put('/id/:postId/react', utils.createRouteWithLambda(MainLambda.reactionAddHandle));
router.delete('/id/:postId/react/:reactionId', utils.createRouteWithLambda(MainLambda.reactionDeleteHandle));

router.put('/id/:postId/comment', utils.createRouteWithLambda(MainLambda.commentAddHandle));
router.delete('/id/:postId/comment/:commentId', utils.createRouteWithLambda(MainLambda.commentDeleteHandle));

module.exports = router;
