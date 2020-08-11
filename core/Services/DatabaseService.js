const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432
});

client.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

exports.executeQuery = (query) => {
    return new Promise(function (resolve, reject) {
        client.query(query, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            resolve(results, fields);
        });
    });
}