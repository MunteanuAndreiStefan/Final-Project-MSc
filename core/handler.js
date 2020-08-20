const PostController = require('./Controllers/QuestionnaireController')
const DatabaseCreatorService = require('./Services/Database/DatabaseCreatorService')

exports.hello = async (event) => {
  DatabaseCreatorService.createSchemaIfMissing((err, data) => {
    console.log(err, data);
  })
  console.log(event);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({message: PostController.data})
  }
}