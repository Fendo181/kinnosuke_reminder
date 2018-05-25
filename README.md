## 勤之助リマインダー(β)


![sample.png](https://github.com/Fendo181/kinnosuke_reminder/blob/master/pic/sample.png)

### Download

windows,Mac両方のプラットフォームで対応してます。

[こちら](https://www.dropbox.com/sh/ze0cba8n7mgbfth/AAATf9J0dS4fdRVW1Ktl7Xupa?dl=0)からダウンロードしてください。

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

`kinnosuke_reminder-darwin-x64/kinnosuke_reminder.app`が生成されます。

### Feature

- [ ] スヌーズ機能
- [ ] WebPushから出勤、退勤ができる。
- [ ] フレックスタイムが確認できる。

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Author

- `tecchan`
- `endu`
