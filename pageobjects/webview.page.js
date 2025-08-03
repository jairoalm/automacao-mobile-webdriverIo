class WebviewPage {
    // Elementos
    get webviewMenu() {
        return $('//android.widget.TextView[@text="Webview"]');
    }

    get getMeu(){
        // return $('//android.widget.Button[@text="Toggle navigation bar"]');
        return $('//android.view.View[@text="Main"]//android.widget.Button[@text="Toggle navigation bar"]');
    }

    get getStartedButton() {
        return $('//android.view.View[@content-desc="Get Started"]');
    }

    get welcomeText() {
        return $('//android.widget.TextView[contains(@text, "Welcome to the WebdriverIO documentation")]');
    }

    get menuText() {
        return $('//android.widget.TextView[@text="Docs"]');    
    }

    // Ações
    async clickWebviewMenu() {
        await this.webviewMenu.waitForDisplayed({ timeout: 5000 });
        await this.webviewMenu.click();
    }

    async clickGetStarted() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("Get started"))');
        await this.getStartedButton.waitForDisplayed({ timeout: 5000 }).click
        await this.getStartedButton.click();
       
    }

    async clickGetMeu() {
        await this.getMeu.waitForDisplayed({ timeout: 10000 })
        await this.getMeu.click();
    }

    async validateDocsVisible() {
        const isVisible = await this.menuText.isDisplayed();
        expect(isVisible).toBe(true);
    }

    async validateWelcomeText() {
        await this.welcomeText.waitForDisplayed({ timeout: 10000 });
        const isVisible = await this.welcomeText.isDisplayed();
        expect(isVisible).toBe(true);
    }
}

module.exports = new WebviewPage();