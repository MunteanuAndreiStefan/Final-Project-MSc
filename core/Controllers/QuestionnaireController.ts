import * as QuestionnaireService from '../Services/QuestionnaireService';
import {APIGatewayProxyEvent} from "aws-lambda";

export async function getById(request: APIGatewayProxyEvent) {
    return QuestionnaireService.getById(parseInt(request.queryStringParameters!.id));
}

export async function getAll() {
    return QuestionnaireService.getAll();
}

export async function add(request: { body: any; }) {
    let body = request.body;
    return QuestionnaireService.add(body.priority, body.title, body.description);
}

export async function remove(request: APIGatewayProxyEvent) {
    return QuestionnaireService.remove(parseInt(request.queryStringParameters!.id));
}
