const { Client } = require('pg');
const PostController = require('./Controllers/PostController')

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
});

client.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

exports.hello = async (event) => {
  client.query('SELECT * FROM social_media_db.questionnaire WHERE id = 1', function (error, results, fields) {
    console.log(error, results, fields);
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({message: 'Auth call.'})
  }
}