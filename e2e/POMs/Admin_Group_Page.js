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

    var Ubicquia_Admin_Group = objLocator.findLocator(objRepo.Menu.Admin_Group);
    var Ubicquia_Admin_Group_GroupName = objLocator.findLocator(objRepo.Menu.Admin_Group_GroupName);
    var Ubicquia_Admin_Group_NodeName = objLocator.findLocator(objRepo.Menu.Group_Node_Btn);

    var Group_subTab = objLocator.findLocator(objRepo_n.Menu.Group_subTab);
    var group_nodeText = objLocator.findLocator(objRepo_n.Group.Node_Text);
    var Group_Name = objLocator.findLocator(objRepo_n.Group.Group_Name);
    var Group_nameColumn = objLocator.findLocator(objRepo_n.Group.Group_nameColumn);
    var AllGroup_Name = objLocator.findLocator_ElementAll(objRepo_n.Group.AllGroup_Name);
    var Group_allNode = objLocator.findLocator_ElementAll(objRepo_n.Group.Group_allNode);
    var Group_popuup_allNodes = objLocator.findLocator_ElementAll(objRepo_n.Group.Group_popuup_allNodes);
    var group_node_List = objLocator.findLocator_ElementAll(objRepo_n.Group.group_node_List);
    var Nodes_AttachedGroup = objLocator.findLocator_ElementAll(objRepo_n.Group.Nodes_AttachedGroup);
    
    var Description_Column = objLocator.findLocator(objRepo.Admin_Groups.Description_Column);
    var Description_List = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Description_List);
    var Group_List = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Group_List);
    var Node_SearchBox = objLocator.findLocator(objRepo.Admin_Groups.Node_SearchBox);
    var Node_SearchBox_Element = objLocator.findLocator(objRepo.Admin_Groups.Node_SearchBox_Element);
    var Plus_Add_Icon = objLocator.findLocator(objRepo.Admin_Groups.Plus_Add_Icon);
    var Group_Name_List = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Group_Name_List);
    var Edit_Group_Btn = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Edit_Group_Btn);
    var Delete_Group_Btn = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Delete_Group_Btn);
    var Delete_PopUp_Text = objLocator.findLocator(objRepo.Admin_Groups.Delete_PopUp_Text);
    var Delete_Group_Yes = objLocator.findLocator(objRepo.Admin_Groups.Delete_Group_Yes);
    var Delete_Group_No = objLocator.findLocator(objRepo.Admin_Groups.Delete_Group_No);
    var Pagination_Previous_Btn = objLocator.findLocator(objRepo.Admin_Groups.Pagination_Previous_Btn);
    var Pagination_Next_Btn = objLocator.findLocator(objRepo.Admin_Groups.Pagination_Next_Btn);
    var Added_Nodes_ToGroup = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Added_Nodes_ToGroup);
    var Create_Edit_Group_Title = objLocator.findLocator(objRepo.Admin_Groups.Create_Edit_Group_Title);
    var Create_Edit_Group_NamePlace = objLocator.findLocator(objRepo.Admin_Groups.Create_Edit_Group_NamePlace);
    var Create_Edit_Group_Description = objLocator.findLocator(objRepo.Admin_Groups.Create_Edit_Group_Description);
    var Create_Edit_Group_Next_Btn = objLocator.findLocator(objRepo.Admin_Groups.Create_Edit_Group_Next_Btn);
    var Create_Edit_Group_Close_Cancel_Btn = objLocator.findLocator(objRepo.Admin_Groups.Create_Edit_Group_Close_Cancel_Btn);
    var Create_Group_NodesList = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Create_Group_NodesList);
    var Create_Group_Nodes_CheckBox = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Create_Group_Nodes_CheckBox);
    var Create_Group_Nodes_Present = objLocator.findLocator_ElementAll(objRepo.Admin_Groups.Create_Group_Nodes_Present);
    var Create_Group_SavePlus_Btn = objLocator.findLocator(objRepo.Admin_Groups.Create_Group_SavePlus_Btn);
    var Create_Group_Save_Btn = objLocator.findLocator(objRepo.Admin_Groups.Create_Group_Save_Btn);


    this.clickOnGroup = function() {
        buttonActions.click(Ubicquia_Admin_Group);
        browser.sleep(2000);
    }
    this.verifyGroupName = function(value){
       expect(Ubicquia_Admin_Group_GroupName.getText()).toEqual(value);
    }
    this.wait_Till_Group_Subtab_visibility = function(){
       waitActions.waitForElementInPollingEvery(Group_subTab);
   }
    this.click_Group_Btn = function () {
    waitActions.clickandVerify(Group_subTab,Group_nameColumn);
    waitActions.wait(5000)
    return this;
   };
    this.waittil_Group_Column_appears =function() {
    waitActions.waitForElementInPollingEvery(Group_nameColumn);
   }
    this.clickon_firstNode_btn = function(){
        Group_allNode.first().click();
        waitActions.wait(2000);
      };
    this.getting_Nodes_From_GroupList = function () {
        Group_popuup_allNodes.getText().then(function(text){
            console.log("Nodes name are  = "+text);
        });
        hotkeys.trigger('esc');
    };
    this.verifyPresence_Node_InGroup = function(){
        buttonActions.clickFirstElement(group_node_List);
        browser.sleep(2000);
        for(var i = 0;i<=Nodes_AttachedGroup.length;i++){
            verifyActions.isElementDisplayed(Nodes_AttachedGroup[i]);
        }
    };    
    this.GettheNodeText  = function () {
        verifyActions.getTextOfElement(Group_Name,"NAME");
        return this;
    };
    this.gettheAdded_GroupsName = function(){
        AllGroup_Name.getText().then(function(text){
           console.log("Groups are  = "+text);
       });
     };
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    this.Apply_HotKeys = function(){
        hotkeys.trigger('esc');
    }
    this.verifyPresenceOf_SearchBox = function(){
        browser.sleep(1000)
        verifyActions.isElementDisplayed(Node_SearchBox);
    }
    this.passData_ToSearchBox = function(){
        Group_Name_List.first().getText().then(function(text){
            Node_SearchBox.sendKeys(text);
        })
        browser.sleep(2000);
    }
    this.verify_SearchResult = function(){
        browser.sleep(1000)
        fatchingTextActions.getCountOfAllElements(Group_List).then(function(rowsNo){
            expect(rowsNo).toBe(1);
        })
    }
    this.verifyGroup_Description_Column = function(textOfColumn){
        Description_Column.getText().then(function(text){
            console.log('Column is ' +text)
           expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresence_PlusAdd_Icon = function(){
        verifyActions.isElementDisplayed(Plus_Add_Icon);
    }
    this.clickOn_PlusAdd_ToCreateGroup = function(){
        verifyActions.isElementDisplayed(Plus_Add_Icon);
        buttonActions.click(Plus_Add_Icon);
        browser.sleep(1000);
    }
    this.verifyVisibility_EditIcon = function(){
        Edit_Group_Btn.each(function(editBtn){
            verifyActions.isElementDisplayed(editBtn);
        })
    }
    this.SelectOneGroup_ToEdit = function(){
        buttonActions.clickFirstElement(Edit_Group_Btn);
        browser.sleep(1000);
    }
    this.verifyNameOfGroup_Not_EditedName = function(nameOfGroup){
        Group_Name_List.first().getText().then(function(textName){
              expect(textName).not.toBe(nameOfGroup);
        })
    }
    this.verifyNameOfGroup_EditedName = function(nameOfGroup){
        verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +nameOfGroup+ "')]")));
    }
    ///////////
    this.verifyVisibility_DeleteIcon = function(){
        Delete_Group_Btn.each(function(deleteBtn){
            verifyActions.isElementDisplayed(deleteBtn);
        })
    }
    var groupName;
    this.verifyVisibility_DeletePopUp = function(popUpText){
        Group_Name_List.last().getText().then(function(nameGroup){
             groupName = nameGroup;
        })
        buttonActions.clickLastElement(Delete_Group_Btn); 
        browser.sleep(1000);
        Delete_PopUp_Text.getText().then(function(textOfElement){
            expect(textOfElement).toBe(popUpText);
        })
        browser.sleep(2000);
    }
    this.verifyName_GroupName_Deleted = function(){
        Group_Name_List.last().getText().then(function(textName){
              expect(textName).not.toBe(groupName);
        })
    }
    this.clickTo_Group_Not_ToDelete_Verify_Presence = function(){
        Group_Name_List.last().getText().then(function(nameGroup){
            buttonActions.clickLastElement(Delete_Group_Btn); 
            browser.sleep(1000);
            buttonActions.click(Delete_Group_No);
            browser.sleep(1000);
            verifyActions.isElementDisplayed(element(by.xpath("//mat-cell[contains(text(),'" +nameGroup+ "')]")));
        })
    }
    this.clickOn_Cancel_DeleteGroup_PopUp = function(){
        buttonActions.click(Delete_Group_No);
        browser.sleep(2000);
    }
    this.clickOn_Yes_DeleteGroup_PopUp = function(){
        Delete_Group_Yes.click();
        browser.sleep(4000);
    }
