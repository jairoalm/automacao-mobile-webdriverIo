const DragPage = require('../pageobjects/drag.page');

describe('Teste Funcionalidade Drag and Drop', () => {
    beforeEach(async () => {
        await DragPage.acessarPaginaDrag();
    });

    it('Deve arrastar os elementos para os locais corretos', async () => {
        await DragPage.dragAndDropById('c1');
        await DragPage.dragAndDropById('c2');
        await DragPage.dragAndDropById('c3');
        await DragPage.dragAndDropById('l1');
        await DragPage.dragAndDropById('l2');
        await DragPage.dragAndDropById('l3');
        await DragPage.dragAndDropById('r1');
        await DragPage.dragAndDropById('r2');
        await DragPage.dragAndDropById('r3');

        await DragPage.validarDragAndDrop();
        await DragPage.clickRetry();
    });
});