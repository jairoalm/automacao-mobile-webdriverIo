const userData = require('../data/userData.json');
class UserPage {

    // Elementos
    get menuLogin() {
        return $('//android.widget.TextView[@text="Login"]');
    }

    get clickSignUp() {
        return $('//android.widget.TextView[@text="Sign up"]'); 
    }

    get inputEmail () {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get inputConfirmPassword () {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    }

    get btnSignUp () {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup');
    }

    // Mensagens de erro
    get erroTextElementEmail() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get erroTextElementPassword() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }
    
    get erroTextElementConfirmPassword() {
        return $('//android.widget.TextView[@text="Please enter the same password"]');
    }

    get successTextElement() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    // Navega até o cadastro
    async abrirCadastro() {
        await this.menuLogin.waitForDisplayed({ timeout: 5000 });
        await this.menuLogin.click();
        await this.clickSignUp.waitForDisplayed({ timeout: 5000 });
        await this.clickSignUp.click();
    }

    async cadastrarUsuario(dados) {
        // await this.acessarCadastro();
        await this.inputEmail.setValue(dados.email);
        await this.inputPassword.setValue(dados.password);
        await this.inputConfirmPassword.setValue(dados.confirmPassword);
        await this.btnSignUp.click();
    }

    // Validações de erro
    async validarErroEmail() {
        await expect(this.erroTextElementEmail).toBeDisplayed();
        await expect(this.erroTextElementEmail).toHaveText('Please enter a valid email address');
    }

    async validarErroSenha() {
        await expect(this.erroTextElementPassword).toBeDisplayed();
        await expect(this.erroTextElementPassword).toHaveText('Please enter at least 8 characters');
    }

    async validarErroConfirmSenha() {
        await expect(this.erroTextElementConfirmPassword).toBeDisplayed();
        await expect(this.erroTextElementConfirmPassword).toHaveText('Please enter the same password');
    }

    async validarCadastroSucesso() {
        await expect(this.successTextElement).toBeDisplayed();
        await expect(this.successTextElement).toHaveText('You successfully signed up!', { timeout: 5000 });
    }

    // Método opcional
    open () {
        return super.open('preencherFormulario');
    }
}

module.exports = new UserPage();