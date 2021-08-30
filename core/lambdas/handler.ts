import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import * as QuestionnaireController from "../Controllers/QuestionnaireController";
import * as DatabaseCreatorService from "../Services/Database/DatabaseCreatorService";
import * as PostService from "../Services/PostService";
import {PostError} from "../Services/PostService";
import * as UserService from "../Services/UserService";
import * as SubscriptionService from "../Services/SubscriptionService";
import * as QuestionnaireService from "../Services/QuestionnaireService";
import * as NotificationsService from "../Services/NotificationsService";
import * as Constants from "../Utils/Constants";

let dbCreationChecked = false;

async function databaseCheckLogic(): Promise<void> {
    if (!dbCreationChecked) {
        await DatabaseCreatorService.createSchemaIfMissing();
        dbCreationChecked = true;
    }
}

export async function hello(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    await databaseCheckLogic();

    console.log(event)
    console.log(QuestionnaireController);

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'data'})
    }
}

export async function getPosts(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.getComputedPostList(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function createPost(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.createPost(params.authorization.email, body)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function getUnapprovedComments(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.getUnapprovedComments(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function approveComment(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let response = await PostService.approveComment(params.authorization.email, params.commentId)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function deleteComment(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let response = await PostService.deleteComment(params.authorization.email, params.commentId)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function getCategories(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.getCategories(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function getTags(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let tags = await PostService.getTags(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(tags)
    }
}

export async function createCategory(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.createCategory(params.authorization.email, body.text)
    return {
        statusCode: 200,
        body: JSON.stringify(posts)
    }
}

export async function getPostsByCategoryId(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let posts = await PostService.getAllByCategoryId(params.authorization.email, params.categoryId)
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
    let response = await PostService.reactionAddHandle(post_id, body, params.authorization.email);
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
    let response = await PostService.commentAddHandle(post_id, body, params.authorization.email);
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

export async function getQuestionnaires(event: APIGatewayProxyEvent, params: any): Promise<object> {
    let questionnaires = await QuestionnaireService.getComputedQuestionnaireList(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(questionnaires)
    }
}
export async function createQuestionnaire(event: APIGatewayProxyEvent, params: any, body: any): Promise<object> {
    let questionnaires = await QuestionnaireService.createQuestionnaire(params.authorization.email, body)
    return {
        statusCode: 200,
        body: JSON.stringify(questionnaires)
    }
}

export async function addUserAnswers(event: APIGatewayProxyEvent, params: any, body: any): Promise<object> {
    let response = await QuestionnaireService.addUserAnswers(params.questionnaireId, body, params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function deleteQuestionnaire(event: APIGatewayProxyEvent, params: any): Promise<object> {
    let response = await QuestionnaireService.deleteQuestionnaire(params.questionnaireId,  params.authorization.email)
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

export async function getCurrentUser(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let user = await UserService.getCurrentUser(params.authorization.email)
    if (user.active) {
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        }
    }
    return {
        statusCode: 404,
        body: JSON.stringify({
            message: "User is not active."
        })
    }
}

export async function changeActiveStatus(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let response = await UserService.changeActiveStatus(params.authorization.email, params.user_internal_id)
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: response
        })
    }
}

export async function getUserActivity(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let response = await UserService.getUserActivity(params.authorization.email, params.user_internal_id)
    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}

export async function getAllUsersInShallowForm(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let users = await UserService.getAllUsersInShallowForm(params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(users)
    }
}

export async function getUserContactInfo(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let user = await UserService.getById(params.userId)
    let userContactInfo = {
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        address: user.address,
        city: user.city
    }
    return {
        statusCode: 200,
        body: JSON.stringify(userContactInfo)
    }
}

export async function changeUserDetails(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    let user = await UserService.changeUserDetails(params.authorization.email, body)
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
}

export async function changeSubscription(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    let subscription_id = params.subscriptionId;
    let user = await UserService.changeSubscription(subscription_id, params.authorization.email)
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
}

export async function addNotificationForUser(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    try {
        let user = await UserService.getCurrentUser(params.authorization.email)
        await NotificationsService.addNotification(body.userId, user.id, body.message, body.type, body.info);
    } catch (err) {
        const typedError = err as NotificationsService.NotificationError

        return {
            statusCode: typedError.status ?? 500,
            body: typedError.error ?? "Something went wrong"
        }
    }

    return {
        statusCode: 201,
        body: '{}'
    }
}

export async function addAdminMessage(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    try {
        let user = await UserService.getCurrentUser(params.authorization.email);
        await NotificationsService.addNotification(-2, user.id, body.message, 'message', params.authorization.email);
    } catch (err) {
        const typedError = err as NotificationsService.NotificationError

        return {
            statusCode: typedError.status ?? 500,
            body: typedError.error ?? "Something went wrong"
        }
    }

    return {
        statusCode: 201,
        body: '{}'
    }
}

export async function addNotificationAlert(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    try {
        await NotificationsService.addAlert(body.message, body.info);
    } catch (err) {
        const typedError = err as NotificationsService.NotificationError

        return {
            statusCode: typedError.status ?? 500,
            body: typedError.error ?? "Something went wrong"
        }
    }

    return {
        statusCode: 201,
        body: '{}'
    }
}

export async function getNotificationForUser(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    try {
        const user = await UserService.getCurrentUser(params.authorization.email)
        const notifications = await NotificationsService.getForUserWithId(user.user_internal_id);

        return {
            statusCode: 200,
            body: JSON.stringify(notifications)
        }
    } catch (err) {
        const typedError = err as NotificationsService.NotificationError

        return {
            statusCode: typedError.status ?? 500,
            body: typedError.error ?? "Something went wrong"
        }
    }
}

export async function getMessagesForUser(event: APIGatewayProxyEvent, params: any): Promise<APIGatewayProxyResult> {
    try {
        const user = await UserService.getCurrentUser(params.authorization.email)
        const messages = await NotificationsService.getMessagesForUserWithId(user.user_internal_id);

        return {
            statusCode: 200,
            body: JSON.stringify(messages)
        }
    } catch (err) {
        const typedError = err as NotificationsService.NotificationError
        if (typedError.status == 404) {
            return {
                statusCode: 200,
                body: JSON.stringify([])
            }
        }
        return {
            statusCode: typedError.status ?? 500,
            body: typedError.error ?? "Something went wrong"
        }
    }
}

export async function createDB(event: APIGatewayProxyEvent, params: any, body: any): Promise<APIGatewayProxyResult> {
    try {
        await DatabaseCreatorService.createSchemaIfMissing()
    } catch (err) {
        return {
            statusCode: 500,
            body: `Error creating db ${err.toString()}, ${JSON.stringify(err)}`
        }
    }

    return {
        statusCode: 201,
        body: ''
    }
}