//////////////////////    
    this.verifyDisplayed_GroupPopUp_Title = function(textOfElement){
        Create_Edit_Group_Title.getText().then(function(text){
            console.log('Title of create group is ' +text);
            expect(text).toBe(textOfElement);
        })
    }
    this.verifyPresence_Name_InputPlace = function(textOfElement){
        fatchingTextActions.getValueForAttribute(Create_Edit_Group_NamePlace,'placeholder').then(function(text){
            console.log('placeholder is ' +text)
            expect(text).toBe(textOfElement)
        })
    }
    this.verifyPresence_Description_InputPlace = function(textOfElement){
        fatchingTextActions.getValueForAttribute(Create_Edit_Group_Description,'placeholder').then(function(text){
            console.log('placeholder is ' +text)
            expect(text).toBe(textOfElement)
        })
    }
    this.passDataTo_InputFields = function(textInput){
        Create_Edit_Group_NamePlace.clear();
        Create_Edit_Group_NamePlace.sendKeys(textInput);
        Create_Edit_Group_Description.clear();
        Create_Edit_Group_Description.sendKeys('XXX');
    }
    this.verifyPreFilled_Data_EditGroup = function(){
        Create_Edit_Group_NamePlace.getText().then(function(textName){
            expect(textName).not.toBe('null');
        })
        Create_Edit_Group_Description.getText().then(function(textDesc){
            expect(textDesc).not.toBe('null');
        })
    }
    this.clickOn_Next_Btn_CreateGroup = function(){
        buttonActions.click(Create_Edit_Group_Next_Btn);
        browser.sleep(2000);
    }
    this.clickOn_Cancel_Close_Btn = function(){
        buttonActions.click(Create_Edit_Group_Close_Cancel_Btn);
        browser.sleep(2000);
    }
    
