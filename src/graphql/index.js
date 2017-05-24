import { Router } from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { authorizeMayBe } from '../auth/auth.middleware';

const graphqlMiddleware = graphqlHTTP({
  schema,
  graphiql: (process.env.NODE_ENV !== 'production')
});

const router = Router();

router.all('/', authorizeMayBe, graphqlMiddleware);

export default router;
