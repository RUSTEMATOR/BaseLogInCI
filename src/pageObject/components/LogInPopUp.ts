import { Page, Locator } from "playwright";
import BaseComponent from "../../components/BaseComponent";


export default class LogInPopUp extends BaseComponent {

    private emailInput: Locator
    private passwordInput: Locator
    private logInBtn: Locator
    private emailField: Locator
    private passwordField: Locator
    private subitLoginBtn: Locator


    constructor(page: Page) {
        super(page)

        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password')
        this.emailField = page.getByText('E-mail')
        this.passwordField = page.getByText('Password')
        this.subitLoginBtn = page.locator("xpath=//div/div/button[contains(@class, 'button-secondary') and contains(text(), 'Log in')]")
    } 

    async fillEmail(email: string) {
        await this.emailInput.fill(email)
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password)
    }

    async submitLogInBtn() {
        await this.subitLoginBtn.click()
    }
}