import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST_TAG.GET_BY_ID(id))
}

export async function add(tag_id: number, post_id: number, interest: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST_TAG.ADD(tag_id, post_id, interest));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST_TAG.DELETE(id));
}
