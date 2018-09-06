console.log('loginをしようぜ!');
const puppeteer = require('puppeteer');

let kinnosuke_login = ($id,$pass) => {
  // 勤之助にアクセスする
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.4628.jp/?module=top&rd=1');
    await page.content().then( content => console.log("************* TOP content="+content) );
    // 勤之助にログインする
    let companyId = '****';
    let loginId = '****';
    let loginPassword = '****';

    await page.type('input[name="y_companycd"]', companyId);
    await page.type('input[name="y_logincd"]', loginId);
    await page.type('input[name="password"]', loginPassword);
    // フォーム入力
    await page.screenshot({path: './screenshot/login.png', fullPage: true});
    const buttonElement = await page.$('input[type=submit]');
    await buttonElement.click();
    // await page.waitFor(5000);
    console.log('ログインできました!');
    // ログイン
    await page.screenshot({path: './screenshot/logined.png', fullPage: true});
    await browser.close();
  })();

}

