class DragPage {

    get dragPage() {
        return $('//android.widget.TextView[@text="Drag"]');
    }

    get dragText() {
        return $('//android.widget.TextView[@text="Drag and Drop"]');
    }

    get dragElement() {
        return $('//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView');
    }

    get dropTarget() {
        return $('//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup');
    }

    get dragSegundElement() {
        return $('//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView');
    }

    get dropSegundTarget() {
        return $('//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup');
    }

    get dragElementC3() {
        return $('//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView');
    }

    get dropTargetC3() {
        return $('//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup');
    }

    get dragElementL1() {
        return $('//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView');
    }

    get dropTargetL1() {
        return $('//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup');
    }

    get dragElementL2() {
        return $('//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView');
    }

    get dropTargetL2() {
        return $('//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup');
    }

    get dragElementL3() {
        return $('//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView');
    }

    get dropTargetL3() {
        return $('//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup');
    }  
    
    get dragElementR1() {
        return $('//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView');
    }

    get dropTargetR1() {
        return $('//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup');
    } 

     get dragElementR2() {
        return $('//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView');
    }

    get dropTargetR2() {
        return $('//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup');
    }

     get dragElementR3() {
        return $('//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView');
    }

    get dropTargetR3() {
        return $('//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup');
    }

    get retryText() {
        return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]');
    }

    get retryButton() {
        return $('//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup');
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
        await expect(this.retryText).toHaveText('You made it, click retry if you want to try it again.', { timeout: 5000 });
    }

    async dragAndDrop() {
        const drag = await this.dragElement;
        const drop = await this.dropTarget;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        // Pega as posições dos elementos para calcular o movimento
        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        // Calcula o centro do elemento drag
        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        // Calcula o centro do alvo drop
        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        // Executa o drag and drop simulando toque, movimento e soltura
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 500, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);  // Espera a animação terminar
        await driver.releaseActions();
    }

    async dragAndDropSegund() {
        const drag = await this.dragSegundElement;
        const drop = await this.dropSegundTarget;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }
    
    async dragAndDropC3() {
        const drag = await this.dragElementC3;
        const drop = await this.dropTargetC3;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }


    async dragAndDropL1() {
        const drag = await this.dragElementL1;
        const drop = await this.dropTargetL1;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }

    async dragAndDropL2() {
        const drag = await this.dragElementL2;
        const drop = await this.dropTargetL2;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }

    async dragAndDropL3() {
        const drag = await this.dragElementL3;
        const drop = await this.dropTargetL3;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }

    async dragAndDropR1() {
        const drag = await this.dragElementR1;
        const drop = await this.dropTargetR1;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }

    async dragAndDropR2() {
        const drag = await this.dragElementR2;
        const drop = await this.dropTargetR2;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }

    async dragAndDropR3() {
        const drag = await this.dragElementR3;
        const drop = await this.dropTargetR3;

        await drag.waitForDisplayed({ timeout: 5000 });
        await drop.waitForDisplayed({ timeout: 5000 });

        const dragLocation = await drag.getLocation();
        const dropLocation = await drop.getLocation();
        const dragSize = await drag.getSize();
        const dropSize = await drop.getSize();

        const startX = dragLocation.x + dragSize.width / 2;
        const startY = dragLocation.y + dragSize.height / 2;

        const endX = dropLocation.x + dropSize.width / 2;
        const endY = dropLocation.y + dropSize.height / 2;

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 700, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        await driver.releaseActions();
    }
}

module.exports = new DragPage();