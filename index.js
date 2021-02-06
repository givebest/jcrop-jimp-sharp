const sharp = require("sharp");

/* sharp("./img/001.jpg")
  .rotate()
  .resize(200)
  .toBuffer()
  .then((data) => {
    console.log("data", data);
    sharp(data).toFile("output.jpg");
  })
  .catch((err) => {}); */

doit();

async function doit() {
  const imgBuffer = await sharp("./src/img/001.jpg")
    .extract({
      left: 500,
      top: 200,
      width: 400,
      height: 400,
    })
    // .resize(400, 400, {})
    .toBuffer();
  const img = await sharp(imgBuffer).toFile("sharp.jpg");
}
