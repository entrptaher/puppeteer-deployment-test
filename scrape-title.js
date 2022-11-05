const puppeteer = require("puppeteer");

async function scrapeTitle(url) {
  if (!url) return;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);
  const title = await page.title();
  await browser.close();
  return title;
}

module.exports = scrapeTitle;
