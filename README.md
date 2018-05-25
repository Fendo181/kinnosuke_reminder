## 勤之助リマインダー(β)

![sample.png](https://github.com/Fendo181/kinnosuke_reminder/blob/master/pic/sample.png)

### Download
- [こちら](https://pepabo.slack.com/archives/DAGA87MUM/p1527221805000234)からダウンロードしてください。

### Todo

しばし待たれよ。

- [ ] Macを開けた際に通知を出すようする。
- [ ] WebPushで通勤、出勤ができる。
- [ ] Snooz機能できる。
- [ ] フレックス時間がわかる。

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

### Author

- @endu
- @tecchan

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


