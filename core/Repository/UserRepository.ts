import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_BY_ID(id))
}

export async function getByEmail(email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_BY_EMAIL(email))
}

export async function changeSubscription(subscription_id: number, user_email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.CHANGE_SUBSCRIPTION(subscription_id, user_email))
}

export async function add(subscription_id: number, type: string, email: string, username: string,
                          first_name: string, last_name: string, address: string, city: string,
                          country: string, zip_code: string, theme: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.ADD(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme));
}

export async function editDetails(email: string, new_email: string, first_name: string, last_name: string, city: string, country: string, zip_code: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.EDIT_DETAILS(email, new_email, first_name, last_name, city, country, zip_code));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.DELETE(id));
}

export async function getShallowUsersByIds(ids: number[]): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_SHALLOW_USERS_BY_IDS(ids))
}

export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_ALL())
}