import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.GET_BY_ID(id))
}

export async function add(questionnaire_id: number, question_type: string, multiple_answers: boolean, title: string, description: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.ADD(questionnaire_id, question_type, multiple_answers, title, description));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTION.DELETE(id));
}
