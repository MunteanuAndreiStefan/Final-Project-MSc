const PostController = require('./Controllers/PostController')

exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({message: PostController.data.returnMessage})
  }
}