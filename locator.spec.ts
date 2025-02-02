import test from '@playwright/test'

test('Launch leaftap and find webelements', async ({page}) =>{

    //launch browser
    page.goto("http://leaftaps.com/opentaps/control/main");
    //find username and password
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    await page.locator("//input[@id='username']").fill('democsr');
    await page.locator("//input[@id='password']").fill('crmsfa');
    await page.locator("//input[@class='decorativeSubmit']").click();

    console.log("Title ", page.title());

})