import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants'
import {QueryResult} from "pg";

export async function getForUserId(userInternalId: number, isAdmin: boolean): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.GET_FOR_USER_ID(userInternalId, isAdmin));
}

export async function addNotificationForUserWithId(userInternalId: number, message: string, type: string, info: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.ADD_FOR_USER(userInternalId, message, type, info));
}

export async function addAlertForAll(message: string, info: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.ADD_ALERT_FOR_ALL(message, info));
}

export async function addNotificationForReaction(postId: number, reactorName: string, type: string, info: string | null) {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.ADD_FOR_POST_ID(postId, reactorName, type, info));
}
