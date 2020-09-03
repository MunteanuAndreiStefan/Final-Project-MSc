import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.GET_BY_ID(id))
}

export async function add(subscription_id: number, type: string, email: string, username: string,
                          first_name: string, last_name: string, address: string, city: string,
                          country: string, zip_code: string, theme: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.ADD(subscription_id, type, email, username, first_name, last_name, address, city, country, zip_code, theme));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER.DELETE(id));
}
