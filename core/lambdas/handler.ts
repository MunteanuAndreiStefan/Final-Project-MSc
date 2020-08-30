const QuestionnaireController = require('../Controllers/QuestionnaireController')
const DatabaseCreatorService = require('../Services/Database/DatabaseCreatorService')
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";

export async function hello(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    let data = await DatabaseCreatorService.createSchemaIfMissing();

    console.log(event)
    console.log(QuestionnaireController);

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({message: data})
    }
}
