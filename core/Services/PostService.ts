import * as PostRepository from '../Repository/PostRepository';
import * as ResourceRepository from '../Repository/ResourceRepository';
import * as CommentRepository from '../Repository/CommentRepository';
import * as ReactionRepository from '../Repository/ReactionRepository';
import * as Constants from '../Utils/Constants';

export class PostError extends Error {
    readonly status
    readonly error

    constructor(status: number, error: string) {
        super(error);
        this.status = status
        this.error = error
    }
}

export async function getById(id: number) {
    const response = await PostRepository.getById(id);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows[0]
}

export async function getComputedPostList(userEmail: string) {
    const posts = await PostRepository.getPostsBySubscriptionAndOrdered(userEmail);
    let rowCount = posts.rowCount;

    if (rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.POST);
    }

    let response = [];
    for (const post of posts.rows) {
        let postId = post.id;
        let resources = await ResourceRepository.getAllByPostId(postId);
        let comments = await CommentRepository.getAllByPostId(postId);
        let reactions = await ReactionRepository.getAllByPostId(postId);
        response.push({
            ...post,
            resources: resources.rows,
            comments: comments.rows,
            reactions: reactions.rows
        })
    }
    return response;
}

export async function add(user_internal_id: number, text: string, priority: number) {
    let response = await PostRepository.add(user_internal_id, text, name);
    return response.rows[0]
}

export async function remove(id: number) {
    const response = await PostRepository.remove(id);

    if (response.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
