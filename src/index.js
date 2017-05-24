// @flow

import http from 'http';
import express from 'express';

import { PORT } from './config';
import graphQL from './graphql';

const app = express();

const server = http.createServer(app);

// Attach graphQL route
app.use('/graphql', graphQL);

// Start the graphQL server
server.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
