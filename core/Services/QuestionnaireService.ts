import * as Constants from '../Utils/Constants';
import {Post, PostComment, PostReaction, PostResource} from "../Models/Post";
import * as AnswerRepository from "../Repository/AnswerRepository";
import * as CommentRepository from "../Repository/CommentRepository";
import * as ResourceRepository from "../Repository/ResourceRepository";
import * as ReactionRepository from "../Repository/ReactionRepository";
import * as QuestionRepository from "../Repository/QuestionRepository";
import * as QuestionnaireRepository from '../Repository/QuestionnaireRepository';
import * as QuestionnaireTagRepository from '../Repository/QuestionnaireTagRepository';
import * as QuestionTagRepository from '../Repository/QuestionTagRepository';
import * as UserAnswerRepository from '../Repository/UserAnswerRepository';
import {getUserInternalIdBy, getCurrentUser, currentUserIsAdmin} from "./UserService";
import {Answer, Question, Questionnaire} from "../Models/Questionnaire";
import {AnswerDTO, PostDTO, QuestionnaireDTO, TagDTO} from "../lambdas/DTOs/ModelDTOs";
import * as PostRepository from "../Repository/PostRepository";
import * as PostTagRepository from "../Repository/PostTagRepository";
import {PostError} from "./PostService";

export class QuestionnaireError extends Error {
    readonly status
    readonly error

    constructor(status: number, error: string) {
        super(error);
        this.status = status
        this.error = error
    }
}

export async function getById(id: number) {
    const response = await QuestionnaireRepository.getById(id);
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows[0]
}

export async function getAll() {
    const response = await QuestionnaireRepository.getAll();
    let rowCount = response.rowCount;

    if (rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows
}

export async function getComputedQuestionnaireList(email: string) {
    const questionnaires = await QuestionnaireRepository.getComputedQuestionnaireList(email);
    let rowCount = questionnaires.rowCount;

    if (rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    let questionnairesResponse: Questionnaire[] = [];
    for (const questionnaire of questionnaires.rows) {
        let questionnaireId = questionnaire.id;
        let questions = await QuestionRepository.getAllByQuestionnaireId(questionnaireId);

        let questionsResponse = [];
        for (const question of questions.rows) {
            let questionId = question.id;
            let answers = (await AnswerRepository.getAllByQuestionId(questionId)).rows;
            questionsResponse.push({
                ...question,
                possibleAnswers: answers
            })
        }
        questionnairesResponse.push({
            ...questionnaire,
            questions: questionsResponse
        })
    }

    let answeredQuestionnaireListResponse = await QuestionnaireRepository.getAnsweredQuestionnaireList(email);

    return {
        answeredQuestionnaireNumber: answeredQuestionnaireListResponse.rowCount,
        questionnaires: questionnairesResponse
    }
}

export async function createQuestionnaire(userEmail: string, body: QuestionnaireDTO) {
    if (!(await currentUserIsAdmin(userEmail))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }
    let questionnaireResult = await QuestionnaireRepository.add(body.priority, body.title, body.description);

    if (questionnaireResult.rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    let questionnaireId = questionnaireResult.rows[0].id;

    for (const tag of body.tags) {
        await QuestionnaireTagRepository.add(tag.id, questionnaireId, tag.interest);
    }

    for (const question of body.questions) {
        let questionResult = await QuestionRepository.add(questionnaireId, question.type,
            question.multiple_answers, question.title, question.description);

        if (questionResult.rowCount === 0) {
            throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
        }

        let questionId = questionResult.rows[0].id;

        for (const tag of question.tags) {
            await QuestionTagRepository.add(tag.id, questionId, tag.interest);
        }

        for (const answer of question.answers) {
            await AnswerRepository.add(questionId, question.answers.indexOf(answer), answer.scale_value, answer.text, answer.image_url);
        }
    }

    return {
        message: "Questionnaire created succesfully."
    };
}

export async function addUserAnswers(questionnaireId: number, body: any, email: string) {
    let userAnswers = body.userAnswers;    console.log(userAnswers);
    let user_internal_id = await getUserInternalIdBy(email);

    userAnswers.forEach((obj: any) => {
        obj.answers.forEach((answerId: any) => {
            UserAnswerRepository.add(user_internal_id, Number(obj.questionId), answerId);
        })
    });

    return {
        statusCode: 200,
        body: "User answers registered successfully."
    };
}

export async function deleteQuestionnaire(questionnaireId: number, email: string) {
    if (!(await currentUserIsAdmin(email))) {
        return {
            statusCode: 403,
            body: "User has no right to call this API."
        };
    }

    const questionnaires = await QuestionnaireRepository.remove(questionnaireId);
    let rowCount = questionnaires.rowCount;

    if (rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return {
        statusCode: 200,
        body: "Questionnaire deleted successfully."
    };
}

export async function add(priority: number, title: string, description: string) {
    let response = await QuestionnaireRepository.add(priority, title, description);
    return response.rows[0]
}

export async function remove(id: number) {
    const response = await QuestionnaireRepository.remove(id);

    if (response.rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
