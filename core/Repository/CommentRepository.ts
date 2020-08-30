import * as DatabaseService from '../Services/Database/DatabaseService'
import * as Constants from '../Utils/Constants';
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.GET_BY_ID(id))
}

export async function add(user_internal_id: string, post_id: string, text: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.ADD(user_internal_id, post_id, text));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.COMMENT.DELETE(id));
}
