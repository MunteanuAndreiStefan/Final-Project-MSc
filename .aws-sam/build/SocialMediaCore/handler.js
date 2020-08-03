const PostController = require('./Controllers/PostController')
const DatabaseCreatorService = require('./Services/DatabaseCreatorService')

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