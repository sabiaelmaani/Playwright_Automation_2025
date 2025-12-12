import {Page, test} from '@playwright/test';
import { click, getText, getTextByIndex, type } from '../Day4_120825/Reusable_Actions';

test('capture no coverage message @ai', async ({page}) => {
    //navigate to uhc website
    await page.goto('https://www.uhc.com/');
    //click on individual & family
    await click(page, "[id='InF-3']", 'individual & family')
    //click on shop aca plans
    await click(page, "text=Shop ACA Plans", 'shop aca plans')
    //enter zip code 
    await type(page, "//*[@id='703476658']", '25405', 'zip code field')
    //click on find your plan options
    await click(page, "[aria-label='Find your plan options ']", 'find your plan options button')


    //validate no coverage available message appears
    //capture the message 
    let expectedMessage = "UnitedHealthcare Individual & Family ACA plans are not available in your area."
    let actualMessage = await getTextByIndex(page, "[class='planFinderModal__header']", 0, 'no coverage available message')

    if (actualMessage.includes(expectedMessage)) {
        console.log('No coverage available message is displayed as expected: \n' + actualMessage);
    } else {
        console.log('No coverage available message is NOT displayed as expected. \n' + actualMessage);
    }//end of if else block


})//end of test
