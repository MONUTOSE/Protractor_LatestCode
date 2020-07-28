module.exports = function () {

    //mouse move on a element
    this.mouseMove_DoubleClick = function (xValue, yValue) {
        if (typeof element !== 'undefined') {
            browser.actions().mouseMove({x: xValue,y:yValue}).doubleClick().perform(); 
        }
    };
    //mouse move on a element
    //mouse move to a element
    this.mouseMove = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().mouseMove(element).perform();
                return this;
            });
        }
    };
     //mouse move one element to other location
     this.mouseMove_SiftElement = function (element,x_value,y_value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().mouseMove(element).mouseMove({x: x_value, y: y_value}).doubleClick().perform();
                return this;
            });
        }
    };
    //mouse up on a element
    this.mouseUp = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().mouseUp(element).perform();
                return this;
            });
        }
    };
    //mouse down on a element
    this.mouseDown = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().mouseDown(element).perform();
                return this;
            });
        }
    };
    //Duoble click on element
    this.doubleClick = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().mouseDown(element).doubleClick().perform();
                return this;
            });
        }
    };
    //Drag and drop two elements
    this.dragAndDrop = function (element1,element2) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().dragAndDrop(element1, element2).perform();
                return this;
            });
        }
    };
    //Drag and drop one element
    this.dragAndDrop_Element = function (element,x_value,y_value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                browser.actions().dragAndDrop(element,{x:x_value,y:y_value}).perform();
                return this;
            });
        }
    };
    //using switch method to switch to on an frame
    this.switchToElement = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () 
                {
                    browser.switchTo().frame(element).getWebElement();
                    return this;
                });
            });
        }
    };
    // scrolling the page till the element shows
    this.ScrollIntoView = function (element) {
        browser.executeScript("arguments[0].scrollIntoView();", element);
    };
    // Scroll to element and click
    this.ScrollIntoViewAndClick = function (element) {
        browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement()).then(function(){
            element.click();
         });
    };
    // scroll to the Top of page
    this.ScrollAtTop = function () {
        browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
    };
    // Scroll to the down of the page
    this.ScrollAtDown = function () {
        browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    };
    
    this.moveElement = function(element,x_value,y_value){
        return browser.actions().mouseMove(element, {
        x: x_value,
        y: y_value, }).perform().then(() => browser.actions().click().perform());
    }
};
