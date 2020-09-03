import * as QuestionnaireRepository from '../Repository/QuestionnaireRepository';
import * as Constants from '../Utils/Constants';

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


export async function add(priority: number, name: string) {
    let response = await QuestionnaireRepository.add(priority, name);
    return response.rows[0]
}

export async function remove(id: number) {
    const response = await QuestionnaireRepository.remove(id);

    if (response.rowCount === 0) {
        throw new QuestionnaireError(Constants.MESSAGES.NOT_FOUND.status, Constants.MESSAGES.NOT_FOUND.QUESTIONNAIRE);
    }

    return response.rows;
}
