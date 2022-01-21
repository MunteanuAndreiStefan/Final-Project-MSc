import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants'
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.GET_BY_ID(id))
}

export async function getAllByQuestionId(questionId: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.GET_ALL_BY_QUESTION_ID(questionId))
}

export async function add(question_id: number, priority: number, scale_value: number, text: string, image_url: string): Promise<QueryResult> {
    const query = Constants.QUERIES.ANSWER.ADD(question_id, priority, scale_value, text, image_url)
    return DatabaseService.executeQuery(query);
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.DELETE(id));
}
