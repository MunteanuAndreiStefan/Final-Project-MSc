import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.GET_ALL())
}

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.GET_BY_ID(id))
}

export async function add(name: string, description: string, post_limit: number, questionnaire_limit: number, comments_active: boolean,
                          reactions_active: boolean, support: string, price: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.ADD(name, description, post_limit,
        questionnaire_limit, comments_active, reactions_active, support, price));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.SUBSCRIPTION.DELETE(id));
}
