const formsPage = require('../pageobjects/forms.page')

describe('Teste do meu formulário', () => {
    it('Preencher formulário sem erros', async () => {
        await formsPage.clickForms()
        await formsPage.component()
        await formsPage.validarTextoActiveButton()
    })
})