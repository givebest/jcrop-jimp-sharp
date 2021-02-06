# Jcrop & Node.js 图片裁剪

## 前端

使用 [Jcrop](https://github.com/tapmodo/Jcrop) 选择需要裁剪的图片，输出 `x、y、w、h`。

## 后端

接收前端图片信息和 `x、y、w、h`， 使用 [Jimp](https://github.com/oliver-moran/jimp) 或 [sharp](https://github.com/lovell/sharp) 裁剪图片。

## 使用

### 前端后端接合

```bash
npm install
npm start
# 访问 http://localhost:3000/
```

### Node.js 操作

```bash
node sharp
#or
node jimp
```

## License

[MIT](./LICENSE) © 2021 [givebest](https://github.com/givebest)
