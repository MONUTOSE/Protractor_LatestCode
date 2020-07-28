module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');
    var objRepo_n = require('../resources/objectRepository_N.json');
    var hotkeys = require('protractor-hotkeys');
    
    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var fatchingTextActions = new commons.fatchingTextActions();
    var verifyActions = new commons.verifyActions();
    var displayedAction = new commons.testingDisplayedActions();

    var Ubicquia_ZonesSub_Menu = objLocator.findLocator(objRepo.Menu.Zones_subtab);
    var Ubicquia_ZonesSubNmae_Text = objLocator.findLocator(objRepo.Menu.Zone_name);
    var Ubicquia_ZoneSubtab_Addbtn = objLocator.findLocator(objRepo.Menu.ZoneSubtab_AddBTN);
    var Ubicquia_Zone_AddName_btn = objLocator.findLocator(objRepo.Menu.AddZone_Name);
    var Ubicquia_Zone_AddNew_Dropdown_btn = objLocator.findLocator(objRepo.Menu.AddNewZone_Dropdown);
    var Ubicquia_Zone_GroupAdded_btn = objLocator.findLocator(objRepo.Menu.Zone_Group_Btn);
    var Ubicquia_Zone_Group_AddedName_btn = objLocator.findLocator(objRepo.Menu.Zone_GroupName_Attached);

    var Zones_SubTab = objLocator.findLocator(objRepo_n.Zones.Zones_SubTab);
    var ZoneSubTab_Zonename = objLocator.findLocator(objRepo_n.Zones.ZoneSubTab_Zonename);
    var All_Zones_namwe = objLocator.findLocator_ElementAll(objRepo_n.Zones.All_Zones_namwe);
    var Zone_GroupName = objLocator.findLocator_ElementAll(objRepo_n.Zones.Zone_GroupName);
    var zone_add = objLocator.findLocator_ElementAll(objRepo_n.Zones.zone_add);
    var addZone_group = objLocator.findLocator(objRepo_n.Zones.addZone_group);
    var addZone_groupList = objLocator.findLocator_ElementAll(objRepo_n.Zones.addZone_groupList);
    var Zone_Popup_GroupsName = objLocator.findLocator_ElementAll(objRepo_n.Zones.Zone_Popup_GroupsName);

    var Zone_List = objLocator.findLocator_ElementAll(objRepo.Admin_Zones.Zone_List);
    var Node_SearchBox = objLocator.findLocator(objRepo.Admin_Zones.Node_SearchBox);
    var Node_SearchBox_Element = objLocator.findLocator(objRepo.Admin_Zones.Node_SearchBox_Element);
    var Edit_Zone_Btn = objLocator.findLocator_ElementAll(objRepo.Admin_Zones.Edit_Zone_Btn);
    var Delete_Zone_Btn = objLocator.findLocator_ElementAll(objRepo.Admin_Zones.Delete_Zone_Btn);
    var Delete_PopUp_Text = objLocator.findLocator(objRepo.Admin_Zones.Delete_PopUp_Text);
    var Delete_Zone_Yes = objLocator.findLocator(objRepo.Admin_Zones.Delete_Zone_Yes);
    var Delete_Zone_No = objLocator.findLocator(objRepo.Admin_Zones.Delete_Zone_No);
    var Plus_Add_Icon = objLocator.findLocator(objRepo.Admin_Zones.Plus_Add_Icon);
    var Zone_Name_List = objLocator.findLocator_ElementAll(objRepo.Admin_Zones.Zone_Name_List);
    var Pagination_Previous_Btn = objLocator.findLocator(objRepo.Admin_Zones.Pagination_Previous_Btn);
    var Pagination_Next_Btn = objLocator.findLocator(objRepo.Admin_Zones.Pagination_Next_Btn);
    var Create_Edit_Zone_Title = objLocator.findLocator(objRepo.Admin_Zones.Create_Edit_Zone_Title);
    var Create_Edit_Zone_NamePlace = objLocator.findLocator(objRepo.Admin_Zones.Create_Edit_Zone_NamePlace);
    var Create_Edit_Zone_Group_DropDown = objLocator.findLocator(objRepo.Admin_Zones.Create_Edit_Zone_Group_DropDown);
    var Create_Edit_Zone_GroupList = objLocator.findLocator_ElementAll(objRepo.Admin_Zones.Create_Edit_Zone_GroupList);
    var Create_Edit_Zone_Save_Btn = objLocator.findLocator(objRepo.Admin_Zones.Create_Edit_Zone_Save_Btn);
    var Create_Edit_Zone_Close_Cancel_Btn = objLocator.findLocator(objRepo.Admin_Zones.Create_Edit_Zone_Close_Cancel_Btn);
     
  this.click_Zone_SubTab = function () {
    waitActions.clickandWait(Zones_SubTab);
    waitActions.wait(2000)
    return this;
   };
   this.verify_ZoneName_Column_Availability  = function () {
        verifyActions.isElementDisplayed(ZoneSubTab_Zonename);
        return this;
   };
  this.getAll_ZonesNames = function(){
        All_Zones_namwe.getText().then(function(text){
        console.log("Zones are " +text)
    });
  };
    this.verfiyGruopButtonAvailable = function(value){
        verifyActions.getTextOfElement(Zone_GroupName , value);
    }
    this.click_on_firstGroup = function(){
        Zone_GroupName.first().click();
        waitActions.wait(1000);
      };
      this.get_Group_InsideZone = function(){
        Zone_Popup_GroupsName.getText().then(function(text){
            console.log("Groups name are  = "+text);
        });
      };
    this.click_Zone_SubTab_Add = function () {
        waitActions.clickandVerify(zone_add,addZone_group);
        browser.sleep(2000)
        return this;
    };
    this.click_Zone_GroupDD= function () {
        waitActions.clickandWait(addZone_group);
        return this;
    };
    this.getting_Group_FromList = function () {
        addZone_groupList.getText().then(function(text){
            console.log("groups name are  = "+text);
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    this.gettheAdded_Zones_Name = function(){
        All_Zones_namwe.getText().then(function(text){
            console.log("Zones name are  = "+text);
        });
    };
    this.verify_Zone_name = function (value) {
        expect(Ubicquia_ZonesSubName_Text.getText()).toEqual(value);
        return this;
    };
    this.verifyVisibility_Canceled_ZoneCreation = function(canceledZone){
        Zone_Name_List.each(function(eachZoneName){
             eachZoneName.getText().then(function(nameOfZone){
                 expect(nameOfZone).not.toBe(canceledZone);
             })
        }) 
    }
    this.verifyPresence_Created_ZoneName = function(createdZone){
        verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +createdZone+ "')]")));
    }
    this.verifyVisibility_EditIcon = function(){
        Edit_Zone_Btn.each(function(editBtn){
            verifyActions.isElementDisplayed(editBtn);
        })
    }
    this.select_OneZone_ForEdit = function(){
        buttonActions.clickFirstElement(Edit_Zone_Btn);
        browser.sleep(3000);
    }
    this.verifyVisibility_DeleteIcon = function(){
        Delete_Zone_Btn.each(function(deleteBtn){
            verifyActions.isElementDisplayed(deleteBtn);
        })
    }
    var zoneName;
    this.select_Zone_ToDelete = function(){
        Zone_List.first().getText().then(function(nameOfZone){    
            return zoneName = nameOfZone;
        })
        buttonActions.clickFirstElement(Delete_Zone_Btn); 
        browser.sleep(3000);
    }
    this.verifyPresence_ZoneName_NotDeleted = function(){
        verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +zoneName+ "')]")));
    }
    this.verifyName_ZoneName_Deleted = function(){
        Zone_Name_List.first().getText().then(function(textName){
              expect(textName).not.toBe(zoneName);
        })
    }
    this.selectZone_Verify_Not_Deleted = function(){
        Zone_Name_List.first().getText().then(function(nameOfZone){    
            buttonActions.clickFirstElement(Delete_Zone_Btn); 
            browser.sleep(3000);
            buttonActions.click(Delete_Zone_No);
            browser.sleep(2000);
            verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +nameOfZone+ "')]")));
        })
    }
    this.selectZone_Verify_Is_Deleted = function(){
        Zone_Name_List.first().getText().then(function(nameOfZone){    
           buttonActions.clickFirstElement(Delete_Zone_Btn); 
           browser.sleep(4000);
           buttonActions.click(Delete_Zone_Yes);
           browser.sleep(4000);
           Zone_Name_List.first().getText().then(function(textName){
            expect(textName).not.toBe(nameOfZone);
           })
        })
    }
    this.verifyVisibility_DeletePopUp = function(popUpText){
        Delete_PopUp_Text.getText().then(function(textOfElement){
            expect(textOfElement).toBe(popUpText);
        }) 
    }
    this.clickOn_Yes_DeleteZone_PopUp = function(){
        buttonActions.click(Delete_Zone_Yes);
        browser.sleep(3000);
    }
    this.clickOn_Cancel_DeleteGroup_PopUp = function(){
        buttonActions.click(Delete_Zone_No);
        browser.sleep(3000);
    }
    ///////////////////////////
    this.verifyPresenceOf_SearchBox = function(){
        browser.sleep(2000)
        verifyActions.isElementDisplayed(Node_SearchBox);
    }
    this.passData_ToSearchBox = function(){
        Zone_Name_List.first().getText().then(function(text){
            Node_SearchBox.sendKeys(text);
        })
        browser.sleep(2000)
    }
    this.verify_SearchResult = function(){
        browser.sleep(4000)
        fatchingTextActions.getCountOfAllElements(Zone_List).then(function(rowsNo){
            expect(rowsNo).toBe(1);
        })
    } 
    //////////////////////////
    this.verifyPresence_PlusAdd_Icon = function(){
        verifyActions.isElementDisplayed(Plus_Add_Icon);
    }
    this.clickOn_PlusAdd_ToCreateZone = function(){
        verifyActions.isElementDisplayed(Plus_Add_Icon);
        buttonActions.click(Plus_Add_Icon);
        browser.sleep(3000);
    }
    ///////////////////////
    this.verifyDisplayed_ZonePopUp_Title = function(textOfElement){
        Create_Edit_Zone_Title.getText().then(function(text){
            expect(text).toBe(textOfElement);
        })
    }
    var groupName;
    this.passData_Create_Zone = function(nameOfZone){
        browser.sleep(2000);
        Create_Edit_Zone_NamePlace.sendKeys(nameOfZone);
        browser.sleep(2000);
        buttonActions.click(Create_Edit_Zone_Group_DropDown);
        Create_Edit_Zone_GroupList.first().getText().then(function(nameOfGroup){
            return groupName = nameOfGroup;
        })
        buttonActions.clickFirstElement(Create_Edit_Zone_GroupList);
        browser.sleep(2000);
        hotkeys.trigger('esc');
    }
    this.verify_Not_Visibility_GroupName = function(nameOfZone){
        browser.sleep(2000);
        Create_Edit_Zone_NamePlace.sendKeys(nameOfZone);
        browser.sleep(2000);
        buttonActions.click(Create_Edit_Zone_Group_DropDown);
        browser.sleep(4000);
        Create_Edit_Zone_GroupList.each(function(eachGroup){
            eachGroup.getText().then(function(text){
                expect(text).not.toBe(groupName);
            })
        })
    }
    this.clickOn_Save_Btn_CreateZone = function(){
        buttonActions.click(Create_Edit_Zone_Save_Btn);
        browser.sleep(4000)
    }
    this.clickOn_Cancel_Close_Btn = function(){
        buttonActions.click(Create_Edit_Zone_Close_Cancel_Btn);
        browser.sleep(4000);
    }
    this.clickOnPagination_Next_ArrowMark = function(){
        waitActions.wait(3000);
        fatchingTextActions.getValueForAttribute(Pagination_Next_Btn,"ng-reflect-disabled").then(function(text){
            if(text === 'false'){
                buttonActions.click(Pagination_Next_Btn);
            }
            waitActions.wait(3000);
        })
    }
    this.clickOnPagination_Prev_ArrowMark = function(){
        waitActions.wait(3000);
        fatchingTextActions.getValueForAttribute(Pagination_Previous_Btn,"ng-reflect-disabled").then(function(text){
            if(text === 'false'){
                buttonActions.click(Pagination_Previous_Btn);
            }
            waitActions.wait(3000);
        })
    }
    //////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////      

    this.clickZonesSub_AddButton = function () {
        buttonActions.click(Ubicquia_ZoneSubtab_Addbtn);
        browser.sleep(3000);
        return this;
    };
    this.enter_NewZoneName_Keyword = function (value) {
        browser.actions().mouseMove(Ubicquia_Zone_AddName_btn).perform();
        browser.sleep(1000)
        inputBoxActions.type(Ubicquia_Zone_AddName_btn, value);
        return this;
    };
    this.clickAddZones_Dropdown = function () {
        buttonActions.click(Ubicquia_Zone_AddNew_Dropdown_btn);
        browser.sleep(3000);
        return this;
    };
    this.clickGroup_Attached_ToZone = function () {
        buttonActions.click(Ubicquia_Zone_GroupAdded_btn);
        browser.sleep(3000);
        return this;
    };
    this.verify_ZoneAdded_GroupName = function(value){
        expect(Ubicquia_Zone_Group_AddedName_btn.getText()).toEqual(value);
     }
}