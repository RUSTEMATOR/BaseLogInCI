import {test, expect} from 'playwright/test';
import MainPage from '../src/pageObject/MainPage';
import SideBar from '../src/components/SideBar';


test.describe('BaseLogIn', () => {

    const email = 'samoilenkofluttershy@gmail.com'
    const password = '193786Az()'


    test('Check if user can log in', async ({page}) => {

        await page.addLocatorHandler(page.locator("xpath=//*[@id='Tombriches']/div[2]/div/div/div/div/button"), async () => {
            await page.getByTitle('Cancel').click()
        });

        await page.addLocatorHandler(page.locator('.deposit-card'), async () => {
            await page.locator('div.flex > svg.cursor-pointer').click()
        })

        const mainPage = new MainPage(page)
        const sideBar = new SideBar(page)


        await mainPage.navigate()
        const logInPopUp = await mainPage.clickLogInBtn()

        await logInPopUp.fillEmail(email)
        await logInPopUp.fillPassword(password)
        await logInPopUp.submitLogInBtn()

        await expect(sideBar.depositBtn).toBeVisible()
        await expect(page.locator('div.content > div > h1').filter({hasText: 'Tomb Riches Casino'})).toBeVisible()

    })

})

     