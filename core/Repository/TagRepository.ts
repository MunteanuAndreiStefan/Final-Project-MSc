import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.GET_BY_ID(id))
}

export async function add(name: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.ADD(name));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.TAG.DELETE(id));
}
