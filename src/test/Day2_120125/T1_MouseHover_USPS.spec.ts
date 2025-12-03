import { Page, test } from '@playwright/test';


test('Mouse hover to quick tools module and select track a package on USPS @smoke', async ({ page }) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/')
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    //click on track a package link
    await page.locator('text=Track a Package').click();
    //enter a tracking number
    await page.locator('[id="tracking-input"]').fill('111111111111');
    await page.waitForTimeout(2000) //wait for 2 seconds
})
