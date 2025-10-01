import {test,expect} from '@playwright/test';

test('TC002-- worker_ci 2', async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator("//input[@id='monday']").click();  

});