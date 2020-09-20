import * as PostRepository from '../Repository/PostRepository';
import * as ResourceRepository from '../Repository/ResourceRepository';
import * as CommentRepository from '../Repository/CommentRepository';
import * as ReactionRepository from '../Repository/ReactionRepository';
import * as UserRepository from '../Repository/UserRepository';
import * as Constants from '../Utils/Constants';
import {Post, PostComment, PostReaction, PostResource} from "../Models/Post";
import {CommentDTO, ReactionDTO} from "../lambdas/DTOs/ModelDTOs";
import {getUserInternalIdBy} from "./UserService";

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

    let response: Post[] = [];
    for (const post of posts.rows) {
        let postId = post.id;
        let resources : PostResource[] = (await ResourceRepository.getAllByPostId(postId)).rows;
        let comments : PostComment[] = (await CommentRepository.getAllByPostId(postId)).rows;
        let reactions : PostReaction[] = (await ReactionRepository.getAllByPostId(postId)).rows;
        response.push({
            ...post,
            resources: resources,
            comments: comments,
            reactions: reactions
        })
    }

    let userIds : number[] = getUniqueUserInternalIdsFromPosts(response)
    let shallowUsers = (await UserRepository.getShallowUsersByIds(userIds)).rows
        .map((user) => {
            return {
                ...user,
                user_internal_id: user.user_internal_id.toString()
            }
        });

    return {
        posts: response,
        users: shallowUsers
    };
}

export async function reactionAddHandle(postId: number, body: ReactionDTO, userEmail: string) {
    let user_internal_id = await getUserInternalIdBy(userEmail);
    const response = await ReactionRepository.add(user_internal_id, body.post_id, body.reaction);

    if (response.code && response.code == 23505) {
        const reactionsByPost = await ReactionRepository.getAllByPostId(body.post_id);
        let reaction = reactionsByPost.rows.find((row) => row.user_internal_id == user_internal_id);
        return {
            reactionId: reaction.id
        }
    }
    return {
        reactionId: response.rows[0].id
    };
}

export async function reactionDeleteHandle(post_id: number, reactionId: number) {
    const response = await ReactionRepository.remove(reactionId);
    return {
        deletedReactionsCount: response.rowCount
    };
}

export async function commentAddHandle(postId: number, body: CommentDTO, userEmail: string) {
    let user_internal_id = await getUserInternalIdBy(userEmail)
    const response = await CommentRepository.add(user_internal_id, body.post_id, body.comment);

    if (response.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.COMMENT);
    }

    return {
        commentId: response.rows[0].id
    };
}

export async function commentDeleteHandle(post_id: number, commentId: number) {
    const response = await CommentRepository.remove(commentId);
    return {
        deletedCommentsCount: response.rowCount
    };
}

function getUniqueUserInternalIdsFromPosts(posts: Post[]) {
    let ids: any[] = [];
    posts.forEach((post) => {
       ids.push(post.user_internal_id);
       post.comments.map((comment) => comment.user_internal_id).forEach((id) => ids.push(id))
       post.reactions.map((reaction) => reaction.user_internal_id).forEach((id) => ids.push(id))
    });
    return Array.from(new Set(ids));
}

export async function add(user_internal_id: number, text: string, priority: number) {
    let response = await PostRepository.add(user_internal_id, text, priority);
    return response.rows[0]
}

export async function remove(id: number) {
    const response = await PostRepository.remove(id);

    if (response.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
