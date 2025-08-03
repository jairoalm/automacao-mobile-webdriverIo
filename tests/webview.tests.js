const { expect } = require('@wdio/globals');
const WebviewPage = require('../pageobjects/webview.page');

describe('Webview Feature', () => {
    it('Deve acessar o menu Webview, clicar em Get Started e validar o texto de boas-vindas', async () => {
        await WebviewPage.clickWebviewMenu();
        await WebviewPage.clickGetStarted();
        await WebviewPage.validateWelcomeText();
    });
    
    it('Deve acessar o menu lateral da página Weview', async () => {
        await WebviewPage.clickWebviewMenu();
        await WebviewPage.clickGetMeu();
        await WebviewPage.validateDocsVisible();
    });
});