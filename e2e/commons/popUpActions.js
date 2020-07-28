module.exports = function () {

 // multiple window handling
 this.window = function(index)
    {
    var winHandles=browser.getAllWindowHandles();
        winHandles.then(function(handles) 
         {
         var switchingWindow=handles[index];
         browser.switchTo().window(switchingWindow);
         browser.sleep(5000)
        })
    }
    // click on button and verifying alert text
    this.clickonAlertAndGetText=function (element) {
        return element.click().then(function (alertText) {
            browser.wait(function () {
                return browser.switchTo().alert().then(
                    function () {return true;},
                    function () {return false;}
                );
            }, 3000); // Wait timeout
            var popupAlert = browser.switchTo().alert();
            alertText = popupAlert.getText();
            return alertText;
        })
    }
   // click on button to open alert and dismiss the alert  
    this.clickonAlertandClose=function (element) {
        return element.click().then(function () {
            browser.wait(function () {
                return browser.switchTo().alert().then(
                    function () {return true;},
                    function () {return false;}
                );
            }, 3000); // Wait timeout
            var popupAlert = browser.switchTo().alert();
            popupAlert.dismiss();
        })
    }
    // click on button to open alert and accept the alert  
    this.clickonAlertandAccept=function (element) {
        return element.click().then(function () {
            //Wait for alert to pop up
            browser.wait(function () {
                return browser.switchTo().alert().then(
                    function () {return true;},
                    function () {return false;}
                );
            }, 3000); // Wait timeout
            var popupAlert = browser.switchTo().alert();
            popupAlert.accept();
        })
    }
};