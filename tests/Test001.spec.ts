import{test,expect} from '@playwright/test';

test('TC001',async({page})=>{

    
    await page.goto("https://playwright.dev/docs/intro#installing-playwright");
    await expect(page).toHaveTitle("Installation | Playwright")
    await page.locator("//a[@role='button'][normalize-space()='Node.js']").click();
    await page.locator("//a[normalize-space()='Java']").click();



});