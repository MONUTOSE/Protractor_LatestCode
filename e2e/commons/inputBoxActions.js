module.exports = function () {

    //type a value in input box
    this.type = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') 
                    {
                        element.sendKeys(value);
                    }
                    return this;
                });
            });
        }
    };
    //type a value in input box and press enter key
    this.typeAndEnter = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.clear();
                    if (typeof value !== 'undefined') 
                    {
                        element.sendKeys(value + '\13');
                    }
                    return this;
                });
            });
        }
    };
    //clear an value from the input text box
    this.clearText = function (element) {
    if (typeof element !== 'undefined') {
        element.isDisplayed().then(function () {
            browser.wait(function () {
                browser.sleep(1000);
                return element.isDisplayed();
            }, 20 * 1000).then(function () {
                element.isEnabled().then(function () {
                element.clear();
            });
         });
        });
      }
    };
};