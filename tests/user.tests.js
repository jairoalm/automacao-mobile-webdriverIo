const { expect } = require('@wdio/globals');

const UserPage = require('../pageobjects/cadastroUser.page');
const userData = require('../data/userData.json'); // Importando os dados do usuário

describe('Validação do formulário de cadastro', () => {

    beforeEach(async () => {
        await UserPage.abrirCadastro(); // comum para todos
    });

    it('deve exibir erros com todos os campos vazios', async () => {
        await UserPage.cadastrarUsuario(userData.emptyFields); // nenhum campo preenchido
        await UserPage.validarErroEmail();
        await UserPage.validarErroSenha();
        await UserPage.validarErroConfirmSenha();
    });

    it('deve exibir erro para email inválido', async () => {
        await UserPage.cadastrarUsuario(userData.invalidEmail);
        await UserPage.validarErroEmail();
    });

    it('deve exibir erro para senha fraca', async () => {
        await UserPage.cadastrarUsuario(userData.invalidPassword);
        await UserPage.validarErroSenha();
    });

    it('deve exibir erro quando a confirmação de senha não confere', async () => {
        await UserPage.cadastrarUsuario(userData.invalidConfirmPassword);
        await UserPage.validarErroConfirmSenha();
    });

    it('deve exibir erro quando a confirmação não tiver e-mail', async () => {
        await UserPage.cadastrarUsuario(userData.onlyEmail);
        await UserPage.validarErroEmail();
    });

    it('deve exibir erro quando a confirmação não tiver password', async () => {
        await UserPage.cadastrarUsuario(userData.onlyPassword);
        await UserPage.validarErroSenha();
    });

    it('deve exibir erro quando a confirmação não tiver comparação de password', async () => {
        await UserPage.cadastrarUsuario(userData.onlyConfirmPassword);
        await UserPage.validarErroConfirmSenha();
    });

    it('deve exibir erro quando a confirmação não tiver e-mail e password', async () => {
        await UserPage.cadastrarUsuario(userData.onlyEmailPassword);
        await UserPage.validarErroEmail();
        await UserPage.validarErroSenha();
    });

    it('deve exibir erro quando a confirmação não tiver e-mail e comparação de password', async () => {
        await UserPage.cadastrarUsuario(userData.onlyEmailConfirmPassword);
        await UserPage.validarErroEmail();
        await UserPage.validarErroConfirmSenha();
    });

    it('deve cadastrar com sucesso quando todos os dados estão corretos', async () => {
        await UserPage.cadastrarUsuario(userData.validUser);
        await UserPage.validarCadastroSucesso();
    });
});