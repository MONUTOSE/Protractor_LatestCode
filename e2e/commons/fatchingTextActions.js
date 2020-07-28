module.exports = function () {

    // Gettng the URL of Current page
    this.getURL = function() {
    var applicationURL = browser.getCurrentUrl();
    applicationURL.then(textURL =>{
       })        
    }
    // get the title of page
    this.getTitle = function () {
      var applicationTitle = browser.getTitle();
      applicationTitle.then(textTitle =>{
      })           
    }
    this.getTextOfElement = function (textOfElement) {
        if (typeof element !== 'undefined') {
           return textOfElement.getText();
        }
    }
    //Getting count of list of elements
    this.getCountOfAllElements = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.count();
        }
    }
    //Getting text of all elements
    this.getTextOfAllElements = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.getText();
        }
    }
    //Getting text of particular one element
    this.getTextOf_OneElement = function (allElements,index) {
        if (typeof element !== 'undefined') {
           return allElements.get(index).getText();
        }
    }
    //Getting first element from element list
    this.getFirstElement = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.first();
        }
    }
    //Getting last element from element list
    this.getLastElement = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.last();
        }
    }
    //Getting each element from element list
    this.getEachElement = function (allElements) {
        if (typeof element !== 'undefined') {
            allElements.each(function(element, index) {
                return element.getText();
            })
        } 
    }
    //Getting map with index and text of element from element list
    this.getMapElement = function (allElements) {
        if (typeof element !== 'undefined') {
            let items = allElements.map(function(elm, index) {
                return {
                  index: index,
                  text: elm.getText(),
                  class: elm.getAttribute('class')
                };
            });
            return items;
        } 
    }
    //Getting reduced element with concatinated from element list
    this.getReducedElement = function (allElements) {
        if (typeof element !== 'undefined') {
        let value = allElements.reduce(function(acc, elem) {
            return elem.getText().then(function(text) {
                  return acc + text + ' ';
            });
        }, '');
          return value;    
        } 
    }
    this.getLocationOfElement = function (locationOfElement) {
        if (typeof element !== 'undefined') {
           return locationOfElement.getLocation();
        }
    }
    this.getSizeOfElement = function (sizeOfElement) {
        if (typeof element !== 'undefined'){
           return sizeOfElement.getSize();
        }
    }

    // Getting the source of page
    this.getPageSource = function() {
        var pagesourcedata = browser.getPageSource();
        pagesourcedata.then(pagesourcedatails =>{
            console.log(pagesourcedatails)
            return pagesourcedatails;
    })        
}
     //Get a value in input box using attribute
     this.getValueForAttribute = function (element, value) {
        if (typeof element !== 'undefined') {
            if (typeof value !== 'undefined'){
                 actualValue=element.getAttribute(value);
            }
             return actualValue;
        }
    };
    //Get a value in input box using tagname
    this.getValueForTagName = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof element !== 'undefined') 
                    {
                        actualValue = element.getTagName();
                    }
                    return actualValue;
                });
            });
        }
    };
    //verify a value in input box using css
    this.getValueForCSS = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') 
                    {
                        actualValue=element.getCssValue(value);
                    }
                    return actualValue;
                });
            });
        }
    };
    
     this.getCountOfAllElements = function (allElements) {
        if (typeof element !== 'undefined') {
           return allElements.count();
        }
    }
}