const router = require('koa-router')({
  prefix: '/api'
})

router.get('/:id/baseinfo/url', async (ctx, next) => {
  ctx.body = {
    protocol: 'http',
    domain: 'localhost',
    port: '3000',
    path: '/users'
  }
})

module.exports = router
