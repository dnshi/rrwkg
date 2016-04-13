import Koa from 'koa'

const app = new Koa()

const errorHandler = (ctx, err) => {
  ctx.body = { message: err.message }
  ctx.status = err.status || 500
}

// logger

app.use(async (ctx, next) => {
  try {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  } catch (err) {
    errorHandler(ctx, err)
  }
})

// response

app.use(async (ctx, next) => {
  try {
    // ctx.body = 'Hello World'
    await next() // next is now a function
  } catch (err) {
    errorHandler(ctx, err)
  }
})

app.listen(3000)

export default app
