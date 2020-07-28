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

    var Menu_Groups = objLocator.findLocator(objRepo.Menu.Menu_Groups);
    var header_Group = objLocator.findLocator(objRepo.Menu.Groups_Header);
    var allGroups = objLocator.findLocator_ElementAll(objRepo.Menu.Manu_Groups_names);
    var Menu_Group = objLocator.findLocator(objRepo_n.Group.Menu_Group);
    var Menu_Group_LS_Column = objLocator.findLocator(objRepo_n.Group.Menu_Group_LS_Column);
    var Menu_Group_AllGroup = objLocator.findLocator_ElementAll(objRepo_n.Group.Menu_Group_AllGroup);
    var Menu_Group_NameColumn = objLocator.findLocator(objRepo_n.Group.Menu_Group_NameColumn);
    var Menu_Group_AllToggel = objLocator.findLocator_ElementAll(objRepo_n.Group.Menu_Group_AllToggel);
    var Menu_Group_Description_Header = objLocator.findLocator(objRepo_n.Group.Menu_Group_Description_Header);
    var Menu_Group_Description_All = objLocator.findLocator_ElementAll(objRepo_n.Group.Menu_Group_Description_All);
    var Popup_GroupName = objLocator.findLocator_ElementAll(objRepo_n.Group.Popup_GroupName);

    var Group_PopUp_GroupName = objLocator.findLocator(objRepo.Menu_Group.Group_PopUp_GroupName);
    var Menu_Group_NameRows = objLocator.findLocator_ElementAll(objRepo.Menu_Group.Menu_Group_NameRows);
    var Menu_GroupRow_Btn = objLocator.findLocator_ElementAll(objRepo.Menu_Group.Menu_GroupRow_Btn);
    var LightSwitch_Btn = objLocator.findLocator_ElementAll(objRepo.Menu_Group.LightSwitch_Btn);
    var Pagination_DropDown = objLocator.findLocator(objRepo.Menu_Group.Pagination_DropDown);
    var Pagination_PagesRange = objLocator.findLocator_ElementAll(objRepo.Menu_Group.Pagination_PagesRange);
    var Pagination_Five_Range = objLocator.findLocator(objRepo.Menu_Group.Pagination_Five_Range);
    var Pagination_Previous_Btn = objLocator.findLocator(objRepo.Menu_Group.Pagination_Previous_Btn);
    var Pagination_Next_Btn = objLocator.findLocator(objRepo.Menu_Group.Pagination_Next_Btn);
    var Ubicquia_Version = objLocator.findLocator(objRepo.HomePage.Ubicquia_Version);
    
    this.verifyPresence_MenuGroup = function(textOfElement){
        Menu_Groups.getText().then(function(text){
            expect(text).toBe(textOfElement)
        })
    }
    this.clickingOn_MenuGroup = function(){
        buttonActions.click(Menu_Groups);
    }
    this.verifyPresent_NoOfGroups = function(){
        waitActions.wait(5000);
        verifyActions.isElementDisplayed(header_Group);
        waitActions.wait(2000);
        for(var i=0;i<=allGroups.length;i++){
            verifyActions.isElementDisplayed(allGroups[i]);
        }
    }
    this.clickingOn_MenuGroupOption = function(){
      buttonActions.click(Menu_Groups);
      waitActions.wait(4000);
     }
    this.Verify_Group_PageDisplayed =  function(){
        verifyActions.isElementDisplayed(header_Group);
     }
    this.ClickOn_GroupName = function(value){
        element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().click().getText().then(function(value1){
            waitActions.wait(3000);
            Popup_GroupName.getText().then(function(value2){
                expect(value2).toEqual([value1]);
            })
        });
    }
    this.Verify_GroupName_Appears =  function(){
        verifyActions.isElementDisplayed(Menu_Group_NameColumn);
        waitActions.wait(2000);
        for(var i=0;i<=Menu_Group_AllGroup.length;i++){
           verifyActions.isElementDisplayed(Menu_Group_AllGroup[i]);
        }
    }
    this.Getting_AllGroup_Name = function(){
        Menu_Group_AllGroup.getText().then(function (value) {
            console.log("All the available Groups are  " +value);
        });
     }
    this.VerifyPresent_ToggleSwitch =  function(){
        verifyActions.isElementDisplayed(Menu_Group_LS_Column);
        waitActions.wait(2000);
        for(var i=0;i<=Menu_Group_AllToggel.length;i++){
          verifyActions.isElementDisplayed(Menu_Group_AllToggel[i]);
      }
    }
    this.verifyPresent_GroupDescription = function(){
        verifyActions.isElementDisplayed(Menu_Group_Description_Header);
        waitActions.wait(2000);
        for(var i=0;i<=Menu_Group_Description_All.length;i++){
            verifyActions.isElementDisplayed(Menu_Group_Description_All[i]);
        }
    }
    this.Getting_AllGroup_Description = function(){
        Menu_Group_Description_All.getText().then(function (value) {
           console.log("All the available Groups are  " +value);
       });
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
      this.clickOn_LightSwitch_Btn = function(statusOfElement){
        waitActions.wait(8000);
        LightSwitch_Btn.each(function(each_LightSwitch_Btn){
            fatchingTextActions.getValueForAttribute(each_LightSwitch_Btn,"class").then(function(text){
                if(text === statusOfElement){
                    buttonActions.click(each_LightSwitch_Btn);
                    waitActions.wait(500);
                }
            })
        })
        waitActions.wait(3000);
        buttonActions.click(Ubicquia_Version);
    }
    this.verifyLightSwitch_On = function(textOfElement){
        // LightSwitch_Btn.each(function(each_LightSwitch_Btn){
        //     fatchingTextActions.getValueForAttribute(each_LightSwitch_Btn,"class").then(function(text){
        //         expect(text).toBe(textOfElement);
        //     })
        // })
        expect(LightSwitch_Btn.first().getAttribute('class')).toBe(textOfElement);
        waitActions.wait(2000);
    }
    this.verifyLightSwitch_Off = function(textOfElement){
        // LightSwitch_Btn.each(function(each_LightSwitch_Btn){
        //     fatchingTextActions.getValueForAttribute(each_LightSwitch_Btn,"class").then(function(text){
        //         expect(text).toBe(textOfElement);
        //     })
        // })
        expect(LightSwitch_Btn.first().getAttribute('class')).toBe(textOfElement);
        waitActions.wait(2000);
    }
    this.clickOn_GroupRow = function(){
        buttonActions.clickFirstElement(Menu_GroupRow_Btn);
        waitActions.wait(1000);
    }
    ////////////////
    this.clickOn_Pagination_Dropdown_Select_Range = function(selectRange){
        waitActions.wait(3000);
        buttonActions.click(Pagination_DropDown);
        waitActions.wait(1000);         
        buttonActions.click(Pagination_Five_Range);
        browser.sleep(3000);
    }
    this.clickPagination_Next_ArrowMark = function(){
        waitActions.wait(3000);
        fatchingTextActions.getValueForAttribute(Pagination_Next_Btn,"ng-reflect-disabled").then(function(text){
            if(text === 'false'){
                buttonActions.click(Pagination_Next_Btn);
            }
            waitActions.wait(5000);
        })
    }
    this.clickPagination_Prev_ArrowMark = function(){
        waitActions.wait(3000);
        fatchingTextActions.getValueForAttribute(Pagination_Previous_Btn,"ng-reflect-disabled").then(function(text){
            if(text === 'false'){
                buttonActions.click(Pagination_Previous_Btn);
            }
            waitActions.wait(5000);
        })
    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////
    this.clickingOn_MenuGroupOption = function(){
        buttonActions.click(Menu_Groups);
        waitActions.wait(3000);
    }
    this.ClickOn_GroupName = function(){
        Menu_Group_NameRows.first().getText().then(function(text){
           Menu_Group_NameRows.first().click();
           browser.sleep(3000);
           Group_PopUp_GroupName.getText().then(function(textOfElement){
            expect(text).toBe(textOfElement);
        })
       })
    }
    this.click_LightSwitch_To_Verify_Status = function(){
        LightSwitch_Btn.first().click(); 
        waitActions.wait(2000);
        buttonActions.click(Ubicquia_Version);
    }
}