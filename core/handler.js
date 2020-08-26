const PostController = require('./Controllers/QuestionnaireController')
const DatabaseCreatorService = require('./Services/Database/DatabaseCreatorService')

exports.hello = async (event) => {
  return new Promise((resolve, reject) => {
    DatabaseCreatorService.createSchemaIfMissing((err, data) => {
      if (err) {
        return reject(err);

      }
      console.log(err, data);

      console.log(event);
      resolve({
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({message: PostController.data})
          })
    })
  })
}
