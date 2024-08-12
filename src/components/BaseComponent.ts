import { Page } from "playwright";

export default class BaseComponent{

    constructor(page: Page) {
        page = page;
    }
}