import { Locator, Page,  } from "playwright";
import {expect} from '@playwright/test';



export default class BasePage {

    public page: Page;
    private url: string;
    private waitPageLocator: Locator;
    public tournamentBanner: Locator

    constructor(page: Page, url: string, waitPageLocator: Locator) {
        this.page = page
        this.url = url
        this.waitPageLocator = waitPageLocator
    }

    async navigate() {
        await this.page.goto(this.url)
        await expect(this.waitPageLocator).toBeVisible()
    }

}