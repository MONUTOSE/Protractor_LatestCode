module.exports = function () {
    'use strict';
     
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
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
    var ZonePopup_LightSensitivity = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_LightSensitivity);
    var ZonePopup_LightSensitivity_Slider = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_LightSensitivity_Slider);
    var ZonePopup_UpdateFrequency = objLocator.findLocator(objRepo.Menu_Zone.ZonePopup_UpdateFrequency);
    
    var Menu_ZoneRow_Btn = objLocator.findLocator(objRepo.Menu_Zone.Menu_ZoneRow_Btn);
    var LightSwitch_ColumnBtn = objLocator.findLocator(objRepo.Menu_Zone.LightSwitch_ColumnBtn);
    var Pagination_DropDown = objLocator.findLocator(objRepo.Menu_Zone.Pagination_DropDown);
    var Pagination_PagesRange = objLocator.findLocator_ElementAll(objRepo.Menu_Zone.Pagination_PagesRange);
    var Pagination_Five_Range = objLocator.findLocator(objRepo.Menu_Zone.Pagination_Five_Range);
    var Pagination_Previous_Btn = objLocator.findLocator(objRepo.Menu_Zone.Pagination_Previous_Btn);
    var Pagination_Next_Btn = objLocator.findLocator(objRepo.Menu_Zone.Pagination_Next_Btn);
    var AdminThreshold_Hour = objLocator.findLocator(objRepo.Menu_Zone.AdminThreshold_Hour);
    var AdminThreshold_Minute = objLocator.findLocator(objRepo.Menu_Zone.AdminThreshold_Minute);
    var LightSwitch_Btn = objLocator.findLocator_ElementAll(objRepo.Menu_Zone.LightSwitch_Btn);
    var Ubicquia_Version = objLocator.findLocator(objRepo.HomePage.Ubicquia_Version);

    this.verifyPresence_MenuZone = function(textOfElement){
        manu_Zones.getText().then(function(text){
            expect(text).toBe(textOfElement)
        })
    }
    this.clickingOn_MenuZones = function(){
        buttonActions.click(manu_Zones);
        browser.sleep(2000);
    }
    this.verifyPresent_NoOfZones = function(){
        waitActions.wait(5000);
        verifyActions.isElementDisplayed(header_Zones);
        waitActions.wait(2000);
        for(var i=0;i<=allZones.length;i++){
            verifyActions.isElementDisplayed(allZones[i]);
        }
    }
    this.verifyVisibility_ZoneNameColumn = function(textOfColumn){
        verifyActions.isElementDisplayed(header_Zones);
        Menu_Zone_Column.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresent_ZoneNames = function(){
        waitActions.wait(1000);
        for(var i=0;i<=Menu_Zone_NameRows.length;i++){
            verifyActions.isElementDisplayed(Menu_Zone_NameRows[i]);
        }
    }
    this.verifyVisibility_LightSwitchColumn = function(textOfColumn){
        verifyActions.isElementDisplayed(header_Zones);
        Menu_Zone_LightSwitch_Column.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresent_LightSwitch_Btn = function(){
        waitActions.wait(1000);
        for(var i=0;i<=LightSwitch_ToggleBtn.length;i++){
            verifyActions.isElementDisplayed(LightSwitch_ToggleBtn[i]);
        }
    }
    this.clickOnZoneRow = function(){
        waitActions.wait(1000);
        buttonActions.clickFirstElement(allZones);
        waitActions.wait(2000);
    }
    this.verifyVisibilitySetting = function(textOfHeaderPopup){
        Menu_Zone_Setting.getText().then(function(text){
            expect(text).toBe(textOfHeaderPopup)
        })
    }
    var textOf_Zone;
    this.clickOnZone_ZoneName = function(){
        waitActions.wait(2000);
        Menu_Zone_NameRows.first().getText().then(function(text){
            textOf_Zone = text;
            buttonActions.clickFirstElement(Menu_Zone_NameRows);
            waitActions.wait(2000);
        })
    }  
    this.verifyZoneName_ZonePopup = function(){
        Menu_ZonePopup_Zone_Name.getText().then(function(textOfZone_InPopup){
            expect(textOfZone_InPopup).toBe(textOf_Zone);
        })
    }
    this.verifyVisibilityOf_DimValue = function(text_DimValue){
        ZonePopup_DimValue.getText().then(function(text){
            expect(text).toBe(text_DimValue);
        })
    }
    this.verifyVisibility_DimSlider = function(){
        verifyActions.isElementDisplayed(ZonePopup_DimValue_Slider);
    }
  
    this.verifyVisibilityOf_LightSensitivity = function(text_LightSensitivity){
        ZonePopup_LightSensitivity.getText().then(function(text){
            expect(text).toBe(text_LightSensitivity);
        })
    }
    this.verifyVisibility_LightSensitivitySlider = function(){
        verifyActions.isElementDisplayed(ZonePopup_LightSensitivity_Slider);
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
        //       expect(text).toBe(textOfElement);
        //     })
        // })
        expect(LightSwitch_Btn.first().getAttribute('class')).toBe(textOfElement);
        waitActions.wait(2000);
    }
    this.verifyLightSwitch_Off = function(textOfElement){
        // LightSwitch_Btn.each(function(each_LightSwitch_Btn){
        //   fatchingTextActions.getValueForAttribute(each_LightSwitch_Btn,"class").then(function(text){
        //      expect(text).toBe(textOfElement);
        //   })
        // })
        expect(LightSwitch_Btn.first().getAttribute('class')).toBe(textOfElement);
        waitActions.wait(2000);
    }

    this.clickOnZoneRow = function(){
        waitActions.wait(1000);
        buttonActions.clickFirstElement(allZones);
        waitActions.wait(2000);
    }
    this.clickOnZoneRow = function(){
        buttonActions.click(Menu_ZoneRow_Btn);
        waitActions.wait(2000);
    }
     
//////////////////////////////////////////////////////////////////////////////////////
    var textOf_Zone;
    var i = 0;
    // this.clickOnZone_ZoneName = function(textOfElement){
    //     waitActions.wait(3000);
    //                 Menu_Zone_NameRows.each(function(eachZone){
    //                 eachZone.getText().then(function(text){
    //                     if(textOfElement === text){
    //                         buttonActions.click(eachZone);
    //                     }
    //                 })
    //             })
    //         waitActions.wait(3000);
    // }
           
    // this.verifyZoneName_ZonePopup = function(){
    //     Menu_ZonePopup_Zone_Name.getText().then(function(textOfZone_InPopup){
    //         expect(textOfZone_InPopup).toBe(textOf_Zone);
    //     })
    // }
    /////////////////////////////////////////////////////////////////////////////////////////
    this.clickOn_Pagination_Dropdown_Select_Range = function(){
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
    this.click_LightSwitch_To_Verify_Status = function(){
        LightSwitch_Btn.first().click(); 
        waitActions.wait(2000);
        buttonActions.click(Ubicquia_Version);
    }            
}