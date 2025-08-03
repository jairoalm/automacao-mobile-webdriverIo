// Esse arquivo implementa a Page Object Model (POM) para a tela de login do aplicativo mobile. 
// Ele encapsula os elementos da interface e os comportamentos da tela de login, 
// facilitando a reutilização e manutenção dos testes automatizados.

// Define uma classe para representar a página de login
class LoginPage {

    // Elemento do menu "Login" na tela inicial
    get menuLogin() {
        return $('//android.widget.TextView[@text="Login"]');
    }

    get messagePaginaLogin() {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]');
    }

    // Campo de entrada para o e-mail
    get inputEmail() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    // Campo de entrada para a senha
    get inputPassword() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    // Botão de login
    get btnLogin() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }

    // Mensagem exibida após login bem-sucedido
    get messageLoginSucesso() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    // Método para acessar a tela de login
    async acessarLogin() {
        await this.menuLogin.waitForDisplayed({ timeout: 5000 });
        await this.menuLogin.click();
        await expect(this.messagePaginaLogin).toBeDisplayed();
        await expect(this.messagePaginaLogin).toHaveText('Login / Sign up Form', { timeout: 5000 });
    }

    // Método genérico para realizar login
    // Recebe um objeto `user` contendo as propriedades `email` e `password`
    async login(user) {
        await this.inputEmail.setValue(user.email);
        await this.inputPassword.setValue(user.password);
        await this.btnLogin.click();
    }

    // Método para validar o sucesso do login
    async validarLoginSucesso() {
        await expect(this.messageLoginSucesso).toBeDisplayed();
        await expect(this.messageLoginSucesso).toHaveText('You are logged in!', { timeout: 5000 });
    }

}

module.exports = new LoginPage();