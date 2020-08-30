import {QueryResult} from "pg";
import * as DatabaseService from '../Services/Database/DatabaseService';
import * as Constants from '../Utils/Constants';

export async function getById(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE_TAG.GET_BY_ID(id))
}

export async function add(tag_id: string, linkage_id: string, interest: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE_TAG.ADD(tag_id, linkage_id, interest));
}

export async function remove(id: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.LINKAGE_TAG.DELETE(id));
}
