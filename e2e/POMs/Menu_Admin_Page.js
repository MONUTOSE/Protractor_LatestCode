module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var Ubicquia_Menu_Admin = objLocator.findLocator(objRepo.Menu.Admin);
    var Admin_Columns = objLocator.findLocator_ElementAll(objRepo.Menu.Admin_Columns);
    
    var User_Column = objLocator.findLocator(objRepo.Menu_Admin.Admin_User_SubTab);
    var Admin_Node_Column = objLocator.findLocator(objRepo.Menu_Admin.Admin_Node_SubTab);
    var Ubicquia_Admin_Group = objLocator.findLocator(objRepo.Menu_Admin.Admin_Group_SubTab);
    var Ubicquia_ZonesSub_Menu = objLocator.findLocator(objRepo.Menu_Admin.Admin_Zone_SubTab);
    var Threshold_Column = objLocator.findLocator(objRepo.Menu_Admin.Admin_Threshold_SubTab);

    var schedule_subTab = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab);

    this.verifyPresence_MenuAdmin = function(textOfElement){
        Ubicquia_Menu_Admin.getText().then(function(text){
            expect(text).toBe(textOfElement)
        })
    }
    this.click_AdminMenu = function () {
        buttonActions.click(Ubicquia_Menu_Admin);
        browser.sleep(2000);
        return this;
    };

    this.verifyPresenceOfColumns = function(){
        for(var i=0;i<=Admin_Columns.length;i++){
            verifyActions.isElementDisplayed(Admin_Columns[i]);
        }  
    }

    this.click_User_SubMenu = function () {
        buttonActions.click(User_Column);
        browser.sleep(3000);
    };
    this.clickOn_NodeColumn = function(){
        buttonActions.click(Admin_Node_Column);
        browser.sleep(3000);
    }
    this.clickOnGroup = function() {
        buttonActions.click(Ubicquia_Admin_Group);
        browser.sleep(3000);
    }
    this.clickZones_Submenu = function () {
        buttonActions.click(Ubicquia_ZonesSub_Menu);
        browser.sleep(3000);
        return this;
    };
    this.click_Schedule_SubTab = function (){
        waitActions.clickandWait(schedule_subTab);
        waitActions.wait(4000)
        return this;
    };
    this.click_thresholdSubmenu = function () {
        buttonActions.click(Threshold_Column);
        browser.sleep(3000)
    };

}