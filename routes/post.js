var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  const sessionCaptcha = req.session.captcha
  const { captcha } = req.body

  console.log('req.body.captcha', req.body.captcha)

  res.send('respond with a resource' + (sessionCaptcha === captcha))
})

module.exports = router
