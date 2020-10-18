import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants'
import {QueryResult} from "pg";

export async function getForUserId(userInternalId: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.GET_FOR_USER_ID(userInternalId));
}

export async function addNotificationForUserWithId(userInternalId: number, message: string, type: string, info: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.ADD_FOR_USER(userInternalId, message, type, info));
}

export async function addAlertForAll(message: string, info: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.NOTIFICATION.ADD_ALERT_FOR_ALL(message, info));
}
