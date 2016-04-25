import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import convert from 'koa-convert'

const data = require('./data.json')

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
})

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: GraphQLString },
        },
        // The resolve function describes how to "resolve" or fulfill
        // the incoming query.
        // In this case we use the `id` argument from above as a key
        // to get the User from `data`
        resolve: (_, args) => data[args.id],
      },
    },
  }),
})

export default () => mount('/graphql', convert(graphqlHTTP({ schema, graphiql: true })))
