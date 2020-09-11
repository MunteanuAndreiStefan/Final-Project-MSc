const core = require('../dist/dist/bundle');
const DatabaseCreateService = core.Services.DatabaseCreatorService

DatabaseCreateService.createSchemaIfMissing()
    .then(() => {
        console.log('It worked');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
