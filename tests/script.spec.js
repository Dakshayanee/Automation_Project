const{test,expect,chromium}=require('@playwright/test')


test('script file',async({page}) => {
    // const browser=await chromium.launch();
    // const context=await browser.newContext();
    // const page=await context.newPage();

    await page.goto("https://amazon.com");
try{
     await page.click("[data-action-type='DISMISS']");
    await page.click("text=Today's Deals")
}catch(e){}

    await page.click("[data-testid='carousel-3BE886EF2798BFBED05D11B6F5B16E24']")
    await page.click("#grid-main-container > div.a-row.Grid-module__gridSection_1SEJTeTsU88s6aVeuuekAp > div > div:nth-child(3) > div > div > a > div > div > img")
    await page.click("//div[@class='a-section octopus-dlp-asin-title']//a[@title='Amazon Essentials Women&#39;s Classic-Fit Long-Sleeve Button-Down Poplin Shirt']")
    await page.selectOption("#native_dropdown_selected_size_name",{label:'Small'});
    await page.click('#buy-now-button')
  //  await page.click("#add-to-cart-button")
    await page.waitForTimeout(3000)

    //await browser.close()

})

// test('script 2',async({page}) => {
//     await page.goto("https://amazon.com");

     
// })