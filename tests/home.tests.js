const { expect } = require('@wdio/globals');
// Importando a página HomePage
const HomePage = require('../pageobjects/home.page');

describe('Validação da Home Page', () => {
  it('deve clicar e validar o texto Demo App', async () => {
    await HomePage.clicarNoTextoDemoApp();
    await HomePage.validarTextoDemoAppEstaPresente();    
    // Aqui você pode validar o que acontece depois do clique, se necessário
  });
});
