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

    var Node_Popup_settings =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_settings);
    var Node_Popup_Status =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Status);
    var Node_Popup_Summary_Name =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Name);
    var Npde_Popup_Summary_Name_value =objLocator.findLocator(objRepo_n.Nodes.Npde_Popup_Summary_Name_value);
    var Node_Popup_Summary_NodeID =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_NodeID);
    var Node_Popup_Summary_NodeID_Value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_NodeID_Value);
    var Node_Popup_Summary_Header_NodeName =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_NodeName);
    var Node_Popup_Summary_Header_NodeName_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_NodeName_value);
    var Node_Popup_Summary_Header_GroupName =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_GroupName);
    var Node_Popup_Summary_Header_GroupName_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_GroupName_value);
    var Node_Popup_Summary_Header_ZoneName =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_ZoneName);
    var Node_Popup_Summary_Header_ZoneName_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_ZoneName_value);
    var Node_Popup_Summary_Header_MaintenanceName =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_MaintenanceName);
    var Node_Popup_Summary_Header_MaintenanceName_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_MaintenanceName_value);
    var Node_Popup_Summary_Header_PoleID =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_PoleID);
    var Node_Popup_Summary_Header_PoleID_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_PoleID_value);
    var Node_Popup_Summary_Header_PoleType =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_PoleType);
    var Node_Popup_Summary_Header_PoleType_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_PoleType_value);
    var Node_Popup_Summary_Header_FixtureID =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_FixtureID);
    var Node_Popup_Summary_Header_FixtureID_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_FixtureID_value);
    var Node_Popup_Summary_Header_FixtureType =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_FixtureType);
    var Node_Popup_Summary_Header_FixtureType_value =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_Header_FixtureType_value);
    var Node_Popup_Summary_UpdateBTN =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_UpdateBTN);
    var Node_Popup_Summary_YesBtn =objLocator.findLocator(objRepo_n.Nodes.Node_Popup_Summary_YesBtn);

    this.Verify_availability_Node_Settings =  function(){
        browser.sleep(2000);
        verifyActions.isElementDisplayed(Node_Popup_settings);
    }
    this.verfiy_availabilty_Node_Status = function(){
        browser.sleep(2000);
        verifyActions.isElementDisplayed(Node_Popup_Status);
    }
////////////////////////////////////////////////////////////////////////////////////////

    this.Verify_availability_Node_Summary_NameHeader =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Name);
    }
    this.Verify_NodeSummary_Name_Value = function(){
        Npde_Popup_Summary_Name_value.getText().then(function (value) {
            console.log("Value of Node Summary Name is " +value);
        });
    }
    this.Verify_availability_Node_Summary_IDHeader =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_NodeID);
    }
    this.Verify_NodeSummary_NodeID_Value = function(){
        Node_Popup_Summary_NodeID_Value.getText().then(function (value) {
            console.log("Value of Node Summary Node ID is " +value);
        });
    }
    this.Verify_availability_Node_Summary_IDHeaderTop =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_NodeName);
    }
    this.Verify_NodeSummary_NodeName_Value_HeaderTop = function(){
        Node_Popup_Summary_Header_NodeName_value.getText().then(function (value) {
            console.log("Header Node Name showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_GroupNameTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_GroupName);
    }
    this.Verify_NodeSummary_GroupNameValue = function(){
        Node_Popup_Summary_Header_GroupName_value.getText().then(function (value) {
            console.log("Group Name showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_ZoneNameTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_ZoneName);
    }
    this.Verify_NodeSummary_ZoneNameValue = function(){
        Node_Popup_Summary_Header_ZoneName_value.getText().then(function (value) {
            console.log("Zone Name showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_MaintenanceNameTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_MaintenanceName);
    }
    this.Verify_NodeSummary_MaintenanceNameValue = function(){
        Node_Popup_Summary_Header_MaintenanceName_value.getText().then(function (value) {
            console.log("Maintenance Name showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_PoleIDTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_PoleID);
    }
    this.Verify_NodeSummary_PoleIDValue = function(){
        Node_Popup_Summary_Header_PoleID_value.getText().then(function (value) {
            console.log("Pole ID showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_PoleTypeTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_PoleType);
    }
    this.Verify_NodeSummary_PoleTypeValue = function(){
        Node_Popup_Summary_Header_PoleType_value.getText().then(function (value) {
            console.log("Pole type showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_FixtureIDTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_FixtureID);
    }
    this.Verify_NodeSummary_FixtureIDValue = function(){
        Node_Popup_Summary_Header_FixtureID_value.getText().then(function (value) {
            console.log("Fixture id showing is  " +value);
        });
    }
    this.Verify_availability_Node_Summary_FixtureTypeTitle =  function(){
        verifyActions.isElementDisplayed(Node_Popup_Summary_Header_FixtureType);
    }
    this.Verify_NodeSummary_FixtureTypeValue = function(){
        Node_Popup_Summary_Header_FixtureType_value.getText().then(function (value) {
            console.log("Fixture type showing is  " +value);
        });
    }
    this.clickingOn_UpdateButton = function(){
        buttonActions.click(Node_Popup_Summary_UpdateBTN);
        waitActions.wait(3000);
    }
    this.clickingOn_YesButton = function(){
        buttonActions.click(Node_Popup_Summary_YesBtn);
        waitActions.wait(3000);
    }     
}