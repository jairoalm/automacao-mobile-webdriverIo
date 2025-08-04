const SwipePage = require('../pageobjects/swipe.page');

describe('Teste das funcionalidades de Swipe Horizontal', () => {
    beforeEach(async () => {
        await SwipePage.acessarPaginaSwipe();
    });

    it('Deve realizar swipe para a esquerda no primeiro card', async () => {
        await SwipePage.swipeLeftOnFirstCard();
        await SwipePage.validarTextCard(SwipePage.getTextSecundCard, 'GREAT COMMUNITY');
    });

    it('Deve realizar swipe para a direita no primeiro card', async () => {
        await SwipePage.swipeLeftOnFirstCard();
        await SwipePage.swipeRightOnFirstCard();
        await SwipePage.validarTextCard(SwipePage.getTextSecundCard, 'GREAT COMMUNITY');
    });
});