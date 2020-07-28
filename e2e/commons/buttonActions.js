module.exports = function () {

    //click on an element
    this.click = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function (){
                    element.click();
                    return this;
                });
            });
        }
    };
    //Getting first element from element list
    this.clickFirstElement = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.first().click();
        }
    }
    //Getting last element from element list
    this.clickLastElement = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.last().click();
        }
    }
};
