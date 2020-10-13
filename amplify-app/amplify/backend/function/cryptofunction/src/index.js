const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config)

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
