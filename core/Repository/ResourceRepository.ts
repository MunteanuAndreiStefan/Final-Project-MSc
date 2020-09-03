import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.GET_BY_ID(id))
}

export async function add(post_id: number, url: string, type: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.ADD(post_id, url, type));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.DELETE(id));
}