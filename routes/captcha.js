var express = require('express')
var router = express.Router()
var svgCaptcha = require('svg-captcha')

/* GET home page. */
router.get('/', function (req, res, next) {
  var captcha = svgCaptcha.create({
    size: 4,
    noise: 4,
    background: '#009bb1',
  })
  req.session.captcha = captcha.text

  /* var captcha = svgCaptcha.createMathExpr({
    background: '#009bb1',
  }) */

  res.type('svg')
  res.status(200).send(captcha.data)
})

module.exports = router
