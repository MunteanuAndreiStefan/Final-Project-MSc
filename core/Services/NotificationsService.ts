import * as Constants from '../Utils/Constants';
import * as NotificationsRepository from "../Repository/NotificationsRepository";
import * as UsersService from '../Services/UserService';

export class NotificationError extends Error {
    readonly status
    readonly error

    constructor(status: number, error: string) {
        super(error);
        this.status = status
        this.error = error
    }
}

export async function getForUserWithId(userInternalId: number) {
    const isAdmin = await UsersService.currentUserIdIsAdmin(userInternalId)
    const response = await NotificationsRepository.getForUserId(userInternalId, isAdmin);

    if (response.rowCount === 0) {
        throw new NotificationError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    return response.rows
}

export async function getMessagesForUserWithId(userInternalId: number) {
    const isAdmin = await UsersService.currentUserIdIsAdmin(userInternalId);
    const response = await NotificationsRepository.getMessagesForUserId(userInternalId, isAdmin);

    if (response.rowCount === 0) {
        throw new NotificationError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    return response.rows
}

export async function addNotification(userInternalId: number, sender: number, message: string, type: string, info: string) {
    await NotificationsRepository.addNotificationForUserWithId(userInternalId, sender, message, type, info)
}

export async function addAlert(message: string, info: string) {
    await NotificationsRepository.addAlertForAll(message, info)
}

export async function addNotificationForReaction(postId: number, reactorName: string, type: string, info: string | null) {
    await NotificationsRepository.addNotificationForReaction(postId, reactorName, type, info)
}
