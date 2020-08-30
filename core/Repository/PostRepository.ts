import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_BY_ID(id))
}

export async function add(text: string, priority: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.ADD(text, priority));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.DELETE(id));
}
