import {Client, QueryResult} from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432
});

client.connect(function(err: Error) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

export function executeQuery(query: string): Promise<QueryResult> {
    return client.query(query);
}
