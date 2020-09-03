import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.GET_BY_ID(id))
}

export async function add(name: string, description: string, post_limit: number, price: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.ADD(name, description, post_limit, price));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.DELETE(id));
}
