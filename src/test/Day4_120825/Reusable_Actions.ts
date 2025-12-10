import { Page } from '@playwright/test';

//export means it's reusable outside of this file
//method to click on any unique element
export async function click(page: Page, locator: string, elementName: string) {
    console.log('Clicking on ' + elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on any element by index
export async function clickByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log('Clicking on ' + elementName);
    await page.locator(locator).nth(index).click();
}//end of clickByIndex method

//method to type on any unique element
export async function type(page: Page, locator: string, userValue: string, elementName: string) {
    console.log('Typing on ' + elementName);
    let element = page.locator(locator);
    await element.fill('');
    await element.fill(userValue);
}//end of type method

//method to type on any element by index 
export async function typeByIndex(page: Page, locator: string, index: number, userValue: string, elementName: string) {
    console.log('Typing on ' + elementName);
    let element = page.locator(locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of typeByIndex method

//method to get text from any unique element 
export async function getText(page: Page, locator: string, elementName: string) {
    console.log('Getting text from ' + elementName);
    let result = await page.locator(locator).textContent();
    return result;
}//end of getText method

//method to get text from any element by index
export async function getTextByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log('Getting text from ' + elementName);
    let result = await page.locator(locator).nth(index).textContent();
    return result;
}//end of getTextByIndex method

//method to hover on any unique element
export async function hover(page: Page, locator: string, elementName: string) {
    console.log('Hovering on ' + elementName);
    await page.locator(locator).hover();
}//end of hover method

//method to hover on any element by index
export async function hoverByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log('Hovering on ' + elementName);
    await page.locator(locator).nth(index).hover();
}//end of hoverByIndex method

//method to scroll into view of any unique element
export async function scrollIntoView(page: Page, locator: string, elementName: string) {
    console.log('Scrolling into view of ' + elementName);
    await page.locator(locator).scrollIntoViewIfNeeded();
}//end of scrollIntoView method

//method to scroll into view of any element by index
export async function scrollIntoViewByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log('Scrolling into view of ' + elementName);
    await page.locator(locator).nth(index).scrollIntoViewIfNeeded();
}//end of scrollIntoViewByIndex method

//method to select option by value from dropdown for any unique element
export async function selectOptionByValue(page: Page, locator: string, value: string, elementName: string) {
    console.log('Selecting ' + value + ' from ' + elementName);
    let dropdown = page.locator(locator);
    await dropdown.selectOption({ value: value });
}//end of selectOptionByValue method

//method to select option by 