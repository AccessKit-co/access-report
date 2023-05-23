const puppeteer = require('puppeteer');

async function getScreenshot() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto('https://trycreate.co');

    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
}

getScreenshot();