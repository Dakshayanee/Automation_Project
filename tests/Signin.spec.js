const{test,expect}=require('@playwright/test')

test('SignIn',async ({page}) => {

    page.setDefaultTimeout(60000);

    await page.goto('https://amazon.com');

   await page.locator('#nav-link-accountList-nav-line-1').click();
   await page.locator ("#nav-flyout-ya-signin > a > span").click();

   await page.locator('#ap_email').fill('dakshayaneeyerule@gmail.com')
   await page.click('#continue')
   await page.locator('#ap_password').fill('Dakshu@09');
   await page.click('#signInSubmit')
   //await page.waitForTimeout(3000)

   


})