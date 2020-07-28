module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');
    var hotkeys = require('protractor-hotkeys');
    var until = protractor.ExpectedConditions;
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var mouseActions = new commons.mouseActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var schedule_subTab = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab);
    var schedule_subTab_AddBtn = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_AddBtn);
    var schedule_subTab_Schedule_Name = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_Schedule_Name);
    var schedule_subTab_Schedule_Description = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_Schedule_Description);
    var schedule_subTab_Schedule_Nodes = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_Schedule_Nodes);
    var schedule_subTab_Days = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_Days);
    var schedule_time = objLocator.findLocator(objRepo_n.Schedule.schedule_time);
    var click_SetSchedule = objLocator.findLocator(objRepo_n.Schedule.click_SetSchedule);
    var schedule_save = objLocator.findLocator(objRepo_n.Schedule.schedule_save);
    var schedule_popup_group = objLocator.findLocator(objRepo_n.Schedule.schedule_popup_group);
    var schedulePopup_ZoneBtn = objLocator.findLocator(objRepo_n.Schedule.schedulePopup_ZoneBtn);
    var set_schedule = objLocator.findLocator(objRepo_n.Schedule.set_schedule);
    var set_schedule_ON = objLocator.findLocator(objRepo_n.Schedule.set_schedule_ON);
    var set_schedule_DIM = objLocator.findLocator(objRepo_n.Schedule.set_schedule_DIM);
    var schedule_Alert_yes = objLocator.findLocator(objRepo_n.Schedule.schedule_Alert_yes);
    var schedule_slider = objLocator.findLocator(objRepo_n.Schedule.schedule_slider);
    var schedule_subTab_NameColumn = objLocator.findLocator(objRepo_n.Schedule.schedule_subTab_NameColumn);
    var scheduleColumn_AllscheduleName = objLocator.findLocator_ElementAll(objRepo_n.Schedule.scheduleColumn_AllscheduleName);
    var ItemPerPagedd = objLocator.findLocator(objRepo_n.Schedule.ItemPerPagedd);
    var Page_50 = objLocator.findLocator(objRepo_n.Schedule.Page_50);
    
    var schedule_Column = objLocator.findLocator(objRepo.Admin_Schedules.Schedule_Column);
    var Schedule_Edit_btn = objLocator.findLocator_ElementAll(objRepo.Admin_Schedules.Schedule_Edit_btn);
    var schedule_Create = objLocator.findLocator(objRepo.Admin_Schedules.create_Schedule);
    var enter_name_text = objLocator.findLocator(objRepo.Admin_Schedules.Enter_Name);
    var nodePopup = objLocator.findLocator(objRepo.Admin_Schedules.Select_Node_Popup);
    var selectNodeName = objLocator.findLocator(objRepo.Admin_Schedules.Select_Node);
    var Schedule_Action_DropDown = objLocator.findLocator(objRepo.Admin_Schedules.Schedule_Action_DropDown);
    var Select_Action_Name = objLocator.findLocator(objRepo.Admin_Schedules.Select_Action_Name);
    var Schedule_Slider = objLocator.findLocator(objRepo.Admin_Schedules.Schedule_Slider);
    var Schedule_PopUp_NameList = objLocator.findLocator_ElementAll(objRepo.Admin_Schedules.Schedule_PopUp_NameList);
    var Schedule_PopUp_Selected_Names = objLocator.findLocator(objRepo.Admin_Schedules.Schedule_PopUp_Selected_Names);
    var Celestial_CheckBox = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_CheckBox);
    var Celestial_CheckBox_Status = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_CheckBox_Status);
    var Celestial_SunRise = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_SunRise);
    var Celestial_SunSet = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_SunSet);
    var Celestial_OffSet = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_OffSet);
    var Celestial_Clock_Hours = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_Clock_Hours);
    var Celestial_Clock_Minutes = objLocator.findLocator(objRepo.Admin_Schedules.Celestial_Clock_Minutes);
     
    this.waittil_Schedule_Tab_appears =function(){
        waitActions.waitForElementInPollingEvery(schedule_subTab);
    }
    this.click_Schedule_SubTab = function () {
        waitActions.clickandWait(schedule_subTab);
        waitActions.wait(3000)
        return this;
    };
    this.click_Schedule_SubTab_AddBtn = function () {
        waitActions.clickandVerify(schedule_subTab_AddBtn,schedule_popup_group);
        waitActions.wait(1000)
        return this;
    };
    this.enter_Schedule_Name = function (value) {
        inputBoxActions.type(schedule_subTab_Schedule_Name, value);
        return this;
    };
    this.enter_Schedule_Description = function (value) {
        inputBoxActions.type(schedule_subTab_Schedule_Description, value);
        return this;
    };
    this.click_Schedule_SubTab_NodeBtn = function () {
        waitActions.clickandWait(schedule_subTab_Schedule_Nodes);
        return this;
    };
    this.click_Schedule_SubTab_NodeBtn_selectNode = function () {
        element.all(by.css("mat-pseudo-checkbox.mat-option-pseudo-checkbox.mat-pseudo-checkbox.ng-star-inserted")).first().click();
        hotkeys.trigger('esc');
        browser.sleep(2000)
        return this;
    };
    this.schedule_subTab_Days = function () {
        waitActions.clickandWait(schedule_subTab_Days);
        return this;
    };
    this.Enter_scheduleTime = function (time) {
        inputBoxActions.type(schedule_time, '11:30');
        return this;
    };
    this.click_SetSchedule = function () {
        waitActions.clickandWait(click_SetSchedule);
        return this;
    };
    this.click_schedule_save = function () {
        waitActions.clickandWait(schedule_save);
        browser.sleep(5000);
        return this;
    };
    this.click_SetScheduleDD = function () {
        waitActions.clickandWait(set_schedule);
        return this;
    };
    this.click_SelectScheduleDD_ON = function () {
        waitActions.clickandWait(set_schedule_ON);
        return this;
    };
    this.click_SelectScheduleDD_DIM = function () {
        waitActions.clickandWait(set_schedule_DIM);
        return this;
    };
    this.click_schedule_slider = function () {
        waitActions.clickandWait(schedule_slider);
        return this;
    };
    this.click_schedulePopUp_group = function () {
        waitActions.clickandWait(schedule_popup_group);
        return this;
    };
    this.schedule_select_Group = function () {
        element.all(by.css("mat-option > mat-pseudo-checkbox")).first().click();
        hotkeys.trigger('esc');
        return this;
    };
    this.click_schedulePopUp_zone = function () {
        waitActions.clickandWait(schedulePopup_ZoneBtn);
        return this;
    };
    this.schedule_select_Zones = function () {
        element.all(by.css("mat-pseudo-checkbox.mat-option-pseudo-checkbox.mat-pseudo-checkbox.ng-star-inserted")).first().click();
        hotkeys.trigger('esc');
        return this;
    };
    this.delete = function(value){
         element(By.xpath("//mat-cell[contains(text(),'"+ value +"')]/parent::mat-row/mat-cell[5]")).click();
    }
      this.click_Schedule_Alert_Yes = function () {
        waitActions.clickandVerify(schedule_Alert_yes,schedule_subTab);
        browser.sleep(2000)
        return this;
    }; 
    this.SetPage_Value50 = function(){
        buttonActions.click(ItemPerPagedd)
        buttonActions.click(Page_50)
        waitActions.wait(5000)
    }
    
    this.Validate_ThresholdAdded =  function (user){
             for (var i = 0; i < scheduleColumn_AllscheduleName.length; i++) {
            expect(scheduleColumn_AllscheduleName[i].getText()).toEqual(threshold); 
           }   
     }
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     this.selectMultipleNames_VerifyNames = function(){
        buttonActions.clickFirstElement(Schedule_PopUp_NameList);
        waitActions.wait(2000)
        buttonActions.clickLastElement(Schedule_PopUp_NameList);
        waitActions.wait(2000)
        Schedule_PopUp_NameList.first().getText().then(function(firstName){
            Schedule_PopUp_NameList.last().getText().then(function(lastName){
            hotkeys.trigger('esc');
            expect(Schedule_PopUp_Selected_Names.getText()).toBe(firstName+ ',' + ' ' + lastName);
            })
        })
    }
    this.verifyPresence_Names_ScheduleList = function(scheduleName){
        verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +scheduleName+ "')]")));
    }
    this.selectOne_Schedule_ToEdit = function(){
        Schedule_Edit_btn.first().click();
        browser.sleep(3000);
    }
    this.edit_ScheduleName_PopUp = function(value){
        schedule_subTab_Schedule_Name.clear();
        inputBoxActions.type(schedule_subTab_Schedule_Name, value);
    }
    this.Enter_scheduleTime_EditSchedule = function (time) {
        if(verifyActions.isElementDisplayed(schedule_time) === 'yes'){
            console.log('time is  ' +time)
            inputBoxActions.type(schedule_time, time);
        }
        return this;
    };
    this.click_Celestial_CheckBox_VerifyStatus = function(){
        buttonActions.click(Celestial_CheckBox);
        browser.sleep(3000);
        Celestial_CheckBox_Status.getAttribute('aria-checked').then(function(status){
            expect(status).toBe('true');
        })
    }
    this.verify_Visibility_SunRise = function(){
        verifyActions.isElementDisplayed(Celestial_SunRise);
    }
    this.verify_Visibility_SunSet = function(){
        verifyActions.isElementDisplayed(Celestial_SunSet);
    }
    this.verify_Visibility_OffSet = function(){
        verifyActions.isElementDisplayed(Celestial_OffSet);
    }
    this.click_OffSet_Btn_After = function(){
        buttonActions.click(Celestial_OffSet);
        browser.sleep(3000);
    }
    this.passData_OffSet_Hour_Minutes = function(){
        Celestial_Clock_Hours.sendKeys('1');
        Celestial_Clock_Minutes.sendKeys('30');
    }
    this.verifyScheduleName = function(actual , expected){
        return expect(element(By.xpath("//mat-cell[contains(text(),'"+ actual +"')]/parent::mat-row/mat-cell[1]")).getText()).toEqual(expected);
      }
}