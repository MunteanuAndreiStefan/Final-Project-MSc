const DatabaseCreateService = require('../Services/Database/DatabaseCreatorService')

DatabaseCreateService.createSchemaIfMissingAsync()
    .then(() => console.log('It worked'))
    .catch(console.error);
