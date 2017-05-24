import { GraphQLSchema, GraphQLObjectType } from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'root object for all the queries.',
    fields() {
      return {};
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    description: 'Root mutation for all the mutations.'
    fields() {
      return {};
    }
  })
});