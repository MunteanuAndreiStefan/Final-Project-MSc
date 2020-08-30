import * as QuestionnaireController from './Controllers/QuestionnaireController';
import * as DatabaseCreatorService from './Services/Database/DatabaseCreatorService';
import * as DatabaseService from './Services/Database/DatabaseService'
import * as MainLambda from './lambdas/handler';

export const Controllers = {
    QuestionnaireController
}

export const Services = {
    DatabaseCreatorService,
    DatabaseService
}

export const Lambdas = {
    MainLambda
}
