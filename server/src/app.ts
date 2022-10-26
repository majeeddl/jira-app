import puppeteer from "puppeteer";
import {writeFileSync} from "fs"

(async () => {
  const browser = await puppeteer.launch({ devtools : true});
  const page = await browser.newPage();

  await page.goto("http://10.0.1.76:8080/secure/Dashboard.jspa",{
    waitUntil: 'networkidle2',
  });

  // Type into search box.
  // await page.type(".devsite-search-field", "Headless Chrome");

  const loginSelector = '#login-form-username'
  await page.waitForSelector(loginSelector);

  await page.keyboard.type('majeed dourandeesh')

  await page.focus("#login-form-password")

   await page.keyboard.type('')

   await page.keyboard.press("Enter")


   await page.waitForSelector("#user-options")



  await page.click('#browse_link')

  await page.waitForSelector("#user-options")

  //  const cookies = await page.cookies();
  //  await writeFileSync('./cookies.json', JSON.stringify(cookies, null, 2));

  //  const page2 = await browser.newPage();
  // await page.goto('http://10.0.1.76:8080/secure/RapidBoard.jspa?rapidView=74&projectKey=PITARGE104');


  // await page.goto("http://10.0.1.76:8080/secure/RapidBoard.jspa?rapidView=74&projectKey=PITARGE104")

//   const [button]:any = await page.$x("//a[contains(., 'Projects')]");
// if (button) {
//     await button.click();
// }


  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = ".devsite-suggest-all-results";
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = ".gsc-results .gs-title";
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate((resultsSelector) => {
  //   return [...document.querySelectorAll(resultsSelector)].map((anchor:any) => {
  //     const title = anchor.textContent.split("|")[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);

  // // Print all the files.
  // console.log(links.join("\n"));

  await page.screenshot({ path: 'image.png' });

  // await browser.close();
})();
