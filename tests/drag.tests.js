const DragPage = require('../pageobjects/drag.page');

describe('Funcionalidade Drag and Drop', () => {
    beforeEach(async () => {
        await DragPage.acessarPaginaDrag();});

    it('Deve arrastar o elemento para o local correto', async () => {
        await DragPage.dragAndDrop();
        await DragPage.dragAndDropSegund();
        await DragPage.dragAndDropC3();
        await DragPage.dragAndDropL1();
        await DragPage.dragAndDropL2();
        await DragPage.dragAndDropL3();
        await DragPage.dragAndDropR1();
        await DragPage.dragAndDropR2();
        await DragPage.dragAndDropR3();
        await DragPage.validarDragAndDrop();
        await DragPage.clickRetry();
    });
});