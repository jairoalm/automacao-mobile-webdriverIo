class HomePage {
  // Elemento localizado pelo texto exato
  get demoAppTextElement() {
    return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]');
  }

  /**
   * Clica no texto "Demo app for the appium-boilerplate"
   */
  async clicarNoTextoDemoApp() {
    await (await this.demoAppTextElement).waitForDisplayed({ timeout: 5000 });
    await this.demoAppTextElement.click();
  }

  /**
   * Valida que o texto está visível na tela
   */
  async validarTextoDemoAppEstaPresente() {
    await (await this.demoAppTextElement).waitForDisplayed({ timeout: 5000 });
    await expect(this.demoAppTextElement).toBeDisplayed();
    await expect(this.demoAppTextElement).toHaveText('Demo app for the appium-boilerplate');
  }
}

module.exports = new HomePage();