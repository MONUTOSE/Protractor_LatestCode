module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');
    var hotkeys = require('protractor-hotkeys');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var mouseActions = new commons.mouseActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var Threshold_Column = objLocator.findLocator(objRepo.Menu.Threshold_Column);
    var Threshold_Name = objLocator.findLocator(objRepo.Menu.Threshold_Name);
    var Admin_Threshold_NameColumn = objLocator.findLocator(objRepo.Menu.Admin_Threshold_NameColumn);
    var Threshold_NameList = objLocator.findLocator(objRepo.Menu.Threshold_NameList);
    var Threshold_AlertType = objLocator.findLocator(objRepo.Menu.Threshold_AlertType);
    var Threshold_AlertType_List = objLocator.findLocator(objRepo.Menu.Threshold_AlertType_List);
    var Threshold_Active = objLocator.findLocator(objRepo.Menu.Threshold_Active);
    var Threshold_Active_CheckBox = objLocator.findLocator(objRepo.Menu.Threshold_Active_CheckBox);
    
    var Threshold_AlertType_N = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_AlertType);
    var Threshold_Pop_CHECKB = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_Pop_CHECKB);
    var Edit_column = objLocator.findLocator(objRepo_n.Admin_Threshold.Edit_column);
    var AllEdit_icon = objLocator.findLocator(objRepo_n.Admin_Threshold.AllEdit_icon);
    var Delete_No = objLocator.findLocator(objRepo_n.Admin_Threshold.Delete_No);
    var Delete_Yes = objLocator.findLocator(objRepo_n.Admin_Threshold.Delete_Yes);
    var AllTrash_Icon = objLocator.findLocator(objRepo_n.Admin_Threshold.AllTrash_Icon);
    var Trash_column = objLocator.findLocator(objRepo_n.Admin_Threshold.Trash_column);
    var Search = objLocator.findLocator(objRepo_n.Admin_Threshold.Search);
    var Clear_all = objLocator.findLocator(objRepo_n.Admin_Threshold.Clear_all);
    var Add_btn = objLocator.findLocator(objRepo_n.Admin_Threshold.Add_btn);
    var Node_selectbox = objLocator.findLocator(objRepo_n.Admin_Threshold.Node_selectbox);
    var AllNodes_InList = objLocator.findLocator_ElementAll(objRepo_n.Admin_Threshold.AllNodes_InList);
    var Alerttype_selectbox = objLocator.findLocator(objRepo_n.Admin_Threshold.Alerttype_selectbox);
    var AllAlert_InList = objLocator.findLocator_ElementAll(objRepo_n.Admin_Threshold.AllAlert_InList);
    var Threshold = objLocator.findLocator_ElementAll(objRepo_n.Admin_Threshold.Threshold);
    var Threshold_GroupTab = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_GroupTab);
    var Group_selectbox = objLocator.findLocator(objRepo_n.Admin_Threshold.Group_selectbox);
    var AllGroup_InList = objLocator.findLocator_ElementAll(objRepo_n.Admin_Threshold.AllGroup_InList);
    var Threshold_ZoneTab = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_ZoneTab);
    var Zone_selectbox = objLocator.findLocator(objRepo_n.Admin_Threshold.Zone_selectbox);
    var AllZones_InList = objLocator.findLocator_ElementAll(objRepo_n.Admin_Threshold.AllZones_InList);
    var Threshold_Save = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_Save);
    var Next_Arrow = objLocator.findLocator(objRepo_n.Admin_Threshold.Next_Arrow);
    var Alerttype_column = objLocator.findLocator(objRepo_n.Admin_Threshold.Alerttype_column);
    var Pre_Arrow = objLocator.findLocator(objRepo_n.Admin_Threshold.Pre_Arrow);
    var Page = objLocator.findLocator(objRepo_n.Admin_Threshold.Page);
    var Page_5 = objLocator.findLocator(objRepo_n.Admin_Threshold.Page_5);
    var Threshold_value = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_value);
    var Threshold_savebtn = objLocator.findLocator(objRepo_n.Admin_Threshold.Threshold_savebtn);
    
    this.click_thresholdSubmenu = function () {
        browser.sleep(4000)
        buttonActions.click(Threshold_Column);
        browser.sleep(4000)
    };

    this.verifyVisibility_Threshold_NodeNames = function(textOfElement){
        browser.sleep(3000)
        verifyActions.isElementDisplayed(Threshold_Name);
        browser.sleep(2000);
        Admin_Threshold_NameColumn.getText().then(function(text){
            expect(text).toBe(textOfElement);
        })
    }
    this.verifyPresence_Nodes = function(){
        for(var i =0; i<=Threshold_NameList.length; i++){
            verifyActions.isElementDisplayed(Threshold_NameList[i]);
            mouseActions.mouseMove(Threshold_NameList[i]);
        }
    }

    this.verifyVisibility_Threshold_AlertType = function(textOfElement){
        verifyActions.isElementDisplayed(Threshold_AlertType);
        Threshold_AlertType.getText().then(function(text){
            expect(text).toBe(textOfElement);
        })
    }
    this.verifyPresence_AlertType = function(){
        for(var i =0; i<=Threshold_AlertType_List.length; i++){
            verifyActions.isElementDisplayed(Threshold_AlertType_List[i]);
        }
    }

    this.verifyVisibility_ThresholdCheckBox = function(textOfElement){
        verifyActions.isElementDisplayed(Threshold_Active);
        browser.sleep(2000);
        Threshold_Active.getText().then(function(text){
            expect(text).toBe(textOfElement);
        })
    }
    this.verifyPresence_CheckBox = function(){
        for(var i =0; i<=Threshold_Active_CheckBox.length; i++){
            verifyActions.isElementDisplayed(Threshold_Active_CheckBox[i]);
        }
    }
    
    this.click_on_Node = function( ){
        element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().click();
        waitActions.wait(3000)
     } 
     //////////////////////////////////////////////////////////////////////////////////////////////////
    this.click_thresholdSubmenuOption = function () {
        browser.sleep(2000)
        buttonActions.click(Threshold_Column);
        browser.sleep(5000)
    };
    this.verifyVisibility_ThresholdDD = function(){
       verifyActions.isElementDisplayed(Threshold_AlertType_N);
     }
    this.verifyVisibility_ActiveCheckBox = function(){
       verifyActions.isElementDisplayed(Threshold_Pop_CHECKB);
       buttonActions.click(Threshold_Pop_CHECKB);
     }
     this.click_on_Edit = function(value){
        element(By.xpath("//*[@ng-reflect-message='Edit Item']")).click();
        waitActions.wait(3000)
     }
     this.verify_EditThreshold_Header = function(){
         verifyActions.isElementDisplayed(element(By.xpath("//*[contains(text(),'Edit Node Threshold')]")))
     }
    this.verifyPresence_EditIcons = function(){
        verifyActions.isElementDisplayed(Edit_column);
        for(var i =0; i<=AllEdit_icon.length; i++){
            verifyActions.isElementDisplayed(AllEdit_icon[i]);
        }
    }
    this.click_on_Trash = function(value){
        element.all(By.xpath("//*[@ng-reflect-message='Delete Item']")).first().click();
        waitActions.wait(3000)
     }
    this.clickTrash_ValidateThreshold = function(){
        element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().getText().then(function(value1){
            console.log(value1)
            element.all(By.xpath("//*[@ng-reflect-message='Delete Item']")).first().click().then(function(){
                waitActions.wait(3000)
                buttonActions.click(Delete_No);
                waitActions.wait(1000)
            }).then(function(){
                element.all(by.xpath("//mat-cell//parent::mat-row/mat-cell[1]")).first().getText().then(function(value2){
                    expect(value1).toContain(value2);
                })
            })
        })
     }
     this.clickTrash_ValidateThresholdNotPresence = function(){
        element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().getText().then(function(value1){
            element.all(By.xpath("//*[@ng-reflect-message='Delete Item']")).first().click().then(function(){
                waitActions.wait(3000)
                buttonActions.click(Delete_Yes);
                waitActions.wait(8000)
            }).then(function(){
                element.all(by.xpath("//mat-cell//parent::mat-row/mat-cell[1]")).getText().then(function(value2){ 
                expect(value2).not.toContain(value1);
                })
            })
        })
     }
     this.Delete_ClickOnNo = function()
     {
       verifyActions.isElementDisplayed(Delete_No);
       buttonActions.click(Delete_No);
    }
    this.Verify_thresholdPrfesence =  function (nodes){
        element.all(by.xpath("//mat-cell//parent::mat-row/mat-cell[1]")).getText().then(function(itemList) {
        expect(itemList).toContain(nodes);
      });
     }
    this.Verify_thresholdNotPrfesence =  function (nodes){
        element.all(by.xpath("//mat-cell//parent::mat-row/mat-cell[1]")).getText().then(function(itemList) {
        expect(itemList).not.toContain(nodes);
      });
    }
    this.Delete_ClickOnYes = function(){
       verifyActions.isElementDisplayed(Delete_Yes);
       buttonActions.click(Delete_Yes);
       waitActions.wait(4000)
     }
     this.verifyPresence_DeletePopup = function(){
        verifyActions.isElementDisplayed(Delete_Yes);   
    }
    this.verifyPresence_TrashIcons = function(){
        verifyActions.isElementDisplayed(Trash_column);
        for(var i =0; i<=AllTrash_Icon.length; i++){
            verifyActions.isElementDisplayed(AllTrash_Icon[i]);
        }
    }
    this.verifyPresence_Search = function(){
        verifyActions.isElementDisplayed(Search);
    }
    this.verifyPresence_ClearAll = function(){
        verifyActions.isElementDisplayed(Clear_all);
        buttonActions.click(Clear_all);
    }
    this.verifyPresence_AddButton = function(){
        verifyActions.isElementDisplayed(Add_btn);
        buttonActions.click(Add_btn);
        waitActions.wait(4000)
    }
    this.SelectNode_FromNodeListing = function(){
        verifyActions.isElementDisplayed(Node_selectbox);
        buttonActions.click(Node_selectbox);
        waitActions.wait(2000)
        AllNodes_InList.first().click();
        hotkeys.trigger('esc');
    }
    this.SelecttheAlertType = function(){
        verifyActions.isElementDisplayed(Alerttype_selectbox);
        buttonActions.click(Alerttype_selectbox);
        AllAlert_InList.first().click();
        waitActions.wait(1000)
    }
    this.SelectGroup_FromGroupListing = function(){
        verifyActions.isElementDisplayed(Threshold_GroupTab);
        buttonActions.click(Threshold_GroupTab);
        buttonActions.click(Group_selectbox);
        waitActions.wait(2000)
        AllGroup_InList.first().click();
        hotkeys.trigger('esc');
    }
    this.SelecttheAlertType_Group = function(){
        verifyActions.isElementDisplayed(Alerttype_selectbox);
        buttonActions.click(Alerttype_selectbox);
        AllAlert_InList.last().click();
        waitActions.wait(1000)
    }
    this.SelectZones_FromZonesListing = function(){
        verifyActions.isElementDisplayed(Threshold_ZoneTab);
        buttonActions.click(Threshold_ZoneTab);
        buttonActions.click(Zone_selectbox);
        waitActions.wait(2000)
        AllZones_InList.first().click();
        hotkeys.trigger('esc');
    }
    this.VerfiyVisibility_Threshold = function(){
        verifyActions.isElementDisplayed(Threshold);
        buttonActions.click(Threshold);
    }
    this.enter_ThresholdValue = function (value) {
        inputBoxActions.type(Threshold, value);
        return this;
    };
    this.Click_Save = function(){
        verifyActions.isElementDisplayed(Threshold_Save);
        buttonActions.click(Threshold_Save);
    }
    this.SetPagesValue_5 = function () {
       buttonActions.click(Page);
       buttonActions.click(Page_5);
       waitActions.wait(6000)
    };
    this.clickNext_Arrow =  function(){
        try{
           if(Next_Arrow.isEnabled()){
                buttonActions.click(Next_Arrow);
                browser.sleep(3000)
                verifyActions.isElementDisplayed(Alerttype_column);
             }
        }
       catch (err) {
          console.log('Next Button is disabled');
        }
    }
    
    this.clickPre_Arrow =  function(){
        try{
           if(Pre_Arrow.isEnabled()){
                buttonActions.click(Pre_Arrow);
                browser.sleep(3000)
                verifyActions.isElementDisplayed(Alerttype_column);
             }
        }
       catch (err){
          console.log('Pre Button is disabled');
        }
    }
    this.SendValuein_Threshold =  function (value){
    inputBoxActions.type(Threshold_value, value);
       waitActions.wait(2000)
       Threshold_savebtn.click();
       waitActions.wait(5000)
    }
}