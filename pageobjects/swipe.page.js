// A classe SwipePage controla a interação com a tela de swipe do app WebdriverIo, localizando cards e textos específicos. Ela realiza gestos de swipe para esquerda e direita no primeiro card da lista. 
// Também valida a visibilidade e o conteúdo textual dos elementos durante os testes.

class SwipePage {
    get swipePage() {
        return $('//android.widget.TextView[@text="Swipe"]');
    }

    get firstCard() {
        return $('(//android.view.ViewGroup[@content-desc="card"])[1]');
    }

    get getTextFirstCard() {
        return $('(//android.widget.TextView[@text="FULLY OPEN SOURCE"])[1]');
    }

    get getTextSecundCard() {
        return $('(//android.widget.TextView[@text="GREAT COMMUNITY"])[1]');
    }

    get swipeText() {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }

    async acessarPaginaSwipe() {
        await this.swipePage.waitForDisplayed({ timeout: 5000 });
        await this.swipePage.click();
        await expect(this.swipeText).toBeDisplayed();
        await expect(this.swipeText).toHaveText('Swipe horizontal', { timeout: 5000 });
    }

    async validarTextCard(element, message) {
        await expect(element).toBeDisplayed();
        await expect(element).toHaveText(message, { timeout: 5000 });
    }

    // Método que realiza o swipe para a esquerda no primeiro card
    async swipeLeftOnFirstCard() {
        const card = await $('(//android.view.ViewGroup[@content-desc="card"])[1]');
        await card.waitForDisplayed({ timeout: 5000 }); // espera o card estar visível

        // Pega posição e tamanho do card para calcular os pontos do swipe
        const location = await card.getLocation();
        const size = await card.getSize();

        // Define ponto inicial do swipe (próximo da borda direita)
        const startX = location.x + size.width * 0.9;
        // Define ponto final do swipe (próximo da borda esquerda)
        const endX = location.x + size.width * 0.1;
        // Y central do card para fazer swipe horizontal
        const y = location.y + size.height / 2;

        // Executa a ação de swipe simulando o toque e movimento na tela
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y }, // move para início do swipe
                { type: 'pointerDown', button: 0 }, // toca a tela
                { type: 'pause', duration: 100 }, // pausa breve
                { type: 'pointerMove', duration: 300, x: endX, y }, // move para a esquerda
                { type: 'pointerUp', button: 0 } // solta o toque
            ]
        }]);

        await driver.pause(1000); // pausa para animação de swipe terminar
        await driver.releaseActions(); // limpa as ações do driver

    }

    // Método que realiza o swipe para a direita no primeiro card
    async swipeRightOnFirstCard() {
        const card = await $('(//android.view.ViewGroup[@content-desc="card"])[1]');
        await card.waitForDisplayed({ timeout: 5000 }); // espera o card estar visível

        // Pega posição e tamanho do card para calcular os pontos do swipe
        const location = await card.getLocation();
        const size = await card.getSize();

        // Define ponto inicial do swipe (próximo da borda esquerda)
        const startX = location.x + size.width * 0.1;
        // Define ponto final do swipe (próximo da borda direita)
        const endX = location.x + size.width * 0.9;
        // Y central do card para fazer swipe horizontal
        const y = location.y + size.height / 2;

        // Executa a ação de swipe simulando o toque e movimento na tela
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y }, // move para início do swipe
                { type: 'pointerDown', button: 0 }, // toca a tela
                { type: 'pause', duration: 100 }, // pausa breve
                { type: 'pointerMove', duration: 300, x: endX, y },  // move para a direita
                { type: 'pointerUp', button: 0 } // solta o toque
            ]
        }]);

        await driver.pause(1000); // pausa para animação de swipe terminar
        await driver.releaseActions(); // limpa as ações do driver
    }


}

module.exports = new SwipePage();