// Importa a função que lê dados do CSV por cenário
const { getLoginDataByScenario } = require('../utils/csvReader');
// Importa os objetos Page Objects que encapsulam as interações com a interface
const LoginPage = require('../pageobjects/login.page');
const UserPage = require('../pageobjects/cadastroUser.page');
const ComponentPage = require('../pageobjects/forms.page');

describe('Testes de login com CSV', () => {
    let users = {}; // Objeto para armazenar os dados de cada cenário carregados do CSV

    before(async () => {
        // Aqui, carregamos do CSV todos os cenários usados nos testes,
        // buscando os dados do arquivo uma única vez para otimizar execução.
        users['inválido_email'] = await getLoginDataByScenario('inválido_email');
        users['email_vazio'] = await getLoginDataByScenario('email_vazio');
        users['senha_vazia'] = await getLoginDataByScenario('senha_vazia');
        users['email_senha_vazios'] = await getLoginDataByScenario('email_senha_vazios');
        users['senha_fraca'] = await getLoginDataByScenario('senha_fraca');
        users['login_valido'] = await getLoginDataByScenario('login_valido');
        users['login_invalido'] = await getLoginDataByScenario('login_invalido');
    });

    beforeEach(async () => {
        // Antes de cada teste, acessa a tela de login para garantir estado inicial limpo
        await LoginPage.acessarLogin();
    });

    it('deve exibir erro para email inválido', async () => {
        await LoginPage.login(users['inválido_email']);
        await UserPage.validarErroEmail();
    });
    it('deve exibir erro para email vazio', async () => {
        await LoginPage.login(users['email_vazio']);
        await UserPage.validarErroEmail();
    });
    it('deve exibir erro para senha vazia', async () => {
        await LoginPage.login(users['senha_vazia']);
        await UserPage.validarErroSenha();
    });    
    it('deve exibir erro para email e senha vazios', async () => {  
        await LoginPage.login(users['email_senha_vazios']);
        await UserPage.validarErroEmail();
        await UserPage.validarErroSenha();
    });

    it('deve exibir erro para senha fraca', async () => {
        await LoginPage.login(users['senha_fraca']);
        await UserPage.validarErroSenha();
    });

    it('deve fazer login com sucesso', async () => {
        await LoginPage.login(users['login_valido']);
        await LoginPage.validarLoginSucesso();
        await ComponentPage.btnOK.click(); // Fechar o alerta de sucesso  
    });      
     it('deve exibir erro para email e senha inválidos', async () => {
        await LoginPage.login(users['login_invalido']);
        await UserPage.validarErroEmail();
        await UserPage.validarErroSenha();
        await ComponentPage.btnOK.click();
    });
});