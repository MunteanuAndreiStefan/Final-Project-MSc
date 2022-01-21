import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function add(text: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.CATEGORY.ADD(text));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.CATEGORY.DELETE(id));
}

export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.CATEGORY.GET_ALL())
}
