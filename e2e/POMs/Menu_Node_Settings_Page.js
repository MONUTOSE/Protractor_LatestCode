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

    var Setting_PopUp_Frequency_Min = objLocator.findLocator(objRepo.Menu_Zone.Setting_PopUp_Frequency_Min);
    var Setting_Light_Sensitivity_Min_Value = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Min_Value);
    var Setting_PopUp_Frequency_Max = objLocator.findLocator(objRepo.Menu_Zone.Setting_PopUp_Frequency_Max);
    var Setting_Light_Sensitivity_Max_Value = objLocator.findLocator(objRepo.Menu_Zone.Setting_Light_Sensitivity_Max_Value);

    var Arrow_Next_Btn =objLocator.findLocator(objRepo_n.Nodes.Arrow_Next_Btn);
    var Node_Popup_settings =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_settings);
    var Node_PopuUp_settings_dimSlider =objLocator.findLocator(objRepo_n.Nodes.Node_PopuUp_settings_dimSlider);
    var Node_PopuUp_settings_UF_TH_Hours =objLocator.findLocator(objRepo_n.Nodes.Node_PopuUp_settings_UF_TH_Hours);
    var Node_PopuUp_settings_UF_TH_minutes =objLocator.findLocator(objRepo_n.Nodes.Node_PopuUp_settings_UF_TH_minutes);
    var Node_Popup_settings_light_slider = objLocator.findLocator(objRepo_n.Nodes.Node_Popup_settings_light_slider);
    var NodeSettings_updateBtn = objLocator.findLocator(objRepo_n.Nodes.NodeSettings_updateBtn);
    var NodeSettings_Popupu_YesButton = objLocator.findLocator(objRepo_n.Nodes.NodeSettings_Popupu_YesButton);
    

    this.verifyFrequency_SettingPopUp = function(Min_Value,Max_Value){
        waitActions.wait(15000);
        fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Min,"ng-reflect-model").then(function(text){
          console.log(text)
          expect(text).toBe(Min_Value);
        })
        fatchingTextActions.getValueForAttribute(Setting_PopUp_Frequency_Max,"ng-reflect-model").then(function(textMax){
          console.log(textMax)
          expect(textMax).toBe(Max_Value);
        })
      }
///////////////////////////////////////////////////////////////////////////////////////////      
    this.waittil_Nodesettings_appears =function(){
        waitActions.waitForElementInPollingEvery(Node_Popup_settings);
        waitActions.wait(3000)
    }
    this.click_Node_popup_Settings = function () {
        buttonActions.click(Arrow_Next_Btn);
        waitActions.wait(1000)
        waitActions.wait(3000)
        buttonActions.click(Node_Popup_settings);
        waitActions.wait(2000)
        return this;
    };

    this.Verify_availability_DimSlider =  function(){
        verifyActions.isElementDisplayed(Node_PopuUp_settings_dimSlider);
    }
    this.Verify_availability_threshold_hours =  function(){
        verifyActions.isElementDisplayed(Node_PopuUp_settings_UF_TH_Hours);
        Node_PopuUp_settings_UF_TH_Hours.getAttribute("ng-reflect-value").then(function (value) {
            console.log("Update frequency admin threshold in hours " +value);
        });
    }
    this.Verify_availability_threshold_minutes =  function(){
        verifyActions.isElementDisplayed(Node_PopuUp_settings_UF_TH_minutes);
        Node_PopuUp_settings_UF_TH_minutes.getAttribute("ng-reflect-value").then(function (value) {
            console.log("Update frequency admin threshold in minutes " +value);
        });
    }
    this.Verify_availability_LightSlider =  function(){
        verifyActions.isElementDisplayed(Node_Popup_settings_light_slider);
    }
    this.Send_FrequesncyValues = function (hours,minutes){
        inputBoxActions.type(Node_PopuUp_settings_UF_TH_Hours, hours);
        inputBoxActions.type(Node_PopuUp_settings_UF_TH_minutes, minutes);
        buttonActions.click(NodeSettings_updateBtn)
        waitActions.wait(1000)
        buttonActions.click(NodeSettings_Popupu_YesButton)
        waitActions.wait(4000)
        Node_PopuUp_settings_UF_TH_Hours.getAttribute("ng-reflect-value").then(function (hours1) {
            expect(''+hours+'').toEqual(hours1);
        }).then(function(){
            Node_PopuUp_settings_UF_TH_minutes.getAttribute("ng-reflect-value").then(function (minute1) {
                expect(''+minutes+'').toEqual(minute1);
            });
        })
    }
}