const puppeteer = require('puppeteer');
const fs = require('fs');

 
(async () => {
    const certificate = fs.readFileSync("T1.html").toString()  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(certificate);
  await page.screenshot({path: 'certificate2.png'});
 
  await browser.close();
})();