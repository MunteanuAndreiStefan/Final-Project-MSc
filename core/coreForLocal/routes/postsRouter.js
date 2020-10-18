const express = require('express');
const router = express.Router();
const utils = require('../utils');

const bundle = require('../../dist/dist/bundle');
const MainLambda = bundle.Lambdas.MainLambda

router.get('/', utils.createRouteWithLambda(MainLambda.getPosts));
router.post('/', utils.createRouteWithLambda(MainLambda.createPost));

router.get('/tags', utils.createRouteWithLambda(MainLambda.getTags));

router.get('/categories', utils.createRouteWithLambda(MainLambda.getCategories));
router.post('/categories', utils.createRouteWithLambda(MainLambda.createCategory));
router.get('/categoryId/:categoryId', utils.createRouteWithLambda(MainLambda.getPostsByCategoryId));

router.put('/id/:postId/react', utils.createRouteWithLambda(MainLambda.reactionAddHandle));
router.delete('/id/:postId/react/:reactionId', utils.createRouteWithLambda(MainLambda.reactionDeleteHandle));

router.get('/comments/unapproved', utils.createRouteWithLambda(MainLambda.getUnapprovedComments));
router.put('/comments/:commentId/approve', utils.createRouteWithLambda(MainLambda.approveComment));
router.delete('/comments/:commentId', utils.createRouteWithLambda(MainLambda.deleteComment));
router.put('/id/:postId/comment', utils.createRouteWithLambda(MainLambda.commentAddHandle));
router.delete('/id/:postId/comment/:commentId', utils.createRouteWithLambda(MainLambda.commentDeleteHandle));


module.exports = router;
