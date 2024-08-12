import { Page, Locator } from "playwright";
import BasePage from "./BasePage";
import LogInPopUp from "./components/LogInPopUp";

export default class MainPage extends BasePage {

    private logInBtn: Locator
    public depositBtn: Locator

    constructor(page: Page) {
        super(page, '/', page.locator('button', {hasText: 'Sign up'}))

        this.logInBtn = page.getByTitle("Log in")
        this.depositBtn = page.getByText('Deposit')
        
    }

    async clickLogInBtn(){
        await this.logInBtn.click({timeout: 99999})
        return new LogInPopUp(this.page)
    }



}