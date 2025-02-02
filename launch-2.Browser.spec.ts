import { chromium, test } from "@playwright/test";

test('launchbrowser', async ()=>{

    //Browser Instance
    //const browser = await chromium.launch({headless:false});
    const browser1 = await chromium.launch();

    //Create Browser Context
    const context1 = await browser1.newContext();

    //Create a page
    const page = await context1.newPage();

    //Load the URl
    await page.goto("https://www.redbus.in");
    const url1 = page.url();
    const title1 = page.title();
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log("the url has been launced, ",url1);
    console.log("the title of the browser, ",title1);


    //---Create 2nd context and 2nd browser instance
    const browser2 = await chromium.launch();
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();

    await page2.goto("https://www.flipkart.com");
    const url2 = page2.url();
    const title2 = page2.title();

    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log("the url has been launced, ",url2);
    console.log("the title of the browser, ",title2);




})