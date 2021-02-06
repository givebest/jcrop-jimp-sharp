var express = require('express')
var router = express.Router()
const jimp = require('jimp')

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body)

  const { imgUrl, x, y, w, h } = req.body
  res.send('respond with a resource' + req)

  async function main() {
    const image = await jimp.read(imgUrl)

    image.crop(x, y, w, h).write('jimp.jpg') // save
  }

  main()
})

module.exports = router
