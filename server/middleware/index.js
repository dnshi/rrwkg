import logger from 'koa-logger'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'

export default [
  logger(),
  cors(),
  bodyParser(),
]
