import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import convert from 'koa-convert'

const data = require('./data.json')

// TODO: debugger
const log = fn => (...args) => (result => console.log(result) || result)(fn(...args))

const todoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLInt },
    completed: { type: GraphQLBoolean },
    text: { type: GraphQLString },
  },
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QueryTodos',
    fields: {
      todo: {
        type: todoType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: log((_, { id }) => data[id]),
      },
      todos: {
        type: new GraphQLList(todoType),
        resolve: log(() => data),
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'UpdateTodo',
    fields: {
      completeTodo: {
        type: todoType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: log((_, { id }) => (data[id] = { ...data[id], completed: !data[id].completed })),
      },
      editTodo: {
        type: todoType,
        args: {
          id: { type: GraphQLInt },
          text: { type: GraphQLString },
        },
        resolve: log((_, { id, text }) => (data[id] = { ...data[id], text })),
      },
    },
  }),
})

export default () => mount('/graphql', convert(graphqlHTTP({ schema, graphiql: true })))
