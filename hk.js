const puppeteer = require("puppeteer");
const loginLink = "https://www.hackerrank.com/auth/login";
let page;
const email = "doror73864@votooe.com";
const password = "123456";
const codeObj = require("./code");

(async function () {
  try {
    let browserObj = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
    });

    let newTab = await browserObj.newPage();
    page = newTab;
    await newTab.goto(loginLink);
    await waitingForElement('input[id="input-1"]', newTab);
    await page.type('input[id="input-1"]', email);
    await waitingForElement('input[type = "password"]', newTab);
    await page.type('input[type = "password"]', password);
    await page.click('button[data-analytics="LoginPassword"]');
    await waitingForElement('.topic-name[data-automation="algorithms"]', page);
    await page.click('.topic-name[data-automation="algorithms"]');
    await waitingForElement('input[value="warmup"]', page);
    await page.click('input[value="warmup"]');
    await page.waitFor(1500);
    const questionsArr = await page.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
    );

    await questionSolver(questionsArr[0], codeObj.answer[0]);
  } catch (error) {
    console.log(error);
  }
})();

async function waitingForElement(selector, cpage) {
  try {
    return await cpage.waitForSelector(selector, { visible: true });
  } catch (error) {
    console.log(error);
  }
}

async function questionSolver(question, answer) {
  try {
    await question.click();
    await waitingForElement(".monaco-editor.no-user-select.vs", page);
    await page.click(".monaco-editor.no-user-select.vs");
    await page.click(".checkbox-input");
    await waitingForElement('textarea[id="input-1"]', page);
    await page.type('textarea[id="input-1"]', answer);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.keyboard.up("Control");
    await page.click(".monaco-editor.no-user-select.vs");
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await page.click(
      ".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled"
    );
  } catch (error) {
    console.log(error);
  }
}
