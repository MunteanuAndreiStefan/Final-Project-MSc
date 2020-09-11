import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import * as QuestionnaireController from "../Controllers/QuestionnaireController";
import * as DatabaseCreatorService from "../Services/Database/DatabaseCreatorService";
import * as PostService from "../Services/PostService";

let dbCreationChecked = false;

async function databaseCheckLogic(): Promise<void> {
    if (!dbCreationChecked) {
        let response = await DatabaseCreatorService.createSchemaIfMissing();
        dbCreationChecked = true;
    }
}

export async function hello(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    await databaseCheckLogic();

    console.log(event)
    console.log(QuestionnaireController);

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({message: 'data'})
    }
}

export async function getPosts(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    await databaseCheckLogic();

    let posts = await PostService.getComputedPostList('user@domain.com')

        return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: posts
    }
}
