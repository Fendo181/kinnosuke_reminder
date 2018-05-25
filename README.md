## 勤之助リマインダー(β)


![sample.png](https://github.com/Fendo181/kinnosuke_reminder/blob/master/pic/sample.png)

### Download

windows,Mac両方のプラットフォームで対応してます。

[こちら](https://www.dropbox.com/home/%E5%8B%A4%E4%B9%8B%E5%8A%A9%E3%83%AA%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%80%E3%83%BC)からダウンロードしてください。

### Setup

パッケージをインストールする。

```
npm install --sabve --save-dev
```

ローカル環境で確認する。

```
npm start
```

アプリケーションを作成する。

```
# Mac 64bit
node_modules/.bin/electron-packager . kinnosuke_reminder --platform=darwin --arch=x64 --icons=icons/512*512.icns
```

`kinnosuke_riminder-darwin-x64/innosuke_riminder.app`が生成されます。

### Featur

- [ ] スヌーズ機能
- [ ] WebPush通勤、出勤ができる。
- [ ] フレックスタイムが確認できる。

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Author

- `tecchan`
- `endu`



