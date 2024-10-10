import BaseComponent from './BaseComponent'
import {Locator, Page} from 'playwright'


export default class SideBar extends BaseComponent{

    public depositBtn: Locator
    private container: Locator

    constructor(page: Page){
    super(page)
    
    this.container = page.locator('aside > div')

    this.depositBtn = page.locator("xpath=//div[contains(@class, 'mb-3')]/button[contains(@class, 'button-primary ')]")
    }
}