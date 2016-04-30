import Router from 'koa-router'
import importDir from 'import-dir'
import { forEach } from 'lodash'

const routes = importDir('./routes')

const router = new Router({ prefix: '/api' })

forEach(routes, route => route(router))

export default [
  router.routes(),
  router.allowedMethods(),
]
