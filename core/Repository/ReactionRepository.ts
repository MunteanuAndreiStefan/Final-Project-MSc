import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.GET_BY_ID(id))
}

export async function add(user_internal_id: number, post_id: number, reaction: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.ADD(user_internal_id, post_id, reaction));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.REACTION.DELETE(id));
}