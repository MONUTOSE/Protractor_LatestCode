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

    var allCompanys = objLocator.findLocator(objRepo.LoginPage.Ubicquia_NetworkName);
    var Ubicquia_HomePageHeader = objLocator.findLocator(objRepo.Menu.HomePage_Header);
    var onNodes = objLocator.findLocator(objRepo.Menu.Nodes_On_Block);
    var HomePage_OnNode_Block = objLocator.findLocator(objRepo.Menu.HomePage_OnNode_Block);
    var offLineNodes = objLocator.findLocator(objRepo.Menu.Nodes_OffLine_Block);
    var HomePage_OffLine_Block = objLocator.findLocator(objRepo.Menu.HomePage_OffLine_Block);
    var offNodes = objLocator.findLocator(objRepo.Menu.Nodes_Off_Block);
    var HomePage_OffNode_Block = objLocator.findLocator(objRepo.Menu.HomePage_OffNode_Block);
    var Nodes_Energy_Consumption = objLocator.findLocator(objRepo.Menu.Nodes_Energy_Consumption);
    var HomePage_EnergyConsumption_Block = objLocator.findLocator(objRepo.Menu.HomePage_EnergyConsumption_Block);
    var powerConsumptionBlock = objLocator.findLocator(objRepo.Menu.Nodes_PowerConsumption_Block);
    var powerConsumption_BarChart = objLocator.findLocator(objRepo.Menu.Nodes_PowerConsumption_BarChart);
    var notificationIcon = objLocator.findLocator(objRepo.Menu.Notification_Alert);
    var Ubicquia_Menu_Admin = objLocator.findLocator(objRepo.Menu.Admin);

    var Search_CompanyName = objLocator.findLocator(objRepo.HomePage.Search_CompanyName);
    var All_CompanyNames = objLocator.findLocator_ElementAll(objRepo.HomePage.All_CompanyNames);
    var My_Account = objLocator.findLocator(objRepo.HomePage.My_Account);
    var Sign_Out_Btn = objLocator.findLocator(objRepo.HomePage.Sign_Out_Btn);
    var Ubicquia_Version = objLocator.findLocator(objRepo.HomePage.Ubicquia_Version);
    var Ubicquia_Logo = objLocator.findLocator(objRepo.HomePage.Home_Logo);
    var Menu_Nodes = objLocator.findLocator(objRepo.HomePage.Menu_Nodes);
    var Menu_Groups = objLocator.findLocator(objRepo.HomePage.Menu_Groups);
    var manu_Zones = objLocator.findLocator(objRepo.HomePage.Menu_Zones);
    var Notification_no = objLocator.findLocator(objRepo_n.HomePage.Notification_no);
    var Language_icon = objLocator.findLocator(objRepo_n.HomePage.Language_icon);
    var All_Languages = objLocator.findLocator_ElementAll(objRepo_n.HomePage.All_Languages);
    var Espanol_language = objLocator.findLocator(objRepo_n.HomePage.Espanol_language);
    var MenuHome_Espanol_text = objLocator.findLocator(objRepo_n.HomePage.MenuHome_Espanol_text);
    var Pyccknn_Language = objLocator.findLocator(objRepo_n.HomePage.Pyccknn_Language);
    var MenuHome_pyccknn_text = objLocator.findLocator(objRepo_n.HomePage.MenuHome_pyccknn_text);
    var English_Language = objLocator.findLocator(objRepo_n.HomePage.English_Language);
    var MenuHome_English_text = objLocator.findLocator(objRepo_n.HomePage.MenuHome_English_text);
    var Report_Icon = objLocator.findLocator(objRepo_n.HomePage.Report_Icon);
    var Profile_icon = objLocator.findLocator(objRepo_n.HomePage.Profile_icon);
    var Profile_name = objLocator.findLocator(objRepo_n.HomePage.Profile_name);
    var Menu_Options = objLocator.findLocator_ElementAll(objRepo_n.HomePage.Menu_Options);
    var Menu_profileOption = objLocator.findLocator(objRepo_n.HomePage.Menu_profileOption);
    var Profile_alertAndWarning = objLocator.findLocator(objRepo_n.HomePage.Profile_alertAndWarning);
    var KWH_Report = objLocator.findLocator(objRepo_n.HomePage.KWH_Report);
    var KWH_Alert = objLocator.findLocator(objRepo_n.HomePage.KWH_Alert);
    var Transaction_btn = objLocator.findLocator(objRepo_n.HomePage.Transaction_btn);
    var lightState_30Days = objLocator.findLocator(objRepo_n.HomePage.lightState_30Days);
    var lightState_7Days = objLocator.findLocator(objRepo_n.HomePage.lightState_7Days);
    var Zone_with_Groups = objLocator.findLocator(objRepo_n.HomePage.Zone_with_Groups);
    var Group_with_Zones = objLocator.findLocator(objRepo_n.HomePage.Group_with_Zones);
    var Zone_With_GroupNode = objLocator.findLocator(objRepo_n.HomePage.Zone_With_GroupNode);
    var Schedule_Transaction = objLocator.findLocator(objRepo_n.HomePage.Schedule_Transaction);
    var Node_Schedule = objLocator.findLocator(objRepo_n.HomePage.Node_Schedule);
    var AuditReport_3Days = objLocator.findLocator(objRepo_n.HomePage.AuditReport_3Days);
    var Notification_Section = objLocator.findLocator(objRepo_n.HomePage.Notification_Section);
    var Notification_listing = objLocator.findLocator(objRepo_n.HomePage.Notification_listing);
    var Notificationlist = objLocator.findLocator_ElementAll(objRepo_n.HomePage.Notificationlist);

     this.getAllCompanyNames = function(){
         waitActions.wait(2000);
         buttonActions.click(allCompanys);
    }; 

    this.verifyHomePage = function(){
        verifyActions.isElementDisplayed(Ubicquia_HomePageHeader);
    }
    this.click_AdminMenu_Btn = function () {
        waitActions.clickandWait(Ubicquia_Menu_Admin);
        waitActions.wait(2000)
        return this;
    };
    this.verifyPresent_OffLine_Nodes = function(textOfElement){
        verifyActions.isElementpresent(offLineNodes);
        HomePage_OffLine_Block.getText().then(function(text){
            expect(text.trim()).toBe(textOfElement)
        })
    }
    this.verifyPresent_OnNodes = function(textOfElement){
        verifyActions.isElementpresent(onNodes);
        HomePage_OnNode_Block.getText().then(function(text){
            expect(text.trim()).toBe(textOfElement)
        })
    }
    this.verifyPresent_OffNodes = function(textOfElement){
        verifyActions.isElementpresent(offNodes);
        HomePage_OffNode_Block.getText().then(function(text){
            expect(text.trim()).toBe(textOfElement)
        })
    }
    this.verify_Title_EnergyConsumption = function(textOfElement){
        verifyActions.isElementDisplayed(Nodes_Energy_Consumption);
        HomePage_EnergyConsumption_Block.getText().then(function(text){
            expect(text.trim()).toBe(textOfElement)
        })
    }
    this.verifyPresent_PowerConsumptionBlock = function(textOfBlock){
        verifyActions.isElementDisplayed(powerConsumptionBlock);
        powerConsumptionBlock.getText().then( function(text){
            expect(text.trim()).toBe(textOfBlock);
        });
    };
    this.verifyPresent_BarChart = function(){
        verifyActions.isElementpresent(powerConsumption_BarChart);
    }
    this.verifyPresent_NotificationIcon = function(){
        verifyActions.isElementpresent(notificationIcon)
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    this.verifyPresenceof_NotificationIcon = function(){
        verifyActions.isElementpresent(Notification_no)
    }
    this.GettingNotification_count =  function(){
        Notification_no.getText().then(function(count){
                 console.log(count)
        })
    }
    this.verifyPresence_LanguageIcon = function(){
       verifyActions.isElementpresent(Language_icon)
    }
    this.ClickOn_LanguageIcon = function(){
       buttonActions.click(Language_icon)
    }
    this.VerifyLanguages =  function (availableLanguage){
       All_Languages.each(function(eachtext){
            eachtext.getText().then(function(language){
               expect(availableLanguage).toContain(language)
            })
       })
    } 
    this.ClickOn_Language_Espanol = function(){
       buttonActions.click(Espanol_language)
    }
    this.verifyPresence_HomeInEspanol_Language = function(){
       MenuHome_Espanol_text.getText().then(function(value){
        console.log(value)
       })
    }
    this.ClickOn_Language_Pyccknn = function(){
       buttonActions.click(Pyccknn_Language)
    }
    this.verifyPresence_HomeInpyccknn_Language = function(){
       MenuHome_pyccknn_text.getText().then(function(value){
        console.log(value)
       })
    }
    this.ClickOn_Language_English = function(){
       buttonActions.click(English_Language)
    }
    this.verifyPresence_HomeEnglish_Language = function(){
       MenuHome_English_text.getText().then(function(value){
        console.log(value)
       })
    }
    this.verifyPresence_ReportIcon = function(){
       verifyActions.isElementpresent(Report_Icon)
    }
    this.verifyPresence_PriofileIcon = function(){
       verifyActions.isElementpresent(Profile_icon)
    }
    this.verifyPresence_ProfileName = function(){
       Profile_name.getText().then(function(value){
        console.log(value)
       })
    }
    this.Click_ProfileName = function(){
       buttonActions.click(Profile_name);
    }
    this.Menu_options =  function (availableOption){
       Menu_Options.each(function(eachtext){
            eachtext.getText().then(function(option){
            console.log(option)
          expect(availableOption).toContain(option)
            })
       })
    } 
    this.Click_MenuProfileName = function(){
       buttonActions.click(Menu_profileOption);
       waitActions.wait(1000)
    }
    this.VerifyUserOn_ProfilePage = function(){
       Profile_alertAndWarning.getText(function(value){
           console.log(value)
       })
    }
    this.ClickOn_ReportIcon = function(){
          waitActions.wait(2000)
          buttonActions.click(Report_Icon);
          waitActions.wait(2000)
    }
    this.ClickonKWH =  function(){
       buttonActions.click(KWH_Report);
       waitActions.wait(1000)
    }
    this.VerifyKWH_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Kwh' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_Transaction =  function(){
       buttonActions.click(Transaction_btn);
       waitActions.wait(1000)
    }
    this.VerifyTransaction_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing \'Transaction\' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_LightState_30Days =  function(){
       buttonActions.click(lightState_30Days);
       waitActions.wait(1000)
    }
    this.VerifyLightState_30Days_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Light State' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_LightState_7Days =  function(){
       buttonActions.click(lightState_7Days);
       waitActions.wait(1000)
    }
    this.VerifyLightState_7Days_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Weekly Light State' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_ZoneWithgroups =  function(){
       buttonActions.click(Zone_with_Groups);
       waitActions.wait(1000)
    }
    this.VerifyZone_with_Groups_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Zone Groups' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_Group_with_Zones =  function(){
       buttonActions.click(Group_with_Zones);
       waitActions.wait(1000)
    }
    this.VerifyGroup_with_Zones_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Group Nodes' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_Zone_With_GroupNode =  function(){
       buttonActions.click(Zone_With_GroupNode);
       waitActions.wait(1000)
    }
    this.VerifyZone_With_GroupNode_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Zone Group Nodes' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_Schedule_Transaction =  function(){
       buttonActions.click(Schedule_Transaction);
       waitActions.wait(1000)
    }
    this.VerifySchedule_Transaction_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Schedule Transaction' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_Node_Schedule =  function(){
       buttonActions.click(Node_Schedule);
       waitActions.wait(1000)
    }
    this.VerifyNode_Schedule_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Node Schedule' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.Clickon_AuditReport_3Days =  function(){
       buttonActions.click(AuditReport_3Days);
       waitActions.wait(1000)
    }
    this.VerifyAuditReport_3Days_Text = function(){
       KWH_Alert.getText().then(function(value){
           expect("Thanks for placing 'Audit' report request. Shortly you will receive an email with report download link.").toEqual(value)
       })
    }
    this.verifyNotification_sectionAppars = function(){
      verifyActions.isElementDisplayed(Notification_Section);
   }
   this.verifyNotification_LIstingAppars = function(){
      verifyActions.isElementDisplayed(Notification_listing);
   }
   this.VerifyLatestActivity_Notification_count =  function(){
      Notificationlist.count().then(function(count){
               console.log(count)
      })
   }
   this.BellIconCount= function(){
    try{ 
       if(Notification_no.isPresent()==false){
          Notification_no.getText().then(function(count){
          })
       }
       else{
       }
      }
       catch (err){
        console.log('Pre Button is disabled');
       }
   }
   ///////////////////////////////////////////////////////////////////////////////////////////////////////
   this.select_company_FromCompanyList = function(selectCompany){
        waitActions.wait(1000);
        Search_CompanyName.sendKeys(selectCompany);
        waitActions.wait(1000);
        buttonActions.click(element(by.xpath("//span[contains(text(),'" +selectCompany+ "')]")));
        browser.sleep(2000);
        console.log("Selected company is " + selectCompany);
   }
   this.click_Home_Btn = function () {
        buttonActions.click(Ubicquia_Logo);
        browser.sleep(2000);
        return this;
    };
    this.clickingOn_MenuNode = function(){
        buttonActions.click(Menu_Nodes);
        browser.sleep(2000);
    }
    this.clickingOn_MenuGroup = function(){
        buttonActions.click(Menu_Groups);
        waitActions.wait(2000);
    }
    this.clickingOn_MenuZones = function(){
        buttonActions.click(manu_Zones);
        waitActions.wait(2000);
    }
    this.click_AdminMenu = function () {
        buttonActions.click(Ubicquia_Menu_Admin);
        browser.sleep(2000);
        return this;
    };
    this.clickOnVersion = function(){
        buttonActions.click(Ubicquia_Version);
    }
    this.clickOn_SignOut_Btn = function(){
        waitActions.wait(2000);
        buttonActions.click(My_Account);
        waitActions.wait(2000);
        buttonActions.click(Sign_Out_Btn);
        browser.sleep(6000);
    }
};