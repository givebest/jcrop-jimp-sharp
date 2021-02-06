const jimp = require('jimp')

async function main() {
  const image = await jimp.read('./public/images/001.jpg')

  image.crop(100, 100, 400, 400).write('jimp.jpg') // save
}

main()
