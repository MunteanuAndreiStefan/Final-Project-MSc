import {Client, QueryResult} from 'pg';

const client = new Client({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASS || '1234',
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
    return new Promise<any>(((resolve, reject) => {
        client.query(query)
            .then(resolve)
            .catch((error) => {
                console.error(query, error);
                resolve(error);
                //reject(error);
            })
    }));
}
