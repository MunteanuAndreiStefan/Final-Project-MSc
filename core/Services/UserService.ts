import * as UserRepository from '../Repository/UserRepository';
import * as Constants from '../Utils/Constants';
import {QueryResult} from "pg";
import * as DatabaseService from "./Database/DatabaseService";
import {PostError} from "./PostService";

export class UserError extends Error {
    readonly status
    readonly error

    constructor(status: number, error: string) {
        super(error);
        this.status = status
        this.error = error
    }
}

export async function getById(id: number) {
    const response = await UserRepository.getById(id);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows[0]
}


export async function getUserInternalIdBy(email: string) {
    const currentUserQueryResponse = await UserRepository.getByEmail(email)

    let rowCount = currentUserQueryResponse.rowCount;
    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return currentUserQueryResponse.rows[0].user_internal_id;
}

export async function getCurrentUser(email: string) {
    const response = await UserRepository.getByEmail(email);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return response.rows[0]
}

async function doAddUserDetails(email: string, body: any) {
    const response = await UserRepository.add(1, 'USER', email, email, body.first_name,
                        body.last_name, 'address', body.city, body.country, body.zip_code, 'LIGHT');
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return getCurrentUser(email);
}

async function doEditUserDetails(email: string, body: any) {
    console.log('doEditUserDetails', email, body);
    const response = await UserRepository.editDetails(email, body.email, body.first_name, body.last_name, body.city, body.country, body.zip_code);
    let rowCount = response.rowCount;

    console.log('doEditUserDetails', rowCount);

    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return getCurrentUser(body.email);
}

export async function changeUserDetails(email: string, body: any) {
    console.log('changeUserDetails', email, body);
    if (body.email === undefined || body.email === null) {
        return await doAddUserDetails(email, body);
    }
    return await doEditUserDetails(email, body);
}

export async function changeSubscription(subscription_id: number, user_email: string) {
    const response = await UserRepository.changeSubscription(subscription_id, user_email);
    let rowCount = response.rowCount;

    if (rowCount === undefined || rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.SUBSCRIPTION);
    }

    return Constants.MESSAGES.SUCCESS.SUBSCRIPTION_UPDATED;
}

export async function add(subscription_id: number, type: string, email: string, username: string,
                          first_name: string, last_name: string, address: string, city: string,
                          country: string, zip_code: string, theme: string): Promise<QueryResult> {
    const response = await UserRepository.add(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.USER);
    }

    return response.rows[0]
}

export async function remove(id: number) {
    const response = await UserRepository.remove(id);

    if (response.rowCount === 0) {
        throw new UserError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
