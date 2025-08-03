const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ComponentPage {
    /**
     * define selectors using getter methods
     */

    get forms() {
        return $('//android.widget.TextView[@text="Forms"]');
    }

    get inputField () {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    get clickSelectDropdown () {
        return $('//android.widget.TextView[@text="󰅀"]');
    }

    get selectDropdown () {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]');
    }

    get btnActive () {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup');
    }

    get btnOK (){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get demoAppTextElement() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }
    
    async clickForms() {
        await this.forms.waitForDisplayed({ timeout: 5000 });
        await this.forms.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async component () {
        await this.inputField.setValue('Sample Text');
        await this.clickSelectDropdown.click();
        await this.selectDropdown.waitForDisplayed({ timeout: 5000 })
        await this.selectDropdown.click();
        await this.btnActive.click();
    }
    
    async validarTextoActiveButton() {
        await expect(this.demoAppTextElement).toHaveText('This button is active');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('component');
    }
}

module.exports = new ComponentPage();
