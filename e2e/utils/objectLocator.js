
module.exports = function () {

    var webElement = null;

    this.getWebElements = function(locator, value){
        var locatorType = locator[0];
        var locatorValue = locator[1];

        if (typeof locatorType !== 'undefined') {
            if (locatorValue.includes('#REPLACE#')) {
                locatorValue = locatorValue.replace('#REPLACE#', value);
            }
            if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue)).getWebElement(); //this.webElement = $(locatorValue).getWebElement()
                }
            };
        };
        return this.webElement;
    };

    this.getDriver_forParentWebElement = function(locator, value){
        var locatorType = locator[0];
        var locatorValue = locator[1];

        if (typeof locatorType !== 'undefined') {
            if (locatorValue.includes('#REPLACE#')) {
                locatorValue = locatorValue.replace('#REPLACE#', value);
            }
            if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue)).getWebElement().getDriver();  
                };
            };
        };
        return this.webElement;
    };

    this.getId_WebDriverID_String = function(locator, value){
        var locatorType = locator[0];
        var locatorValue = locator[1];

        if (typeof locatorType !== 'undefined') {
            if (locatorValue.includes('#REPLACE#')) {
                locatorValue = locatorValue.replace('#REPLACE#', value);
            }
            if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue)).getWebElement().getId();  
                }
            };
        };
        return this.webElement;
    };

    this.findLocator = function (locator, value) {
        var locatorType = locator[0];
        var locatorValue = locator[1];

        if (typeof locatorType !== 'undefined') {
            if (locatorValue.includes('#REPLACE#')) {
                locatorValue = locatorValue.replace('#REPLACE#', value);
            }
            ////////////////////////////////////////////////////////////////////////
            if (locatorType == 'tagName') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.tagName(locatorValue));
                }
            } 
            else if (locatorType == 'id') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.id(locatorValue));
                }
            } 
            else if (locatorType == 'name') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.name(locatorValue));
                }
            } 
            else if (locatorType == 'className') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.className(locatorValue));
                }
            } 
            else if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue));   //this.webElement = $(locatorValue)
                }
            }
            else if (locatorType == 'linkText') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.linkText(locatorValue));
                }
            }
            else if (locatorType == 'partialLinkText') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.partialLinkText(locatorValue));
                }
            }
            else if (locatorType == 'xpath'){
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.xpath(locatorValue));
                }
            } 
            else if (locatorType == 'buttonText') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.buttonText(locatorValue));
                }
            } 
           else if (locatorType == 'partialButtonText') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.partialButtonText(locatorValue));
                }
            } 
           else if (locatorType == 'ng-bind') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.binding(locatorValue));
                }
            } 
           else if (locatorType == 'ng-exactBind') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.exactBinding(locatorValue));
                }
            }
           else if (locatorType == 'ng-model') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.model(locatorValue));
                }
            }            
           else if (locatorType == 'ng-repeat') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.repeater(locatorValue));
                }
            }   
           else if (locatorType == 'ng-exactRepeat') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.exactRepeater(locatorValue));
                }
            } 
        }
        return this.webElement;
    };

    this.findLocator_ElementAll = function (locator, value) 
    {
        var locatorType = locator[0];
        var locatorValue = locator[1];

        if (typeof locatorType !== 'undefined') 
        {
            if (locatorValue.includes('#REPLACE#')) 
            {
                locatorValue = locatorValue.replace('#REPLACE#', value);
            }
            ////////////////////////////////////////////////////////////////////////
            if (locatorType == 'tagName') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.tagName(locatorValue));
                }
            } 
            else if (locatorType == 'id') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.id(locatorValue));
                }
            } 
            else if (locatorType == 'name') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.name(locatorValue));
                }
            } 
            else if (locatorType == 'class') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.className(locatorValue));
                }
            } 
            else if (locatorType == 'css') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.css(locatorValue));  //this.webElement = $$(locatorValue)
                }
            }
            else if (locatorType == 'linkText') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.linkText(locatorValue));
                }
            }
            else if (locatorType == 'partialLinkText') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.partialLinkText(locatorValue));
                }
            }
            else if (locatorType == 'xpath') 
            {
                if (locatorValue !== 'undefined') {
                    this.webElement = element.all(by.xpath(locatorValue));
                }
            } 
            else if (locatorType == 'ng-options') 
            {
              if (locatorValue !== 'undefined') {
                  this.webElement = element.all(by.options(locatorValue));
              }
            } 
             else if (locatorType == 'deepCss') 
             {
              if (locatorValue !== 'undefined') {
                  this.webElement = element.all(by.deepCss(locatorValue));
               }
             } 
             else if (locatorType == 'ng-repeat') 
             {
              if (locatorValue !== 'undefined') {
                  this.webElement = element.all(by.repeater(locatorValue));
               }
             }                    
        }
        return this.webElement;
    };

//Pending
    this.functionLocator_css = function (locator, value1, value2) 
  {
      var locatorType = locator[0];
      var locatorValue1 = locator[1];
      var locatorValue2 = locator[2];

      if (typeof locatorType !== 'undefined') 
      {
         if (locatorValue1.includes('#REPLACE#')) 
          {
             locatorValue1 = locatorValue1.replace('#REPLACE#', value1);
          }
          else if (locatorValue2.includes('#REPLACE#')) 
          {
             locatorValue2 = locatorValue2.replace('#REPLACE#', value2);
          }
        /////////////////////////////////////////////////////////////////////////
         if (locatorType1 == 'cssContainingText' && locatorType2 == 'cssContainingText') 
            {
                if (locatorValue1 !== 'undefined' && locatorValue2 !== 'undefined') {
                    this.webElement = element(by.cssContainingText(locatorValue1,locatorValue2));
                }
                else if (locatorValue1 !== 'undefined' ) {
                    this.webElement = element(by.cssContainingText(locatorValue1));
                }
            }
        } 
        return this.webElement; 
    }     
 };
