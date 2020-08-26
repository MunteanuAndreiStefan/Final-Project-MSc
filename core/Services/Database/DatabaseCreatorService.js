let fs = require('fs');
let path = require('path');
let filePath = path.resolve(path.join(__dirname,'../../sql/create_social_media_db.sql'));
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

async function checkIfSchemaExistsAsync() {
    if (SCHEMA_EXISTS) {
        return SCHEMA_EXISTS
    }

    await DatabaseService.executeQuery(SCHEMA_EXISTS_QUERY);
    SCHEMA_EXISTS = true;
    return true
}

async function createSchemaIfMissingAsync() {
    if(await checkIfSchemaExistsAsync()) {
        return
    }

    let data = await fs.promises.readFile(filePath, { encoding: 'utf8' });
    await DatabaseService.executeQuery(data);
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

        // TODO: WAIT FOR EVERY ONE OF THEM
        instructions.forEach(instruction => {
            DatabaseService.executeQuery(instruction, (error, results, fields) => console.log(instruction, error, results, fields));
        })
        callback(null, 'Execution completed')
    });
}

exports.createSchemaIfMissing = createSchemaIfMissing;
exports.createSchemaIfMissingAsync = createSchemaIfMissingAsync;
