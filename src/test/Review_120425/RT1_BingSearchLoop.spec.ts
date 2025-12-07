//create a loop to search for multiple cars on bing and print out the search results number for each car. Put the car names into an array and use for of loop to iterate through each car name
import { Page, test } from '@playwright/test';


test('Capture results for multiple car searches on bing', async ({ page }) => {

    //declare arraylist for cars
    let cars: string[] = []
    cars.push('Toyota')
    cars.push('Honda')
    cars.push('Ford')
    cars.push('BMW')
    cars.push('Mercedes')
    
    for (let i = 0; i < cars.length; i++) {
        //navigate to bing
        await page.goto('https://www.bing.com/')
        //pass car name in search box
        await page.locator('[name="q"]').fill(cars[i])
        await page.waitForTimeout(2000) //wait for few seconds for the next step
        //submit on the search field
        await page.keyboard.press('Enter')
        //capture search results text
        let searchResults = await page.locator('[class="sb_count"]').textContent() //you can also use .innerText()

        //print the results to console
        console.log('Search Results for ' + cars[i] + ': ', searchResults)
        
    }//end of for loop
});//end of test
