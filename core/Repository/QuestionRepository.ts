import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.GET_BY_ID(id))
}

export async function add(questionnaire_id: string, title: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.ADD(questionnaire_id, title));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.DELETE(id));
}
