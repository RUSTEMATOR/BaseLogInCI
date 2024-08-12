import BaseComponent from './BaseComponent'
import {Locator, Page} from 'playwright'


export default class SideBar extends BaseComponent{

    public depositBtn: Locator
    private container: Locator

    constructor(page: Page){
    super(page)
    
    this.container = page.locator('aside > div')

    this.depositBtn = this.container.locator('button.btn', {hasText: 'Deposit'})

    }
}