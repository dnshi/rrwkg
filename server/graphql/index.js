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
import { every, filter, flow, isFunction, map } from 'lodash'

let data = require('./data.json')
let idCounter = data.length

// TODO: debugger
const log = fn => (
  isFunction(fn)
    ? (...args) => (result => log(result))(fn(...args))
    : console.log(fn) || fn
)

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
      getTodos: {
        type: new GraphQLList(todoType),
        resolve: flow(() => data, log),
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'UpdateTodo',
    fields: {
      addTodo: {
        type: new GraphQLList(todoType),
        args: {
          text: { type: GraphQLString },
        },
        resolve: flow((_, { text }) =>
          (data = [...data, { id: idCounter++, text, completed: false }]), log
        ),
      },
      completeTodo: {
        type: new GraphQLList(todoType),
        args: {
          id: { type: GraphQLInt },
        },
        resolve: flow((_, { id }) =>
          (data = map(data, todo =>
            (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
          )), log
        ),
      },
      completeAll: {
        type: new GraphQLList(todoType),
        resolve: flow(() => {
          const areAllMarked = every(data, todo => todo.completed)
          return (data = map(data, todo => ({
            ...todo,
            completed: !areAllMarked,
          })))
        }, log),
      },
      editTodo: {
        type: new GraphQLList(todoType),
        args: {
          id: { type: GraphQLInt },
          text: { type: GraphQLString },
        },
        resolve: flow((_, { id, text }) =>
          (data = map(data, todo => (todo.id === id ? { ...todo, text } : todo))), log
        ),
      },
      deleteTodo: {
        type: new GraphQLList(todoType),
        args: {
          id: { type: GraphQLInt },
        },
        resolve: flow((_, { id }) =>
          (data = filter(data, todo => todo.id !== id)), log
        ),
      },
      clearCompleted: {
        type: new GraphQLList(todoType),
        resolve: flow(() =>
          (data = filter(data, todo => !todo.completed)), log
        ),
      },
    },
  }),
})

export default () => mount('/api', convert(graphqlHTTP({ schema, graphiql: true })))
