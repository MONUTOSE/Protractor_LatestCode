module.exports = function () {
    'use strict';
    const support = require('protractor-firefox-support'); 
    var objRepo = require('../resources/objectRepository.json');
    var hotkeys = require('protractor-hotkeys');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var mouseActions = new commons.mouseActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var manu_Zones = objLocator.findLocator(objRepo.Menu.Menu_Zones);
    var header_Zones = objLocator.findLocator(objRepo.Menu_Zone.Zones_Header);
    var allZones = objLocator.findLocator_ElementAll(objRepo.Menu_Zone.Menu_Zones_names);
    var Menu_Zone_Column = objLocator.findLocator(objRepo.Menu_Zone.Menu_Zone_Column);
    var Menu_Zone_NameRows = objLocator.findLocator_ElementAll(objRepo.Menu_Zone.Menu_Zone_NameRows);
    var Menu_Zone_LightSwitch_Column = objLocator.findLocator(objRepo.Menu_Zone.Menu_Zone_LightSwitch_Column);
    var LightSwitch_ToggleBtn = objLocator.findLocator_ElementAll(objRepo.Menu_Zone.LightSwitch_ToggleBtn);
    var Menu_Zone_Setting = objLocator.findLocator(objRepo.Menu_Zone.Menu_Zone_Setting);
    var Menu_ZonePopup_Zone_Name = objLocator.findLocator(objRepo.Menu_Zone.Menu_ZonePopup_Zone_Name);
    var ZonePopup_DimValue = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_DimValue);
    var ZonePopup_DimValue_Slider = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_DimValue_Slider);
    var Setting_DIM_FullSlider = objLocator.findLocator(objRepo.Menu_Zone.Setting_DIM_FullSlider);
    var DIM_Slider_Btn = objLocator.findLocator(objRepo.Menu_Zone.DIM_Slider_Btn);
    var Setting_DIM_Slider = objLocator.findLocator(objRepo.Menu_Zone.Setting_DIM_Slider);
    var Setting_DIM_Percentage = objLocator.findLocator(objRepo.Menu_Zone.Setting_DIM_Percentage);
    var ZonePopup_LightSensitivity = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_LightSensitivity);
    var ZonePopup_LightSensitivity_Slider = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_LightSensitivity_Slider);
    var Setting_LightSense_FullSlider = objLocator.findLocator(objRepo.Menu_Zone.Setting_LightSense_FullSlider);
    var Setting_Light_Sensitivity_Min = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Min);
    var Setting_Light_Sensitivity_Max = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Max);
    var ZonePopup_UpdateFrequency = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_UpdateFrequency);
    var AdminThreshold_Hour = objLocator.findLocator(objRepo.Menu_Zone.AdminThreshold_Hour);
    var AdminThreshold_Minute = objLocator.findLocator(objRepo.Menu_Zone.AdminThreshold_Minute);
    var Setting_PopUp_Frequency_Min = objLocator.findLocator(objRepo.Menu_Zone.Setting_PopUp_Frequency_Min);
    var Setting_Light_Sensitivity_Min_Value = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Min_Value);
    var Setting_PopUp_Frequency_Max = objLocator.findLocator(objRepo.Menu_Zone.Setting_PopUp_Frequency_Max);
    var Setting_Light_Sensitivity_Max_Value = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Max_Value);
    var LightSwitch_Btn = objLocator.findLocator(objRepo.Menu_Zone.LightSwitch_Btn);
    var Setting_PopUp_Update_Btn = objLocator.findLocator(objRepo.Menu_Zone.Setting_PopUp_Update_Btn);
    var PopUp_Yes_Btn = objLocator.findLocator(objRepo.Menu_Zone.PopUp_Yes_Btn);
    var Close_PopUp_Btn = objLocator.findLocator(objRepo.Menu_Zone.Close_PopUp_Btn);

    this.verifyVisibilitySetting = function(textOfHeaderPopup){
        Menu_Zone_Setting.getText().then(function(text){
            expect(text).toBe(textOfHeaderPopup)
        })
    }
    this.verifyZoneName_ZonePopup = function(textOfHeader){
        Menu_ZonePopup_Zone_Name.getText().then(function(textOfZone_InPopup){
            expect(textOfZone_InPopup).toBe(textOfHeader);
        })
    }

    this.clickOn_Update_Btn = function(){
        buttonActions.click(Setting_PopUp_Update_Btn);
        buttonActions.click(PopUp_Yes_Btn);
        browser.sleep(2000);
    }
    this.verifyVisibilityOf_DimValue = function(text_DimValue){
        ZonePopup_DimValue.getText().then(function(text){
            expect(text).toBe(text_DimValue);
        })
    }
    this.verifyVisibility_DimSlider = function(){
        verifyActions.isElementDisplayed(ZonePopup_DimValue_Slider);
    }
    var DIM_Value;
    this.Update_Group_DIM_Value = function( ){
      browser.sleep(2000);
      buttonActions.click(Setting_DIM_FullSlider);
      buttonActions.click(Setting_DIM_FullSlider);
      browser.sleep(2000);
      Setting_DIM_Percentage.getText().then(function(textUpdated){
        return DIM_Value = textUpdated;
     })
    }
    this.verify_DIM_Value_Percentage = function( ){
      browser.sleep(3000);
      Setting_DIM_Percentage.getText().then(function(textUpdated){
         expect(textUpdated).toBe(DIM_Value);
      })
    } 
    this.verifyVisibilityOf_LightSensitivity = function(text_LightSensitivity){
        ZonePopup_LightSensitivity.getText().then(function(text){
            expect(text).toBe(text_LightSensitivity);
        })
    }
    this.verifyVisibility_LightSensitivitySlider = function(){
        verifyActions.isElementDisplayed(ZonePopup_LightSensitivity_Slider);
    }
    var Light_Sensitivity_Max,Light_Sensitivity_Min;
    this.Update_Light_Sensitivity_Min_Value = function(){
      buttonActions.click(Setting_LightSense_FullSlider);
      browser.sleep(2000);
      Setting_Light_Sensitivity_Min.getText().then(function(text){
        return Light_Sensitivity_Min = text;
      })
    }
    this.Update_Light_Sensitivity_Max_Value = function(){
      buttonActions.click(Setting_LightSense_FullSlider);
      browser.sleep(2000);
      Setting_Light_Sensitivity_Max.getText().then(function(text_Max){
        return  Light_Sensitivity_Max = text_Max;
      })
    }
    this.verify_Light_Sensitivity_Percenatge = function(){
      Setting_Light_Sensitivity_Max_Value.getText().then(function(text){
        console.log('Max Percentage : ' +text)
        expect(text).toBe(Light_Sensitivity_Max);
      })
      Setting_Light_Sensitivity_Min_Value.getText().then(function(text){
        console.log('Min Percentage : ' +text)
        expect(text).toBe(Light_Sensitivity_Min);
      })
    } 
    this.verifyVisibilityOf_UpdateFrequency = function(text_UpdateFrequency){
        ZonePopup_UpdateFrequency.getText().then(function(text){
            expect(text).toBe(text_UpdateFrequency);
        })
    }
    this.verifyVisibility_ThresholdHour = function(){
        verifyActions.isElementDisplayed(AdminThreshold_Hour);
    }
    this.verifyVisibility_ThresholdMinute = function(){
        verifyActions.isElementDisplayed(AdminThreshold_Minute);
    }
    this.UpdateFrequency = function(Min_Value,Max_Value){
        waitActions.wait(3000);
        inputBoxActions.type(Setting_PopUp_Frequency_Min,Min_Value);
        inputBoxActions.type(Setting_PopUp_Frequency_Max,Max_Value);
      }
    this.verifyFrequency_SettingPopUp = function(Min_Value,Max_Value){
        waitActions.wait(10000);
        fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Min,"ng-reflect-model").then(function(text){
          console.log(text)
          expect(text).toBe(Min_Value);
        })
        Setting_PopUp_Frequency_Min.getText().then(function(text_Min){
          expect(text_Min).toBe(Min_Value);
        })
        fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Max,"ng-reflect-model").then(function(textMax){
          console.log(textMax)
          expect(textMax).toBe(Max_Value);
        })
        Setting_PopUp_Frequency_Max.getText().then(function(text_Max){
          expect(text_Max).toBe(Max_Value);
        })
    }
    this.closePopUp = function(){
      buttonActions.click(Close_PopUp_Btn);
      browser.sleep(1000);
    }
}