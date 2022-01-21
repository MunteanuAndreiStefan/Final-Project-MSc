import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants';
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_BY_ID(id))
}

export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_ALL())
}

export async function getComputedQuestionnaireList(email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_ALL_QUESTIONNAIRES_BY_USER_AND_ORDERED(email))
}

export async function getAnsweredQuestionnaireList(email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.GET_ANSWERED_QUESTIONNAIRE_LIST(email))
}

export async function add(priority: number, title: string, description: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.ADD(priority, title, description));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.QUESTIONNAIRE.DELETE(id));
}
