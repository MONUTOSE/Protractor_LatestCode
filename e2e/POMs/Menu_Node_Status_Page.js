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


    var Node_Popup_Status =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Status);
    var Node_Popup_status_FC =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_FC);
    var Node_Popup_status_FC_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_FC_value);
    var Node_Popup_status_FV =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_FV);
    var Node_Popup_status_FV_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_FV_value);
    var Node_Popup_status_RSSI =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_RSSI);
    var Node_Popup_status_RSSI_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_RSSI_value);
    var Node_Popup_status_DIM =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_RSSI);
    var Node_Popup_status_DIM_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_RSSI_value);
    var Node_Popup_status_Pole_Current =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Pole_Current);
    var Node_Popup_status_Pole_Current_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Pole_Current_value);
    var Node_Popup_status_Longitude =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Longitude);
    var Node_Popup_status_Longitude_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Longitude_value);
    var Node_Popup_status_Pole_Voltage =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Pole_Voltage);
    var Node_Popup_status_Pole_Voltage_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Pole_Voltage_value);
    var Node_Popup_status_Tilt_Angle =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Tilt_Angle);
    var Node_Popup_status_Tilt_Angle_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Tilt_Angle_value);
    var Node_Popup_status_Latitude =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Latitude);
    var Node_Popup_status_Latitude_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_status_Latitude_value);
    

    this.click_Node_popup_Status = function () {
        buttonActions.click(Node_Popup_Status);
        browser.sleep(2000);
    };
    this.verfiy_availabilty_Node_Status = function(){
        verifyActions.isElementDisplayed(Node_Popup_Status);
    }
    this.waittil_Nodestatus_appears =function(){
        waitActions.wait(3000)
        waitActions.waitForElementInPollingEvery(Node_Popup_Status);
    }
    this.Verify_availability_Fixture_Current =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_FC);
    }
    this.Verify_fixtureCurrentValue = function(){
        Node_Popup_status_FC_value.getText().then(function (value) {
            console.log("Value of Fixture Current is " +value);
        });
    }
    this.Verify_availability_Fixture_Voltage =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_FV);
    }
    this.Verify_fixtureVoltageValue = function(){
        Node_Popup_status_FV_value.getText().then(function (value) {
            console.log("Value of Fixture voltage is " +value);
        });
    }
    this.Verify_availability_Node_RSSI =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_RSSI);
    }
    this.Verify_NodeRSSI_Value = function(){
        Node_Popup_status_RSSI_value.getText().then(function (value) {
           console.log("Value of Node RSSI is " +value);
        });
    }
    this.Verify_availability_Node_DIM =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_DIM);
    }
    this.Verify_NodeDIM_Value = function(){
        Node_Popup_status_DIM_value.getText().then(function (value) {
            console.log("Value of Node DIM is " +value);
        });
    }
    this.Verify_availability_Node_Longitude =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_Longitude);
    }
    this.Verify_NodeLongitude_Value = function(){
        Node_Popup_status_Longitude_value.getText().then(function (value) {
            console.log("Value of Node Longitude is " +value);
        });
    }
    this.Verify_availability_Node_Pole_Current =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_Pole_Current);
    }
    this.Verify_Node_Pole_Current_Value = function(){
        Node_Popup_status_Pole_Current_value.getText().then(function (value) {
            console.log("Value of Pole Current is " +value);
        });
    }
    this.Verify_availability_Node_Pole_Voltage =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_Pole_Voltage);
    }
    this.Verify_Node_Pole_Voltage_Value = function(){
        Node_Popup_status_Pole_Voltage_value.getText().then(function (value) {
            console.log("Value of Pole voltage is " +value);
        });
    }
    this.Verify_availability_Node_Tilt_Angle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_Tilt_Angle);
    }
    this.Verify_Node_Tilt_Angle_Value = function(){
        Node_Popup_status_Tilt_Angle_value.getText().then(function (value) {
            console.log("Value of Title Angle is " +value);
        });
    }
    this.Verify_availability_Node_Latitude =  function(){
        verifyActions.isElementDisplayed(Node_Popup_status_Latitude);
    }
    this.Verify_Node_Latitude_Value = function(){
        Node_Popup_status_Latitude_value.getText().then(function (value) {
            console.log("Value of Latitude is " +value);
        });
    }
}