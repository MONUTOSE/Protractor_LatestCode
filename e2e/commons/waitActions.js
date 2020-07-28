// module.exports = function () {

    var EC = protractor.ExpectedConditions;

    module.exports = function() {
    //wait till specified time
    this.wait = function (value) {
        browser.sleep(value | 2000);
    };
    //wait for element is displayed
    this.waitForElementIsDisplayed = function (element) {
        if (typeof element !== 'undefined') {
            browser.wait(function () {
                return element.isDisplayed();
            }, waitTimeout | 60000);
        }
    };
    //wait for element is not present
    this.waitForElementIsNotDisplayed = function (element) {
        if (typeof element !== 'undefined') {
            browser.wait(function () {
                return !element.isDisplayed();
            }, waitTimeout | 60000);
        }
    };
// fluent kind of wait
// click on button and wait at polling interval of 2 seconds till maximam 20 seconds.
this.clickandWait = function (element) {
    if (typeof element !== 'undefined') {
        element.isDisplayed().then(function () {
            browser.wait(function () {
                browser.sleep(1000);
                return element.isDisplayed();
            }, 20 * 1000).then(function () {
                element.isEnabled().then(function () {
                element.click();
                return this;
            });
        });
        });
    }
};
    //explicit kind of wait
    //click on an element and wait till another element displayed
    this.clickandVerify = function (element,element1) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.click().then(function () {
                        browser.wait(EC.visibilityOf(element1, 20000));
                        return this;
                });
            });
        });
    };
};
    //click on an element and wait till expected condition
    this.ClickAndWait_ExpectedCondition = function (element,condition,text) {
        if (typeof element !== 'undefined') {
            switch (condition) {
                case 'visibilityOf':
                    browser.wait(EC.visibilityOf(element), 10000);
                    element.click();
                  break; 
                case 'presenceOf':
                    browser.wait(EC.presenceOf(element), 5000);
                    element.click();
                  break;
                case 'elementTobeSelected':
                    browser.wait(EC.elementToBeSelected(element), 5000);
                    element.click();
                  break;
                case 'invisibilityOf':
                    browser.wait(EC.invisibilityOf(element), 10000);
                    element.click();
                  break;
                case 'stalenessOf':
                    browser.wait(EC.stalenessOf(element), 5000);
                    element.click();
                  break;
                case 'elementToBeClickable':
                    browser.wait(EC.elementToBeClickable(element), 5000);
                    element.click();
                  break;
                case 'textToBePresentInElement':  
                    browser.wait(EC.textToBePresentInElement(element,text), 10000);
                    element.click();
                  break;
                case 'textToBePresentInElementValue': 
                    browser.wait(EC.textToBePresentInElementValue(element,text), 10000);
                    element.click();
                  break;
                case 'titleContains': 
                    browser.wait(EC.titleContains(text), 10000);
                    element.click();
                  break;
                case 'titleIs': 
                  browser.wait(EC.titleIs(text), 10000);
                  element.click();
                break;
                case 'urlContains': 
                  browser.wait(EC.urlContains(text), 10000);
                  element.click();
                break;
                case 'urlIs': 
                  browser.wait(EC.urlIs(text), 10000);
                  element.click();
                break;
                case 'alertIsPresent': 
                browser.wait(EC.alertIsPresent(), 5000);
                element.click();
                break;
                default:
                    browser.wait(EC.textToBePresentInElement(element, 'foo'), 5000);
                    element.click();
              }
        }
    };
    //wait for element for polling interval
    this.waitForElementInPollingEvery = function (element) {
        if (typeof element !== 'undefined') {
            browser.wait(function () {
                browser.sleep(1000);
                return element.isDisplayed();
            }, 20 * 1000);
        }
    };
 };
