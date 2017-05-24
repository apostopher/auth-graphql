// @flow

import http from 'http';
import express from 'express';

import { PORT } from './config';

const app = express();

const server = http.createServer(app);

// Start the graphQL server
server.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
