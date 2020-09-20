import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import * as QuestionnaireController from "../Controllers/QuestionnaireController";
import * as DatabaseCreatorService from "../Services/Database/DatabaseCreatorService";
import * as PostService from "../Services/PostService";
import * as UserService from "../Services/UserService";
import * as SubscriptionService from "../Services/SubscriptionService";
import * as QuestionnaireService from "../Services/QuestionnaireService";
import * as Constants from "../Utils/Constants";
import {PostError} from "../Services/PostService";

let dbCreationChecked = false;
let global_email_To_Be_Removed = 'marin.andrei@domain.com'
async function databaseCheckLogic(): Promise<void> {
    if (!dbCreationChecked) {
        await DatabaseCreatorService.createSchemaIfMissing();
        dbCreationChecked = true;
    }
}

export async function hello(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    console.log("hello handler")
    await databaseCheckLogic();

    console.log(event)
    console.log(QuestionnaireController);

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'data'})
    }
}

export async function getPosts(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    let posts = await PostService.getComputedPostList(global_email_To_Be_Removed)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function reactionAddHandle(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    let post_id = params.postId;
    if (post_id != body.post_id) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.POST);
    }
    let response = await PostService.reactionAddHandle(post_id, body, global_email_To_Be_Removed);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function reactionDeleteHandle(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let post_id = params.postId;
    let reaction_id = params.reactionId;
    let response = await PostService.reactionDeleteHandle(post_id, reaction_id);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function commentAddHandle(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    let post_id = params.postId;
    if (post_id != body.post_id) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.POST);
    }
    let response = await PostService.commentAddHandle(post_id, body, global_email_To_Be_Removed);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function commentDeleteHandle(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let post_id = params.postId;
    let comment_id = params.commentId;
    let response = await PostService.commentDeleteHandle(post_id, comment_id);
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function getQuestionnaires(event: APIGatewayProxyEvent): Promise<object> {
    let questionnaires = await QuestionnaireService.getComputedQuestionnaireList(global_email_To_Be_Removed)
    return {
        statusCode: 200,
        body: JSON.stringify(questionnaires)
    }
}

export async function addUserAnswers(event: APIGatewayProxyEvent, params: any, body: any): Promise<object> {
    let response = await QuestionnaireService.addUserAnswers(params.questionnaireId, body, global_email_To_Be_Removed)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function getSubscriptions(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    let subscriptions = await SubscriptionService.getAll()
    return {
        statusCode: 200,
        body: JSON.stringify(subscriptions)
    }
}

export async function getCurrentUser(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    let user = await UserService.getCurrentUser(global_email_To_Be_Removed)
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
}
export async function changeSubscription(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let subscription_id = params.subscriptionId;
    let user = await UserService.changeSubscription(subscription_id, global_email_To_Be_Removed)
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
}
