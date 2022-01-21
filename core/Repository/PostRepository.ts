import * as DatabaseService from "../Services/Database/DatabaseService";
import * as Constants from "../Utils/Constants";
import {QueryResult} from "pg";

export async function getById(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_BY_ID(id))
}

export async function add(user_internal_id: number, post_category_id: number, text: string, priority: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.ADD(user_internal_id, post_category_id, text, priority));
}

export async function remove(id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.DELETE(id));
}

export async function getPostsBySubscriptionAndOrdered(email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_ALL_BY_SUBSCRIPTION_AND_ORDERED(email));
}



export async function getRecommendedPosts(email: string): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_RECOMMENDED(email));
}

export async function getBulkPosts(email: string, recommendedPostsIds: number[]): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_BULK(email, recommendedPostsIds));
}



export async function getAll(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_ALL())
}

export async function getAllByCategoryId(category_id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_ALL_BY_CATEGORY_ID(category_id))
}

export async function count(): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.COUNT())
}

export async function getActivityOf(user_internal_id: number): Promise<QueryResult> {
    return DatabaseService.executeQuery(Constants.QUERIES.POST.GET_ACTIVITY_OF(user_internal_id))
}