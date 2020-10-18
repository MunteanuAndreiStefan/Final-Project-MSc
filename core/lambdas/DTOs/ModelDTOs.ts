export interface ReactionDTO {
    post_id: number;
    reaction: string;
}

export interface CommentDTO {
    post_id: number;
    comment: string;
}

export interface TagDTO {
    id: number;
    interest: number;
}

export interface PostDTO {
    category_id: number;
    text: string;
    tags: TagDTO[];
    image: string;
    innerHTML: string;
    priority: number;
}

export interface AnswerDTO {
    text: string;
    scale_value: number;
    image_url: string;
}

export interface QuestionDTO {
    title: string;
    description: string;
    type: string;
    multiple_answers: boolean;
    tags: TagDTO[];
    answers: AnswerDTO[];
}

export interface QuestionnaireDTO {
    title: string;
    description: string;
    priority: number;
    tags: TagDTO[];
    questions: QuestionDTO[];
}