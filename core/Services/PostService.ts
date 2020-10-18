import * as PostRepository from '../Repository/PostRepository';
import * as PostTagRepository from '../Repository/PostTagRepository';
import * as TagRepository from '../Repository/TagRepository';
import * as CategoryRepository from '../Repository/CategoryRepository';
import * as ResourceRepository from '../Repository/ResourceRepository';
import * as CommentRepository from '../Repository/CommentRepository';
import * as ReactionRepository from '../Repository/ReactionRepository';
import * as UserRepository from '../Repository/UserRepository';
import * as Constants from '../Utils/Constants';
import {Post, PostComment, PostReaction, PostResource} from "../Models/Post";
import {CommentDTO, PostDTO, ReactionDTO} from "../lambdas/DTOs/ModelDTOs";
import {currentUserIsAdmin, getUserInternalIdBy} from "./UserService";

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

export async function getAllByCategoryId(userEmail: string, categoryId: number) {
    const posts = await PostRepository.getPostsBySubscriptionAndOrdered(userEmail);
    let rowCount = posts.rowCount;

    if (rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.POST);
    }

    let validPosts = posts.rows.filter((post: any) => post.post_category_id == categoryId);
    let user_internal_id = await getUserInternalIdBy(userEmail)

    return computePostDetails(validPosts, user_internal_id);
}

export async function getComputedPostList(userEmail: string) {
    const posts = await PostRepository.getPostsBySubscriptionAndOrdered(userEmail);
    let rowCount = posts.rowCount;

    if (rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.POST);
    }

    let user_internal_id = await getUserInternalIdBy(userEmail)
    return computePostDetails(posts.rows, user_internal_id);
}

export async function createPost(userEmail: string, body: PostDTO) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }

    let user_internal_id = await getUserInternalIdBy(userEmail);
    let category_id = body.category_id;
    let text = body.text;
    let priority = body.priority;

    let response = await PostRepository.add(user_internal_id, category_id, text, priority)
    if (response.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.COMMENT);
    }

    let postId = response.rows[0].id;
    let tags = body.tags;

    for (const tag of tags) {
        await PostTagRepository.add(tag.id, postId, tag.interest);
    }

    let innerHTML = body.innerHTML;
    let image = body.image;

    if (innerHTML && !image) {
        await ResourceRepository.add(postId, innerHTML, 'HTML')
    } else if (!innerHTML && image) {
        // SEND image to S3 and put the url into this
        await ResourceRepository.add(postId, 'https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat-looking-up.jpg', 'IMAGE')
    }

    let postToBeReturned = await PostRepository.getById(postId)
    if (postToBeReturned.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.COMMENT);
    }
    return postToBeReturned.rows[0];
}

export async function getUnapprovedComments(userEmail: string) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const comments = (await CommentRepository.getUnapprovedComments()).rows;

    let userIds = Array.from(new Set(comments.map((comment) => comment.user_internal_id)))

    let shallowUsers = (await UserRepository.getShallowUsersByIds(userIds)).rows
        .map((user) => {
            return {
                ...user,
                user_internal_id: user.user_internal_id.toString()
            }
        });

    return {
        users: shallowUsers,
        comments: comments
    };
}

export async function approveComment(userEmail: string, commentId: number) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const response = await CommentRepository.approveComment(commentId);

    return {
        message: response.rowCount > 0 ? "Comment approved successfully" : "Comment couldn't be approved.",
        severity: response.rowCount > 0 ? "success" : "error"
    };
}

export async function deleteComment(userEmail: string, commentId: number) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const response = await CommentRepository.remove(commentId);

    return {
        message: response.rowCount > 0 ? "Comment deleted successfully" : "Comment couldn't be deleted.",
        severity: response.rowCount > 0 ? "success" : "error"
    };
}

async function computePostDetails(posts: any, user_internal_id: number) {
    let response: Post[] = [];
    let postLength = posts.length;
    if (postLength === 0) {
        return {
            posts: [],
            totalPostCount: 0,
            users: []
        };
    }
    for (const post of posts) {
        let postId = post.id;
        let resources: PostResource[] = (await ResourceRepository.getAllByPostId(postId)).rows;
        let comments: PostComment[] = (await CommentRepository.getAllByPostId(postId)).rows;
        let reactions: PostReaction[] = (await ReactionRepository.getAllByPostId(postId)).rows;
        comments = comments.filter((comment) => comment.user_internal_id == user_internal_id || comment.visible)
        response.push({
            ...post,
            resources: resources,
            comments: comments,
            reactions: reactions
        })
    }

    let userIds: number[] = getUniqueUserInternalIdsFromPosts(response)
    let shallowUsers = (await UserRepository.getShallowUsersByIds(userIds)).rows
        .map((user) => {
            return {
                ...user,
                user_internal_id: user.user_internal_id.toString()
            }
        });

    const postCountResponse = await PostRepository.count();
    if (postCountResponse.rowCount > 0) {
        postLength = postCountResponse.rows[0].count;
    }
    return {
        posts: response,
        totalPostCount: postLength,
        users: shallowUsers
    };
}

export async function getCategories(userEmail: string) {
    const categories = await CategoryRepository.getAll();
    let rowCount = categories.rowCount;
    return {
        categories: categories.rows
    };
}

export async function getTags(userEmail: string) {
    const tags = await TagRepository.getAll();
    let rowCount = tags.rowCount;
    return {
        tags: tags.rows
    };
}

export async function createCategory(userEmail: string, categoryText: string) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    const categories = await CategoryRepository.add(categoryText);
    let rowCount = categories.rowCount;
    return {
        message: rowCount > 0 ? "Category added successfully!" : "Category adding failed!"
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

export async function add(user_internal_id: number, post_category_id: number, text: string, priority: number) {
    let response = await PostRepository.add(user_internal_id, post_category_id, text, priority);
    return response.rows[0]
}

export async function remove(id: number) {
    const response = await PostRepository.remove(id);

    if (response.rowCount === 0) {
        throw new PostError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
