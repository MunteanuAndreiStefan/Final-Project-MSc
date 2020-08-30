import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants'
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.GET_BY_ID(id))
}

export async function add(question_id: string, answer_type: string, priority: string,
                          scale_min: number, scale_max: number, text: string, image_url: string): Promise<QueryResult> {
    const query = Constants.QUERIES.ANSWER.ADD(question_id, answer_type, priority, scale_min, scale_max, text, image_url)
    return DatabaseService.executeQuery(query);
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.ANSWER.DELETE(id));
}
