'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./coreForLocal/app');
const server = awsServerlessExpress.createServer(app)

exports.hello = (event, path, context) => {
    event.path = path;
    awsServerlessExpress.proxy(server, event, context);
}
