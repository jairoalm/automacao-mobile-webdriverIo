class DragPage {

    get dragPage() {
        return $('//android.widget.TextView[@text="Drag"]');
    }

    get dragText() {
        return $('//android.widget.TextView[@text="Drag and Drop"]');
    }

    get retryText() {
        return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]');
    }

    get retryButton() {
        return $('//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup');
    }

    getDragElement(desc) {
        return $(`//android.view.ViewGroup[@content-desc="drag-${desc}"]/android.widget.ImageView`);
    }

    getDropTarget(desc) {
        return $(`//android.view.ViewGroup[@content-desc="drop-${desc}"]/android.view.ViewGroup`);
    }

    async acessarPaginaDrag() {
        await this.dragPage.waitForDisplayed({ timeout: 5000 });
        await this.dragPage.click();
        await expect(this.dragText).toBeDisplayed();
        await expect(this.dragText).toHaveText('Drag and Drop', { timeout: 5000 });
    }

    async clickRetry() {
        await this.retryButton.waitForDisplayed({ timeout: 5000 });
        await this.retryButton.click();
    }

    async validarDragAndDrop() {
        await expect(this.retryText).toBeDisplayed();
        await expect(this.retryText).toHaveText(
            'You made it, click retry if you want to try it again.', 
            { timeout: 5000 }
        );
    }

    // Método genérico que realiza o drag and drop entre dois elementos recebidos por parâmetro
    async performDragAndDrop(dragElement, dropTarget, pause = 300, duration = 700) {
        // Espera os elementos de origem e destino estarem visíveis
        await dragElement.waitForDisplayed({ timeout: 5000 });
        await dropTarget.waitForDisplayed({ timeout: 5000 });
        // Pega a posição (x, y) dos elementos
        const dragLocation = await dragElement.getLocation();
        const dropLocation = await dropTarget.getLocation();
        // Pega o tamanho (largura/altura) dos elementos
        const dragSize = await dragElement.getSize();
        const dropSize = await dropTarget.getSize();
        // Calcula o ponto central de cada elemento para realizar o drag and drop
        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;
        // Calcula o ponto central do elemento de destino
        // para onde o elemento arrastado será solto
        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        // Simula os toques na tela usando a API performActions do WebDriver
        await driver.performActions([{
            type: 'pointer', // tipo de ação: ponteiro (toque)
            id: 'finger1', // id do ponteiro
            parameters: { pointerType: 'touch' }, // tipo de ponteiro é toque (touch)
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY }, // move para o centro do elemento de origem
                { type: 'pointerDown', button: 0 }, // simula o toque (pressionar)
                { type: 'pause', duration: pause }, // pausa antes de mover
                { type: 'pointerMove', duration: duration, x: endX, y: endY }, // move para o centro do alvo (drag)
                { type: 'pointerUp', button: 0 } // solta o toque (drop)
            ]
        }]);

        // Espera um tempo para a animação acontecer
        await driver.pause(1000);
        // Libera as ações pendentes (boa prática após performActions)
        await driver.releaseActions();
    }

    // Método de atalho que recebe o ID (ex: 'c1', 'l3') e chama a função de drag and drop genérica
    async dragAndDropById(id, pause = 300, duration = 700) {
        // Busca os elementos de origem e destino com base no ID
        const drag = this.getDragElement(id);
        const drop = this.getDropTarget(id);
        // Executa o drag and drop
        await this.performDragAndDrop(drag, drop, pause, duration);
    }
}
module.exports = new DragPage();