import * as fs from 'fs';
import * as path from 'path';
import * as DatabaseService from './DatabaseService';

const filePath = path.resolve(path.join(__dirname,'../../sql/create_social_media_db.sql'));
const SCHEMA_EXISTS_QUERY = 'SELECT schema_name FROM information_schema.schemata WHERE schema_name = \'social_media_db\';';

let SCHEMA_EXISTS = false;

export async function checkIfSchemaExists(): Promise<boolean> {
    if (SCHEMA_EXISTS) {
        return SCHEMA_EXISTS
    }

    await DatabaseService.executeQuery(SCHEMA_EXISTS_QUERY);
    SCHEMA_EXISTS = true;
    return true
}

export async function createSchemaIfMissing(): Promise<void> {
    if(await checkIfSchemaExists()) {
        return
    }

    let data = await fs.promises.readFile(filePath, { encoding: 'utf8' });
    await DatabaseService.executeQuery(data);
}
