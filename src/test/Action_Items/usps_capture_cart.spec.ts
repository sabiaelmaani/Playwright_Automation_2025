import { Page, test } from '@playwright/test';
import { click, clickByIndex, getText, hover, hoverByIndex, scrollByPixel, type } from '../Day4_120825/Reusable_Actions';
import { get } from 'http';


test('usps capture cart @ai', async ({ page }) => {
    //navigate to usps
    await page.goto('https://www.usps.com/')

    //hover over shop module 
    await hoverByIndex(page, '//*[text()="Shop"]', 0, 'shop module')

    //click on stamps
    await clickByIndex(page, "//*[text()='Stamps']", 0, 'stamps')

    //click on checkbox for stamps under category section
    await clickByIndex(page, "//*[@class='checkbox-label']", 0, 'stamps checkbox')

    //click on additional postage under product type 
    await clickByIndex(page, "//*[@class='checkbox-label']", 4, 'additional postage checkbox')

    //scroll down by 300 pixels
    await scrollByPixel(page, 0, 300)

    //click on the first product
    await clickByIndex(page, "//*[@class='results-product-desc']", 0, 'first product')

    //click on add to cart button
    await click(page, "//*[@id='addToCartVisBtn122104']", 'add to cart button')
    
    //click on view cart
    await click(page, "//*[text()='View Cart']", 'view cart button')

    //update quantity to 2 
    await type(page, "//*[@class='col-8 form-control']", '2', 'quantity field')

    //click on update link
    await click(page, "//*[@value='Update']", 'update link')

    //capture the stamp information under the item section and print it
    let stampInfo = await getText(page, "//*[@class='item-wrapper']", 'stamp title')
    
    console.log('Your item description and details are: ' + stampInfo)

})//end of test
