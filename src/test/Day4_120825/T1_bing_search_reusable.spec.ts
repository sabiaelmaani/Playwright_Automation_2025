import { Page, test } from '@playwright/test';
import { getText, type } from './Reusable_Actions';

let page: Page;

test.beforeAll( async ({ browser }) => {
    page = await browser.newPage();
});

test('search for playwrite on bing', async () => {
    await page.goto('https://www.bing.com/');
    await page.waitForTimeout(2000);
    await type(page, '[name="q"]', 'playwright', 'search field');
    await page.keyboard.press('Enter');
 

});

test('capture search number results', async () => {
    let searchResult = await getText(page, '[class="sb_count"]', 'search results');
    console.log('Search result is: ' + searchResult);
    let searchNumber = searchResult?.split(' ')[1];
    console.log('Search number is: ' + searchNumber);
});
