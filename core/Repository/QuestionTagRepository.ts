import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.GET_BY_ID(id))
}

export async function add(tag_id: string, question_id: string, interest: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.ADD(tag_id, question_id, interest));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION_TAG.DELETE(id));
}
