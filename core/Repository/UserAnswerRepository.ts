import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.GET_BY_ID(id))
}

export async function add(user_internal_id: string, question_id: string, answer_id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.ADD(user_internal_id, question_id, answer_id));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.USER_ANSWER.DELETE(id));
}
