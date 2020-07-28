module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');
    var hotkeys = require('protractor-hotkeys');

    
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var verifyActions =  new commons.verifyActions();
    var mouseAction =  new commons.mouseActions();
    var dropDownAction =  new commons.dropDownActions();
    var popUpAction =  new commons.popUpActions();
    var testingDisplayedActions =  new commons.testingDisplayedActions();

    var Ubic_Logo = objLocator.findLocator(objRepo.LoginPage.Ubicquia_Logo);
    var Ubicquia_Username = objLocator.findLocator(objRepo.LoginPage.username);
    var UserName_Label = objLocator.findLocator(objRepo.LoginPage.UserName_Label);
    var Ubicquia_Password = objLocator.findLocator(objRepo.LoginPage.password);
    var Password_Label = objLocator.findLocator(objRepo.LoginPage.Password_Label);
    var Ubicquia_LoginBtn = objLocator.findLocator(objRepo.LoginPage.login_btn);
    var Wrong_Data_PopUp = objLocator.findLocator(objRepo.LoginPage.Wrong_Data_PopUp);

    var Ubicquia_NetworkName = objLocator.findLocator(objRepo_n.LoginPage.Ubicquia_NetworkName);
    var Ubicquia_Logo = objLocator.findLocator(objRepo.Menu.Home_Logo);

 
    this.openSearchPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };
    this.enter_Username_Keyword = function (value) {
        browser.sleep(3000);
        Ubicquia_Username.clear();
        inputBoxActions.type(Ubicquia_Username, value);
        return this;
    };
    this.enter_Password_Keyword = function (value) {
        Ubicquia_Password.clear();
        inputBoxActions.type(Ubicquia_Password, value);
        return this;
    };
    this.click_LogIn_Btn = function () {
        waitActions.clickandWait(Ubicquia_LoginBtn);
        browser.sleep(2000);
        return this;
    };
    this.click_Home_Btn = function () {
        waitActions.wait(2000);
        buttonActions.click(Ubicquia_Logo);
        waitActions.wait(2000);
        return this;
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    this.verifyVisibility_UserNameField =function(textOfElement){
        browser.sleep(2000);
        verifyActions.isElementDisplayed(Ubicquia_Username);
        UserName_Label.getText().then(function(text){
           expect(text).toBe(textOfElement);
        })
    }
    this.verifyVisibility_PasswordField =function(textOfElement){
        browser.sleep(2000);
        verifyActions.isElementDisplayed(Ubicquia_Password);
        Password_Label.getText().then(function(text){
           expect(text).toBe(textOfElement);
        })  
    }
    this.verifyVisibility_LogInBtn =function(textOfElement){
        browser.sleep(2000);
        verifyActions.isElementDisplayed(Ubicquia_LoginBtn);
        Ubicquia_LoginBtn.getText().then(function(text){
           expect(text).toBe(textOfElement);
        })
    }
    this.verify_Visibility_WrongData = function(textMsg){
        verifyActions.isElementDisplayed(Wrong_Data_PopUp);
        Wrong_Data_PopUp.getText().then(function(text){
             expect(text).toBe(textMsg)
        })
        browser.sleep(5000);
    }
     
};