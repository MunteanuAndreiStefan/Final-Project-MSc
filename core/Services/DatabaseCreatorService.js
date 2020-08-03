let fs = require('fs');
let path = require('path');
let filePath = 'C:\\Users\\CosminIulianIrimia\\Documents\\Personal\\Final-Project-MSc\\core\\sql\\create_social_media_db.sql';
const DatabaseService = require('./DatabaseService')
let SCHEMA_EXISTS_QUERY = 'SELECT schema_name FROM information_schema.schemata WHERE schema_name = \'social_media_db\';';
let SCHEMA_EXISTS = false;

function checkIfSchemaExists() {
    if (SCHEMA_EXISTS) {
        return SCHEMA_EXISTS;
    }
    DatabaseService.executeQuery(SCHEMA_EXISTS_QUERY, (error, results, fields) => {
        if (error) {
            console.log(error);
        }
        console.log(results, fields);
        SCHEMA_EXISTS = true;
        return true;
    })
}

function createSchemaIfMissing(callback) {
    if (checkIfSchemaExists()) {
        return callback(new Error('Schema already exist.'))
    }
    fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
        if (err) {
            return callback(err)
        }
        let instructions = data
            .split('\n').join('')
            .split('\r').join('')
            .replace(/\s\s+/g, ' ')
            .split(';');
        console.log(instructions)
        instructions.forEach(instruction => {
            DatabaseService.executeQuery(instruction, (error, results, fields) => console.log(instruction, error, results, fields));
        })
        callback(null, 'Execution completed')
    });
}

exports.createSchemaIfMissing = createSchemaIfMissing;