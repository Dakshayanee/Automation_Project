const{test,expect}=require('@playwright/test')

test('Home page',async({page}) => {

    await page.goto("https://amazon.com");

     const pageTitle=await page.title();
     console.log("title is",pageTitle);

     await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');

     const pageUrl=await page.url();
     console.log(pageUrl);

     await expect(page).toHaveURL('https://www.amazon.com/')

     await page.waitForTimeout(3000)
})