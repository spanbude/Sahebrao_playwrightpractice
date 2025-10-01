import {test,expect} from '@playwright/test';

test('TC002-- worker_ci 2', async({page})=>{
    console.log("Test case from test002 file")
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator("//input[@id='monday']").click();  

});

test('TC003-- worker_ci 2', async({page})=>{
    console.log("Test case from test002 file--- TC003")
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator("//input[@id='monday']").click();  

});