import * as DatabaseService from '../Services/Database/DatabaseService'
import * as Constants from '../Utils/Constants'
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.GET_BY_ID(id))
}

export async function add(first_question_id: number, second_question_id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.ADD(first_question_id, second_question_id));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE.DELETE(id));
}
