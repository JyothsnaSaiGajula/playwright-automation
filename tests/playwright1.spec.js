//include playwright module
const{test, expect} = require('@playwright/test');
//write test
// Test to open a specific YouTube playlist
test('open playlist', async ({ page }) => {
    //open record at cursor
    //Navigate to YouTube
    await page.goto('https://www.youtube.com/'); 
    //pick locator and click search bar and copy(ctrl+C)
    //Click the search box and enter the playlist name
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
   //pick locator and Verify the Search button is enabled before clicking it and copy(ctrl+C)
    await expect(page.getByRole('button', { name: 'Search', description: 'Search' })).toBeEnabled();
   // Click the Search button
    await page.getByRole('button', { name: 'Search', description: 'Search' }).click();
    // Wait for the search results to load
    await page.waitForTimeout(5000);
    // Open the required playlist from the search results
   //search for the playlist you want, off pick locator
   //pick locator on the playlist you want and ctrl+C 
   await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
   // Verify that the correct playlist page is opened
   //the playlist name copy and paste with -youtube
   await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube'); 
})