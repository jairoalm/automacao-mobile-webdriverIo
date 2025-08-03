const { expect } = require('@wdio/globals')
const formsPage = require('../pageobjects/forms.page')

describe('My forms application', () => {
    it('Preencher formulário sem erros', async () => {
        await formsPage.clickForms()
        await formsPage.component()
        await formsPage.validarTextoActiveButton()
    })
})