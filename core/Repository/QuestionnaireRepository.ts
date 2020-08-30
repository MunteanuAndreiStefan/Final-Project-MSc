import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants';
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_BY_ID(id))
}

export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_ALL())
}

export async function add(priority: number, name: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.ADD(priority, name));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.DELETE(id));
}
