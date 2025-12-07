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
    zip.push('10003')
    zip.push('11226')
    
    for (let i = 0; i < zip.length; i++) {
        //navigate to weight watchers
        await page.goto('https://www.weightwatchers.com/us/')

        //click on find a workshop
        await page.locator('[text="Find a Workshop"]').nth(0).click()

        //click on in-person link
        await page.locator('[text="In-Person"]').click()

        //enter zip code in search field
        await page.locator('[id="location-search"]').fill(zip[i])

        //click on the search arrow button
        await page.locator('[id="location-search-cta"]').click()

        //scroll down to the studio links
        await page.locator('[class="container-k2b9Z"]').nth(0).scrollIntoViewIfNeeded()

        //click on the first studio link
        await page.locator('[class="container-k2b9Z"]').nth(0).click()

        //capture the entire address and print it
        let address = await page.locator('[class="address-FnT8k"]').textContent()
        console.log('studio in ' + zip[i] + ': ' + address)

        //scroll into view using contains text for "Upcoming In-Person Workshops" 
        await page.locator(':has-text=("Upcoming In-Person Workshops")').scrollIntoViewIfNeeded()
        
        //capture the workshop schedule and print it
        let Schedule = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').textContent()
        console.log('The upcoming schedule in ' + zip[i] + ':\n' + Schedule)
        
    }//end of for loop
});//end of test
