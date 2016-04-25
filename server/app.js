import Koa from 'koa'

import middleware from './middleware'
import router from './api'
import graphql from './graphql'
// var favicon = require('koa-favicon');
const app = new Koa()
app.keys = ['my-secret-key']

app.use(...middleware)
app.use(...router)
app.use(graphql())
app.use(async ctx => {
  ctx.status = 404
})

// const errorHandler = (ctx, err) => {
//   ctx.body = { message: err.message }
//   ctx.status = err.status || 500
// }

// // logger
//
// app.use(async (ctx, next) => {
//   try {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
//   } catch (err) {
//     errorHandler(ctx, err)
//   }
// })
//
// // response
//
// app.use(async (ctx, next) => {
//   try {
//     // ctx.body = 'Hello World'
//     await next() // next is now a function
//   } catch (err) {
//     errorHandler(ctx, err)
//   }
// })
const serverPort = process.env.PORT || 4000
const server = app.listen(serverPort, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(`Listening at http://${host}:${port}`)
})

export default app
