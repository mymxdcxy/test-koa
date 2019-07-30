const router = require('koa-router')()
const aes256 = require('aes256')

router.get('/', async (ctx, next) => {
  var key = 'my www.biee.net';
  var plaintext = JSON.stringify({
    code:0,
    msg:'成功',
    data:[{
      name:111
    },
    {
      name:222
    }]
  });
  var encrypted = aes256.encrypt(key, plaintext);
  var decrypted = aes256.decrypt(key, encrypted);
  console.log(encrypted)
  console.log(decrypted)


  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
