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

    var Menu_Nodes = objLocator.findLocator(objRepo.Menu.Menu_Nodes);
    var header_Node = objLocator.findLocator(objRepo.Menu_Node.Nodes_Header);
    var allNodes = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_List);
    var Node_Name_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Name_Column);
    var Node_NameList = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_NameList);
    var Node_Fixture_Current_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Fixture_Current_Column);
    var Node_FixtureCurrent_List = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_FixtureCurrent_List);
    var Node_Pole_Current_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Pole_Current_Column);
    var Node_PoleCurrent_List = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_PoleCurrent_List);
    var Node_Fixture_Voltage_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Fixture_Voltage_Column);
    var Node_FixtureVoltage_List = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_FixtureVoltage_List);
    var Node_Pole_Voltage_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Pole_Voltage_Column);
    var Node_PoleVoltage_List = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_PoleVoltage_List);
    var Node_Status_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Status_Column);
    var Node_Status_List = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_Status_List);
    var Node_Light_Switch_Column = objLocator.findLocator(objRepo.Menu_Node.Node_Light_Switch_Column);
    var Node_LightSwitch_OptionList = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_LightSwitch_OptionList);
    var LightSwitch_BtnList = objLocator.findLocator_ElementAll(objRepo.Menu_Node.LightSwitch_BtnList);
    var LightSwitch_List_Params = objLocator.findLocator_ElementAll(objRepo.Menu_Node.LightSwitch_List_Params);
    var Node_LightSwitch_enabled = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_LightSwitch_enabled);
    var Node_SwitchedOff_Light = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_SwitchedOff_Light);
    var Node_LightSwitch_Off_Disabled = objLocator.findLocator_ElementAll(objRepo.Menu_Node.Node_LightSwitch_Off_Disabled);
    var LightSwitch_Status = objLocator.findLocator(objRepo.Menu_Node.LightSwitch_Status);
    var Node_SearchBox = objLocator.findLocator(objRepo.Menu_Node.Node_SearchBox);
    var Node_SearchBox_text = objLocator.findLocator(objRepo.Menu_Node.Node_SearchBox_text);
    var Node_SearchBox_Element = objLocator.findLocator(objRepo.Menu_Node.Node_SearchBox_Element);
    var Node_summary = objLocator.findLocator(objRepo.Menu_Node.Node_summary);
    var Node_NAME_column =objLocator.findLocator(objRepo_n.Nodes.Node_NAME_column);
    var Popup_NodeName =objLocator.findLocator(objRepo_n.Nodes.Popup_NodeName);
    
    var LightSwitch_StatusList = objLocator.findLocator_ElementAll(objRepo.Menu_Node.LightSwitch_StatusList);
    var Node_Summary_Group_Link = objLocator.findLocator(objRepo.Menu_Node.Node_Summary_Group_Link);
    var Node_Summary_Zone_Link = objLocator.findLocator(objRepo.Menu_Node.Node_Summary_Zone_Link);
    var NextPage_Arrow =objLocator.findLocator(objRepo_n.Nodes.NextPage_Arrow);
    var PrePage_Arrow =objLocator.findLocator(objRepo_n.Nodes.PrePage_Arrow);
    var ItemPerPagedd =objLocator.findLocator(objRepo_n.Nodes.ItemPerPagedd);
    var Page_5 =objLocator.findLocator(objRepo_n.Nodes.Page_5);
    var FixtureVoltage_Column =objLocator.findLocator(objRepo_n.Nodes.FixtureVoltage_Column);
    var Menu_nodes_status_column =objLocator.findLocator(objRepo_n.Nodes.Menu_nodes_status_column);
    var Menu_nodes_fixtureVoltage_value =objLocator.findLocator(objRepo_n.Nodes.Menu_nodes_fixtureVoltage_value);
    var Menu_Node_Light_switch_toggle =objLocator.findLocator_ElementAll(objRepo_n.Nodes.Menu_Node_Light_switch_toggle);
    var Menu_nodes_fixtureCurrent_value =objLocator.findLocator(objRepo_n.Nodes.Menu_nodes_fixtureCurrent_value);   
    
    this.verifyPresence_MenuNode = function(textOfElement){
        Menu_Nodes.getText().then(function(text){
            expect(text).toBe(textOfElement)
        })
    }
    this.clickingOn_MenuNode = function(){
        buttonActions.click(Menu_Nodes);
        browser.sleep(3000);
    }
    this.clickAndSelectNode = function(){
        buttonActions.clickFirstElement(allNodes);
    }
    this.verifyDisplayedNodeHeader = function(textOfHeader){
        verifyActions.isElementDisplayed(header_Node);
        expect(header_Node.getText()).toBe(textOfHeader)
    }
    this.verifyPresent_NoOfNodes = function(){
        for(var i=0;i<=allNodes.length;i++){
            verifyActions.isElementDisplayed(allNodes[i]);
        }
    }
    this.verify_NodeNameColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Name_Column);
        expect(Node_Name_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodeNameList = function(){
        for(var i=0;i<=Node_NameList.length;i++){
            verifyActions.isElementDisplayed(Node_NameList[i]);
        }
    }
    this.verify_NodeFixtureCurrentColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Fixture_Current_Column);
        expect(Node_Fixture_Current_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodeFixtureCurrentList = function(){
        for(var i=0;i<=Node_FixtureCurrent_List.length;i++){
            verifyActions.isElementDisplayed(Node_FixtureCurrent_List[i]);
        }
    }
    this.verify_NodePoleCurrentColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Pole_Current_Column);
        expect(Node_Pole_Current_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodePoleCurrentList = function(){
        for(var i=0;i<=Node_PoleCurrent_List.length;i++){
            verifyActions.isElementDisplayed(Node_PoleCurrent_List[i]);
        }
    }
    this.verify_NodeFixtureVoltageColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Fixture_Voltage_Column);
        expect(Node_Fixture_Voltage_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodeFixtureVoltageList = function(){
        for(var i=0;i<=Node_FixtureVoltage_List.length;i++){
            verifyActions.isElementDisplayed(Node_FixtureVoltage_List[i]);
        }
    }
    this.verify_NodePoleVoltageColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Pole_Voltage_Column);
        expect(Node_Pole_Voltage_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodePoleVoltageList = function(){
        for(var i=0;i<=Node_PoleVoltage_List.length;i++){
            verifyActions.isElementDisplayed(Node_PoleVoltage_List[i]);
        }
    }
    this.verify_NodeStatusColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Status_Column);
        expect(Node_Status_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodeStatusList = function(){
        for(var i=0;i<=Node_Status_List.length;i++){
            verifyActions.isElementDisplayed(Node_Status_List[i]);
        }
    }
    this.verify_NodeLightSwitchColumn_Present = function(textOFColumn){
        verifyActions.isElementDisplayed(Node_Light_Switch_Column);
        expect(Node_Light_Switch_Column.getText()).toBe(textOFColumn);
    }
    this.verifyPresent_NodeLightSwitchOptionList = function(){
        for(var i=0;i<=Node_LightSwitch_OptionList.length;i++){
            verifyActions.isElementDisplayed(Node_LightSwitch_OptionList[i]);
        }
    } 
    this.clickTo_switchOn_NodeLight = function(){
                browser.sleep(3000);
                LightSwitch_Status.getText().then(function(status){
                    console.log(status)
                    if(status === 'OFF' ){
                        buttonActions.clickFirstElement(LightSwitch_BtnList);
                    }
        })
    }
    this.verifyVisibilityOf_SwitchedOn_Light = function(textOfElement){
        browser.sleep(10000);
        LightSwitch_Status.getText().then(function(textStatus){
            expect(textStatus).toBe(textOfElement);
        })
        browser.sleep(2000);
    }
    this.clickTo_switchOff_NodeLight = function(){
        browser.sleep(3000);
        LightSwitch_Status.getText().then(function(status){
            console.log(status)
            if(status === 'ACTIVE' ){
                buttonActions.clickFirstElement(LightSwitch_BtnList);
            }
        })
    }
    this.verifyVisibilityOf_SwitchedOff_Light = function(textOfElement){
        browser.sleep(9000);
        LightSwitch_Status.getText().then(function(textStatus){
            expect(textStatus).toBe(textOfElement);
        })
        browser.sleep(2000);
    }
    this.verifyPresenceOf_SearchBox = function(textOfColumn){
        verifyActions.isElementDisplayed(Node_SearchBox);
    }
    this.clickOnSearchBox = function(){
        buttonActions.click(Node_SearchBox);
    }
    this.verifySearchBox_Clicked = function(){
        browser.sleep(3000)
        Node_SearchBox_Element.getText().then(function(text){
            expect(text).toBe("Search");
        })
    }
    this.passData_ToSearchBox = function(){
        Node_NameList.first().getText().then(function(textOfElement){
            Node_SearchBox.sendKeys(textOfElement);
        })
    }
    this.verify_SearchResult = function(){
        browser.sleep(4000)
        fatchingTextActions.getCountOfAllElements(allNodes).then(function(rowsNo){
            expect(rowsNo).toBe(1);
        })
    }    
    this.verifySummaryPage = function(textOfColumn){
        verifyActions.isElementDisplayed(Node_summary);
        expect(Node_summary.getText()).toBe(textOfColumn)
    }
    this.click_on_Node = function(value){
         element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().click().getText().then(function(value1){
            waitActions.wait(6000)
            Popup_NodeName.getText().then(function(value2){
                expect(value2).toEqual(value1);
            })
             
         });
         waitActions.wait(2000)
    } 
    this.wait_Till_Namevisibility = function(){
        waitActions.waitForElementInPollingEvery(Node_NAME_column);
    }
    
    
    /////////////////////////////////////////////////////////////// //////////////////////////////////////////  
    this.clickOn_NodeSummary_GroupLink = function(){
        buttonActions.click(Node_Summary_Group_Link);
        browser.sleep(3000);
    }
    this.clickOn_NodeSummary_ZoneLink = function(){
        buttonActions.click(Node_Summary_Zone_Link);
        browser.sleep(3000);
    }
    this.clickLightSwitch_ON_VerifyStatus = function(statusOfLight){
        LightSwitch_List_Params.each(function(allNodes , index){
            allNodes.getAttribute('class').then(function(classText){
                if(classText === 'mat-slide-toggle mat-primary'){
                    buttonActions.click(allNodes);
                    browser.sleep(10000);
                    allNodes.getAttribute('class').then(function(nodeStatus){
                        expect(nodeStatus).toBe('mat-slide-toggle mat-primary mat-checked')
                    })
                    LightSwitch_StatusList(index).getText().then(function(textOfElement){
                        expect(textOfElement).toBe('ACTIVE');
                    })
                }
            })
        })
    }
    this.clickLightSwitch_OFF_VerifyStatus = function(statusOfLight){
        LightSwitch_List_Params.each(function(allNodes , index){
            allNodes.getAttribute('class').then(function(classText){
                if(classText === 'mat-slide-toggle mat-primary mat-checked'){
                    buttonActions.click(allNodes);
                    browser.sleep(10000);
                    allNodes.getAttribute('class').then(function(nodeStatus){
                        expect(nodeStatus).toBe('mat-slide-toggle mat-primary')
                    })
                    LightSwitch_StatusList(index).getText().then(function(textOfElement){
                        expect(textOfElement).toBe('OFF');
                    })
                }
            })
        })
    }  
   
////////////////////////////////////////////////////////////////////////////////////////////////
//NA
    this.click_on_Node = function(value){
        element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().click();
    }
    /////////////////////
    this.clickNext_Arrow =  function(){
        try{
           if(NextPage_Arrow.isEnabled())
             {
                buttonActions.click(NextPage_Arrow);
                browser.sleep(5000)
                verifyActions.isElementDisplayed(FixtureVoltage_Column);
             }
        }
       catch (err){
          console.log('Next Button is disabled');
        }
    }
    
    this.clickPre_Arrow =  function(){
        try{
           if(PrePage_Arrow.isEnabled()){
                buttonActions.click(PrePage_Arrow);
                browser.sleep(3000)
                verifyActions.isElementDisplayed(FixtureVoltage_Column);
             }
        }
       catch (err) {
          console.log('Pre Button is disabled');
        }
    }
    this.SetPagesValue_5 = function () {
      buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_5);
      waitActions.wait(4000)
   };
   this.Verify_FixtureVoltage = function()
   {
    Menu_nodes_fixtureVoltage_value.getText().then(function(fixtureCurrentbefore){
        Menu_nodes_status_column.click()
        waitActions.wait(4000)
        Menu_nodes_status_column.click()
        waitActions.wait(5000)
        Menu_Node_Light_switch_toggle.first().click();
        waitActions.wait(30000)
        Menu_nodes_fixtureVoltage_value.getText().then(function(fixtureCurrentAfter){
        expect(fixtureCurrentbefore).not.toEqual(fixtureCurrentAfter);
        })
       })
   }
   this.Verify_FixtureCurrent = function()
   {
    Menu_nodes_fixtureCurrent_value.getText().then(function(fixtureCurrentbefore){
        Menu_nodes_status_column.click()
        waitActions.wait(4000)
        Menu_nodes_status_column.click()
        waitActions.wait(5000)
        Menu_Node_Light_switch_toggle.first().click();
        waitActions.wait(30000)
        Menu_nodes_fixtureCurrent_value.getText().then(function(fixtureCurrentAfter){
        expect(fixtureCurrentbefore).not.toEqual(fixtureCurrentAfter);
        })
       })
   }
   //////////////////
    this.select_MenuNode_ToEdit = function(){
        allNodes.first().click();
    }
    var nodeName;
    this.select_Menu_OnLineNode_ToEdit = function(){
        LightSwitch_List_Params.each(function(allNodes , index){
            allNodes.getAttribute('class').then(function(classText){
                if(classText !== 'mat-slide-toggle mat-primary mat-disabled'){
                    buttonActions.click(element.all(by.xpath("(//*[@class='example-container']/descendant::mat-slide-toggle/preceding::mat-cell[7])[" +index+ "]")));
                }
            })
            nodeName = element.all(by.xpath("(//*[@class='example-container']/descendant::mat-slide-toggle/preceding::mat-cell[7])[" +index+ "]")).getText();
        })
          browser.sleep(3000);
    }  
    this.clickNode_ToEdit = function(){
        buttonActions.click(element(by.xpath("//mat-cell[contains(text(),'" +nodeName+ "')]")));
    }   
    /////////////////////
}