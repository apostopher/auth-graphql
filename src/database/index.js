import knex from 'knex';

export const knexClient = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database : 'auth-graphql'
  }
});