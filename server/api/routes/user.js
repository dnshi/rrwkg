// import User from '../../models/User'

export default (router) => {
  router
    .get('/user', async ctx => {
      // const user = await User.findById(ctx.passport.user)
      // if (user) ctx.body = user
      ctx.body = 'pass'
    })
    .get(
      '/user/:id',
      async (ctx, next) => {
        // const user = await User.findById(ctx.passport.user)
        // if (user) ctx.body = user
        ctx.uid = ctx.params.id
        await next(ctx)
      },
      async ctx => {
        ctx.body = ctx.uid
      }
    )
}
