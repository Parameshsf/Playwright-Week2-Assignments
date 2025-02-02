import {test} from '@playwright/test'

test('Launch leaftap and create one lead', async ({page}) =>{

    //launch browser
    page.goto("http://leaftaps.com/opentaps/control/main");
    //find username and password
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    await page.locator("//input[@id='username']").fill('demosalesmanager');
    await page.locator("//input[@id='password']").fill('crmsfa');
    await page.locator("//input[@class='decorativeSubmit']").click();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Title ", page.title);

    

    //Click CRMSFA link
    await page.locator("//a[contains(text(),'CRM')]").click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    //Click Create Lead link on the left side navigation pane
    await page.locator("//a[contains(text(), 'Create Lead')]").click();
    await new Promise(resolve => setTimeout(resolve, 3000));

    //Use cssSelector to identify web element
    await page.locator("#createLeadForm_companyName").fill("HTC Global Services");
    await page.locator("#createLeadForm_firstName").fill("Parameswaran");
    await page.locator("#createLeadForm_lastName").fill("Sudarsanam");
    //Select the Source dropdown value
    await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_EMPLOYEE"});
    //find dropdown count
    const dropdown = await page.locator("#createLeadForm_dataSourceId>option");
    const dropdownCount = await dropdown.count();
    console.log("Source dropdown value count is ",dropdownCount);

    for(let index=0;index<dropdownCount;index++){
        //await dropdown.nth(i).waitFor({state : 'visible'});
        console.log(await dropdown.nth(index).innerText({timeout:30000}));
    }
    

    //Click Creat Lead button
    await page.locator(".smallSubmit").click();
    //await new Promise(resolve => setTimeout(resolve, 10000));

})