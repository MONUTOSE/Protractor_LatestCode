module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');
    var EC = protractor.ExpectedConditions;
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var Group_PopUp_Setting = objLocator.findLocator(objRepo.Menu_Group.Group_PopUp_Setting);
    var Group_PopUp_GroupName = objLocator.findLocator(objRepo.Menu_Group.Group_PopUp_GroupName);
    var Setting_DIM_Slider = objLocator.findLocator(objRepo.Menu_Group.Setting_DIM_Slider);
    var Setting_DIM_Percentage = objLocator.findLocator(objRepo.Menu_Group.Setting_DIM_Percentage);
    var Setting_PopUp_Update_Btn = objLocator.findLocator(objRepo.Menu_Group.Setting_PopUp_Update_Btn);
    var PopUp_Yes_Btn = objLocator.findLocator(objRepo.Menu_Group.PopUp_Yes_Btn);
    var Setting_Light_Sensitivity_Min = objLocator.findLocator(objRepo.Menu_Group.Setting_Light_Sensitivity_Min);
    var Setting_Light_Sensitivity_Max = objLocator.findLocator(objRepo.Menu_Group.Setting_Light_Sensitivity_Max);
    var Setting_PopUp_Frequency_Min = objLocator.findLocator(objRepo.Menu_Group.Setting_PopUp_Frequency_Min);
    var Setting_PopUp_Frequency_Max = objLocator.findLocator(objRepo.Menu_Group.Setting_PopUp_Frequency_Max);
    var Close_PopUp_Btn = objLocator.findLocator(objRepo.Menu_Group.Close_PopUp_Btn);

    var MenuGroupPopup_settings = objLocator.findLocator(objRepo_n.Group.MenuGroupPopup_settings);
    var GroupSettings_DimSlider = objLocator.findLocator(objRepo_n.Group.GroupSettings_DimSlider);
    var GroupSettings_LightSenstivity = objLocator.findLocator(objRepo_n.Group.GroupSettings_LightSenstivity);
    var GroupSettings_TH_Hours = objLocator.findLocator(objRepo_n.Group.GroupSettings_TH_Hours);
    var GroupSettings_TH_Minutes = objLocator.findLocator(objRepo_n.Group.GroupSettings_TH_Minutes);
    

  this.verifyPresence_Setting_PopUp = function(textOfElement){
      Group_PopUp_Setting.getText().then(function(text){
        expect(text).toBe(textOfElement)
      })
  }
    // this.verifyGroupName_Header_PopUp = function(textOfElement){
    //   Group_PopUp_GroupName.getText().then(function(text){
    //       expect(text).toBe(textOfElement);
    //   })
    // }
  this.clickOn_Update_Btn = function(){
      buttonActions.click(Setting_PopUp_Update_Btn);
      browser.sleep(2000);
      buttonActions.click(PopUp_Yes_Btn);
      browser.sleep(4000);
  }

////////////////////////////////// 
  var DIM_Value;
  this.Update_Group_DIM_Value = function(){
      buttonActions.click(Setting_DIM_Slider);
      browser.sleep(3000);
        Setting_DIM_Percentage.getText().then(function(text){
          return DIM_Value = text;
        })
  }
  this.verify_DIM_Value_Percentage = function(){
      browser.sleep(3000);
      Setting_DIM_Percentage.getText().then(function(textUpdated){
         expect(textUpdated).toBe(DIM_Value);
      })
  }
//////////////////////////////////// 
  var Light_Sensitivity_Max,Light_Sensitivity_Min;
  this.Update_Light_Sensitivity_Min_Value = function(){
      buttonActions.click(Setting_Light_Sensitivity_Min);
      browser.sleep(2000);
      Setting_Light_Sensitivity_Min.getText().then(function(text){
        return Light_Sensitivity_Min = text;
      })
  }
  this.Update_Light_Sensitivity_Max_Value = function(){
      buttonActions.click(Setting_Light_Sensitivity_Max);
      browser.sleep(2000);
      Setting_Light_Sensitivity_Max.getText().then(function(text_Max){
        return  Light_Sensitivity_Max = text_Max;
      })
  }
  this.verify_Light_Sensitivity_Percenatge = function(){
      Setting_Light_Sensitivity_Max.getText().then(function(text){
        expect(text).toBe(Light_Sensitivity_Max);
      })
      Setting_Light_Sensitivity_Min.getText().then(function(text){
        expect(text).toBe(Light_Sensitivity_Min);
      })
  }
///////////////////////////////////// 
    this.UpdateFrequency = function(Min_Value,Max_Value){
      waitActions.wait(3000);
      inputBoxActions.type(Setting_PopUp_Frequency_Min,Min_Value);
      inputBoxActions.type(Setting_PopUp_Frequency_Max,Max_Value);
    }
    this.verifyFrequency_SettingPopUp = function(Min_Value,Max_Value){
      waitActions.wait(5000);
      fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Min,"ng-reflect-model").then(function(text){
        expect(text).toBe(Min_Value);
      })
      fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Max,"ng-reflect-model").then(function(textMax){
        expect(textMax).toBe(Max_Value);
      })
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//NA
    this.Verify_SettingsSection_Appears =  function(){
      verifyActions.isElementDisplayed(MenuGroupPopup_settings);
    }
    this.Verify_SettingsDimSliderAppears =  function(){
      verifyActions.isElementDisplayed(GroupSettings_DimSlider);
    }
    this.Verify_SettingsLightSensitivityAppears =  function(){
      verifyActions.isElementDisplayed(GroupSettings_LightSenstivity);
    }
    this.Verify_SettingsTH_HoursAppears =  function(){
      verifyActions.isElementDisplayed(GroupSettings_TH_Hours);
      GroupSettings_TH_Hours.getAttribute("ng-reflect-value").then(function (value) {
        console.log("Update frequency admin threshold in hours " +value);
       });
    }
    this.Verify_SettingsTH_MinutesAppears =  function(){
      verifyActions.isElementDisplayed(GroupSettings_TH_Minutes);
      GroupSettings_TH_Minutes.getAttribute("ng-reflect-value").then(function (value) {
        console.log("Update frequency admin threshold in Minutes " +value);
      });
    }

    this.closePopUp = function(){
      buttonActions.click(Close_PopUp_Btn);
      browser.sleep(3000);
    }
  
    
}