export type PostResource = {
    id: number;
    user_internal_id: number;
    post_id: number;
    url: string;
    type: string;
    timestamp: string;
};

export type PostComment = {
    id: number;
    user_internal_id: number;
    post_id: number;
    text: string;
    timestamp: string;
};

export type PostReaction = {
    id: number;
    user_internal_id: number;
    post_id: number;
    reaction: string;
    timestamp: string;
};

export type Post = {
    id: number;
    user_internal_id: number;
    text: string;
    priority: number;
    timestamp: string;
    resources: PostResource[];
    comments: PostComment[];
    reactions: PostReaction[];
};

