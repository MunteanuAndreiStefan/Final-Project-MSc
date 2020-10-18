import * as Constants from '../Utils/Constants';
import * as NotificationsRepository from "../Repository/NotificationsRepository";

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
    const response = await NotificationsRepository.getForUserId(userInternalId);

    if (response.rowCount === 0) {
        throw new NotificationError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.NOTIFICATION);
    }

    return response.rows
}

export async function addNotification(userInternalId: number, message: string, type: string, info: string) {
    await NotificationsRepository.addNotificationForUserWithId(userInternalId, message, type, info)
}

export async function addAlert(message: string, info: string) {
    await NotificationsRepository.addAlertForAll(message, info)
}
