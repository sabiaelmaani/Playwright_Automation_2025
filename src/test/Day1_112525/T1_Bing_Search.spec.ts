import { Page, test } from '@playwright/test';
import { scrollByPixel } from '../Day4_120825/Reusable_Actions';

//initialize page variable for browser
let page: Page
let value: string //just an example
let integer: number //just an example

test.beforeAll(async ({ browser }) => {
    //create a new page instance 
    page = await browser.newPage()
})

test('Search for a keyword on bing @smoke', async () => {
    //navigate to bing
    await page.goto('https://www.bing.com/')

    await page.waitForTimeout(2000) //wait for few seconds
    await scrollByPixel(page, 0, 500,) //scroll down by pixel
    await page.waitForTimeout(2000) //wait for few seconds
    //type a keyword in the search box
    await page.locator('[name="q"]').fill('Playwright Testing')
    await page.waitForTimeout(2000) //wait for a few seconds

    //click on the search icon
    await page.keyboard.press('Enter')

})//end of test 1

test('Capture search number', async () => {
    await page.waitForTimeout(2000) //wait for few seconds for the next step
    //scroll by pixel
    //await scrollByPixel(page, 500, 'y')

    

    //wait for few seconds
    await page.waitForTimeout(2000)
    //capture search results text 
    let searchResults = await page.locator('[class="sb_count"]').textContent()
    //for concatenation purpose, you either can use comma , or +
    console.log('Search Results: ', searchResults)
    //extract number from the text
    let resultsArray = searchResults.split(' ')
    console.log('Results Array: ', resultsArray[1])

})//end of test 2