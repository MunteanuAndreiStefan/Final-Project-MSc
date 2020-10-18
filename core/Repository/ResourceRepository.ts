import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.GET_BY_ID(id))
}

export async function getAllByPostId(post_id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.GET_BY_POST_ID(post_id))
}

export async function add(post_id: number, resource: any, type: any): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.ADD(post_id, resource, type));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.RESOURCE.DELETE(id));
}
