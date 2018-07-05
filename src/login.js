const client = require('cheerio-httpcli');

//勤之助にアクセスする
let url = 'https://www.4628.jp/?module=top&rd=1';
client.fetch(url, function (err, $, res, body) {
  // レスポンスヘッダを参照
  console.log(res);
});
