/*
create a loop in weightwatchers using an array of 
zip codes to search for a studio and print out 
the upcoming schedule
*/

import { Page, test } from '@playwright/test';

test('capture workshop schedules for 3 different zip codes', async ({ page }) => {

    //declare arraylist for zip codes
    let zip: string[] = []
    zip.push('11218')
    zip.push('25403')
    zip.push('07306')
    
    for (let i = 0; i < zip.length; i++) {
        //navigate to weight watchers
        await page.goto('https://www.weightwatchers.com/us/')

        //click on find a workshop
        await page.locator('[data-e2e-name="find_a workshop"]').click()

        //wait for 2 seconds
        await page.waitForTimeout(2000)

        //enter zip code in search field
        await page.locator('[id="location-search"]').fill(zip[i])

        //click on the search arrow button
        await page.locator('[id="location-search-cta"]').click()

        //wait for 2 seconds
        await page.waitForTimeout(2000)

        //scroll down to the first studio result
        await page.locator('[class="wrapperLink-rmsRn"]').nth(0).scrollIntoViewIfNeeded()


        //click on the first studio link
        await page.locator('[class="wrapperLink-rmsRn"]').nth(0).click()

        //wait for 2 seconds
        await page.waitForTimeout(2000)

        //capture the entire address and print it
        let address = await page.locator('[class="address-FnT8k"]').textContent()
        console.log('studio in ' + zip[i] + ': ' + address)
        //print an extra blank line
        console.log('\n')

        //wait for 3 seconds
        await page.waitForTimeout(3000)

        //scroll into view using contains text for "Upcoming In-Person Workshops" 
        await page.locator('[class="title-UbUc9"]').scrollIntoViewIfNeeded()
        //wait for 3 seconds 
        await page.waitForTimeout(3000)

        //capture the workshop schedule and print it
        let Schedule = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').textContent()
        console.log('The upcoming schedule in ' + zip[i] + ':\n' + Schedule)
        
        //print an extra blank line before next iteration   
        console.log('\n')
        console.log('----------------------------------------')
        console.log('\n')
    }//end of for loop


});//end of test
