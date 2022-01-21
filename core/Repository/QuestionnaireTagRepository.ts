import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.GET_BY_ID(id))
}

export async function add(tag_id: number, questionnaire_id: number, interest: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.ADD(tag_id, questionnaire_id, interest));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE_TAG.DELETE(id));
}
