import {APIGatewayProxyEvent} from "aws-lambda";
import * as QuestionnaireController from "../Controllers/QuestionnaireController";
import * as DatabaseCreatorService from "../Services/Database/DatabaseCreatorService";

let dbCreationChecked = false;

async function databaseCheckLogic(): Promise<void> {
    if (!dbCreationChecked) {
        await DatabaseCreatorService.createSchemaIfMissing();
        dbCreationChecked = true;
    }
}

export async function getAll(event: APIGatewayProxyEvent): Promise<object> {
    await databaseCheckLogic();

    let questionnaires = await QuestionnaireController.getAll()

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: questionnaires
    }
}