///////////////////////    
    this.verifyDisplayed_NodesPresent = function(){  
        Create_Group_NodesList.each(function(eachNode){
            verifyActions.isElementDisplayed(eachNode);
        })
    }
    var noOfNodes;
    this.select_MultipleNodes_CreateGroup = function(){
        Create_Group_Nodes_CheckBox.each(function(nodes){
            buttonActions.click(nodes);
        })
        browser.sleep(2000);
        Create_Group_Nodes_CheckBox.count().then(function(numbers){
           return noOfNodes = numbers;
        })
    }
    this.verifyVisibility_Nodes_AttachedToGroup = function(){
        browser.sleep(4000);
        Added_Nodes_ToGroup.count().then(function(numbers){
            expect(numbers).toBe(noOfNodes);
        })
        browser.sleep(2000);
    }
    this.clickOn_SaveBtn_CreateGroup = function(){
        buttonActions.click(Create_Group_SavePlus_Btn);
        browser.sleep(2000);
        buttonActions.click(Create_Group_Save_Btn);
        browser.sleep(3000);
    }
    var nameOfNode;
    this.clickOn_Node_Attached_ToGroup = function(nameOfGroup_Created){
        buttonActions.click(element(by.xpath("//mat-cell[contains(text(),'" +nameOfGroup_Created+ "')]/following::button[1]")));
        browser.sleep(3000)
        Added_Nodes_ToGroup.getText().then(function(nodeName){
            return nameOfNode = nodeName;
        })
    }
    this.verify_NotVisibility_Nodes = function(){
        Create_Group_Nodes_Present.each(function(nodesAvailable){
            nodesAvailable.getText().then(function(nodeName){
                expect(nodeName).not.toBe(nameOfNode);
            })
        })
        browser.sleep(2000)
    }
    this.verify_NotVisibility_InActive_Nodes = function(nameOfNode){
        Create_Group_Nodes_Present.each(function(nodesAvailable){
            nodesAvailable.getText().then(function(nodeName){
                expect(nodeName).not.toBe(nameOfNode);
            })
        })
        browser.sleep(2000)
    }
    //////////////////////
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
     
}