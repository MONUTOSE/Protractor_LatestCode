// module.exports = function () {

module.exports = function() {
  
    //Is element is present , Use of ispresent
    this.isElementpresent = function (element) {
    if (typeof element !== 'undefined') {
        return element.isPresent()
    }
   };
     //Is element is present , Use of iselementpresent for checking child element
    this.isChildElementpresent = function (childelement) {
    if (typeof parentelementelement !== 'undefined') {
        return browser.isElementPresent(childelement)
    }
   };
    //verify element is displayed
    this.isElementDisplayed = function (element) 
    {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () 
            {
                return this;
            })
        }
    }
    //verify element is enabled
    this.isElementEnabled = function (element) 
    {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () 
                {
                    return this;
                })
            })
        }
    }
    //verify element is selected
    this.isElementSelected = function (element) 
    {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isSelected().then(function () 
                   {
                      return this;
                   })
            })
        }
    }
    //verify checkbox is checked
    this.isCheckboxChecked = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.isSelected().then(function () 
                    {
                        return this;
                    });
                });
            });
        }
    };
    //verify radio button is selected
    this.isRadioButtonSelected = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.isSelected().then(function () 
                    {
                        return this;
                    });
                });
            });
        }
    };
    //Getting the URL and verifyng it.
this.verifyURL = function(url) {
    var applicationURL = browser.getCurrentUrl();
    applicationURL.then(textURL =>{
        expect(textURL).toBe(url);
    })          
}
    // get the title and verfiy it with some value
this.verifyTitle= function (title) {
    var applicationTitle = browser.getTitle();
    applicationTitle.then(textTitle =>{
        expect(textTitle).toContain(title);
    })           
   }

   this.getTextOfElement = function (element , text) 
   {
   var textOfElement = element.getText();
   textOfElement.then(textTitle =>{
       expect(textTitle).toBe(text);
   })           
  }
    //verify a value in input box using attribute
    this.verifyValueForAttribute = function (element, value1, value2) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof element !== 'undefined') 
                    {
                        expect(element.getAttribute(value1)).toEqual(value2);
                    }
                });
            });
        }
    };
    //verify a value in input box using tagname
    this.verifyValueForTagName = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') 
                    {
                        expect(element).getTagName().toBe(value);
                    }
                     
                });
            });
        }
    };
    //verify a value in input box using css
    this.verifyValueForCSS = function (element, value1, value2) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') 
                    {
                        actualValue=element.getCssValue(value1).toEqual(value2);
                    }
                    return actualValue;
                });
            });
        }
    };
    //Verify location of element with passing value of x and y axis
    this.verifyLocationOfWEbElement = function(element, x_value, y_value){

        expect(element.getLocation()).toEqual(jasmine.objectContaining({
            x: x_value,
            y: y_value
         }))
    }
    //Verify size of element with passing value of height and width
    this.verifySizeOfWEbElement = function(element,expected_width, expected_height){
        expect(element.getSize()).toEqual(jasmine.objectContaining({
            width: expected_width,
            height: expected_height
         }))
    }
 };
 
 



