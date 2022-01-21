import * as SubscriptionRepository from '../Repository/SubscriptionRepository';
import * as Constants from '../Utils/Constants';
import {QueryResult} from "pg";
import * as DatabaseService from "./Database/DatabaseService";

export class SubscriptionError extends Error {
    readonly status
    readonly error

    constructor(status: number, error: string) {
        super(error);
        this.status = status
        this.error = error
    }
}

export async function getAll() {
    const response = await SubscriptionRepository.getAll();
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new SubscriptionError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows
}

export async function getById(id: number) {
    const response = await SubscriptionRepository.getById(id);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new SubscriptionError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows[0]
}

export async function add(name: string, description: string, post_limit: number, questionnaire_limit: number, comments_active: boolean,
                          reactions_active: boolean, support: string, price: number): Promise<QueryResult> {
    const response = await SubscriptionRepository.add(name, description, post_limit, questionnaire_limit, comments_active, reactions_active, support, price);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new SubscriptionError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return response.rows[0]
}

export async function remove(id: number) {
    const response = await SubscriptionRepository.remove(id);

    if (response.rowCount === 0) {
        throw new SubscriptionError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
