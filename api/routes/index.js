const indexRouter = require('koa-router')()

indexRouter.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

indexRouter.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

indexRouter.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

const baseInfo = require('./baseInfo')
const users = require('./users')
module.exports = [indexRouter, baseInfo, users]
