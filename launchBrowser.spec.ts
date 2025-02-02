import { chromium, test } from "@playwright/test";

test('launchbrowser', async ()=>{

    //Browser Instance
    const browser = await chromium.launch({headless:false});
    //const browser = await chromium.launch();

    //Create Browser Context
    const context = await browser.newContext();

    //Create a page
    const page = await context.newPage();

    //Load the URl
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();

    console.log("the url has been launced, ",url);


})