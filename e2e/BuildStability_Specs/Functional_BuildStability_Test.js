var textData_Json = require('../resources/testData.json');
var excelData = require('../utils/readingWritingExcel.js');
var hotkeys = require('protractor-hotkeys');
var Request = require("request");

var buttonActions = new commons.buttonActions();
var dropDownActions = new commons.dropDownActions();
var fatchingTextActions = new commons.fatchingTextActions();
var inputBoxActions = new commons.inputBoxActions();
var mouseActions = new commons.mouseActions();
var popUpActions = new commons.popUpActions();
var testingDisplayedActions = new commons.testingDisplayedActions();
var verifyActions = new commons.verifyActions();
var waitActions = new commons.waitActions();

var loginPage = new POMs.LogIn_Page();
var homePage = new POMs.Home_Page();
var Menu_Admin_Page = new POMs.Menu_Admin_Page();
var Menu_Node_Page = new POMs.Menu_Node_Page();
var Menu_Node_Summary_Page = new POMs.Menu_Node_Summary_Page();
var Menu_Node_Status_Page = new POMs.Menu_Node_Status_Page();
var Menu_Node_Settings_Page = new POMs.Menu_Node_Settings_Page();
var Menu_Group_Page = new POMs.Menu_Group_Page();
var Menu_Group_Settings_Page = new POMs.Menu_Group_Settings_Page();
var Menu_Zone_Page = new POMs.Menu_Zone_Page();
var Menu_Zone_Settings_Page = new POMs.Menu_Zone_Settings_Page();
var Admin_Group_Page = new POMs.Admin_Group_Page();
var Admin_Nodes_Page = new POMs.Admin_Nodes_Page();
var Admin_User_Page = new POMs.Admin_User_Page();
var Admin_Zones_Page = new POMs.Admin_Zones_Page();
var Admin_Schedules_Page = new POMs.Admin_Schedules_Page();
var Admin_Thresholds_Page = new POMs.Admin_Thresholds_Page();
var Menu_Setup_Message_Page = new POMs.Menu_SetUp_MsgStream_Page();
var buttonActions = new commons.buttonActions();
var verifyActions = new commons.verifyActions();
var waitActions = new commons.waitActions();
var access_token1 = null;

 var TEST_DATA_LOGIN = excelData.convertExcel_ToJSON( './resources/DataForProtractor.xlsx','LogIn_Cred');
     TEST_DATA_LOGIN.forEach(function(data){
         if(data.Status === 'Yes'){
         beforeAll(function(){
             browser.waitForAngularEnabled(false);
             browser.sleep(7000);
             loginPage.enter_Username_Keyword(data.TestData_Username)
             loginPage.enter_Password_Keyword(data.TestData_Password)
             loginPage.click_LogIn_Btn();
             homePage.select_company_FromCompanyList(data.Company_Name); 
            })
         }
 })

var TEST_DATA = excelData.convertExcel_ToJSON( './resources/DataForProtractor.xlsx','TestData');
describe('Module : LogIn - ' , function(){
    TEST_DATA.forEach(function(data){
       if(data.Status === 'Yes')
       {
            if( data.Jira_ID === 'PAN-T357' ){
                it('PAN-T357 (1.0) Verify a user can login successfully' , function(){
                    loginPage.click_Home_Btn(); 
                    homePage.verifyHomePage() 
                    verifyActions.verifyTitle(data.TestData_HomePage)
                }); 
           }
        }
    })
},
describe('Module : HomePage - ' , function()
{
    TEST_DATA.forEach(function(data){
       if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
            })
            if( data.Jira_ID === 'PAN-T3' ){
                it('PAN-T3 (1.0) Verify the Nodes Offline chart_data appears',function(){
                loginPage.click_Home_Btn();    
                homePage.verifyPresent_OffLine_Nodes(data.TestData_HomePage);        
                })
            }
            if( data.Jira_ID === 'PAN-T4' ){
                it('PAN-T4 (1.0) Verify the Nodes On chart_data appears',function(){
                    loginPage.click_Home_Btn();   
                    homePage.verifyPresent_OnNodes(data.TestData_HomePage);       
                    })
                }
            if( data.Jira_ID === 'PAN-T5' ){
                    it('PAN-T5 (1.0) Verify the Nodes Off chart_data appears',function(){
                    loginPage.click_Home_Btn();   
                    homePage.verifyPresent_OffNodes(data.TestData_HomePage);        
                    })
            }
            if( data.Jira_ID === 'PAN-T6' ){
                it('PAN-T6 (1.0) Verify the Energy Consumption Report appears',function(){
                loginPage.click_Home_Btn();   
                homePage.verify_Title_EnergyConsumption(data.TestData_HomePage);        
                })
            }
            if( data.Jira_ID === 'PAN-T8' ){
                it('PAN-T8 (1.0) Verify the Power Consumption Report appears',function(){
                    loginPage.click_Home_Btn();  
                    homePage.verifyPresent_PowerConsumptionBlock(data.TestData_HomePage);  
                    homePage.verifyPresent_BarChart();       
                })
            }  
            if( data.Jira_ID === 'PAN-T10' ){
                it('PAN-T10 (1.0) Verify that there is a notifications icon',function(){
                    loginPage.click_Home_Btn();    
                    homePage.verifyPresent_NotificationIcon();        
                    })
                }      
            if( data.Jira_ID === 'PAN-T31' ){
                it('PAN-T31 (1.0) Verify that there is a Nodes menu option in the left sidebar menu' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.verifyPresence_MenuNode(data.TestData_HomePage);
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verifyPresent_NoOfNodes();
                });
            };
            if( data.Jira_ID === 'PAN-T32' ){
                it('PAN-T32' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Group_Page.verifyPresence_MenuGroup(data.TestData_HomePage);
                    Menu_Group_Page.clickingOn_MenuGroup();
                    Menu_Group_Page.verifyPresent_NoOfGroups();
                    });
                }; 
            
            if( data.Jira_ID === 'PAN-T33' ){
                it('PAN-T33 (1.0) Verify that there is a Zones menu option in the left sidebar',function(){ 
                    loginPage.click_Home_Btn();
                    Menu_Zone_Page.verifyPresence_MenuZone(data.TestData_HomePage);      
                    Menu_Zone_Page.clickingOn_MenuZones();
                    waitActions.wait(2000); 
                    Menu_Zone_Page.verifyPresent_NoOfZones();       
                    })
                }  
            if( data.Jira_ID === 'PAN-T34' ){
                it('PAN-T34 (1.0) Verify that there is an Admin menu option in the left sidebar' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.verifyPresence_MenuAdmin(data.TestData_HomePage);
                    Menu_Admin_Page.click_AdminMenu();
                    waitActions.wait(1000);
                    Menu_Admin_Page.verifyPresenceOfColumns();
                    });
                }; 
        }
    })
},
describe('Module : Admin_Thresholds - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
                beforeEach(function(){
                    hotkeys.trigger('esc');
                })
            if( data.Jira_ID === 'PAN-T280' ){
                it('PAN-T280 (1.0) Verify the System Element is shown (Node Name)' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenu();
                    Admin_Thresholds_Page.verifyVisibility_Threshold_NodeNames(data.Menu_Admin);
                    Admin_Thresholds_Page.verifyPresence_Nodes();
                });
            };
            if(data.Jira_ID === 'PAN-T281'){
                it('PAN-T281 (1.0) Verify the Alert Type is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenu();
                    Admin_Thresholds_Page.verifyVisibility_Threshold_AlertType(data.Menu_Admin);
                    Admin_Thresholds_Page.verifyPresence_AlertType();
                });
            }
            if(data.Jira_ID === 'PAN-T284'){
                it('PAN-T284 (1.0) Verify that Active label is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenu();
                    Admin_Thresholds_Page.verifyVisibility_ThresholdCheckBox(data.Menu_Admin);
                    Admin_Thresholds_Page.verifyPresence_CheckBox();
                });
            } 
        }
    })
},
describe('Module : Admin_Users - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
        beforeEach(function(){
            hotkeys.trigger('esc');
           })
            if(data.Jira_ID === 'PAN-T134'){
                it('PAN-T134 (1.0) Verify the First Name is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_User_Page.click_User_SubMenu();
                    Admin_User_Page.verifyVisibility_UserFirstNames(data.Menu_Admin);
                    Admin_User_Page.verifyPresence_FirstName();
                });
            }
            if(data.Jira_ID === 'PAN-T133'){
                it('PAN-T133 (1.0) Verify the Last Name is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_User_Page.click_User_SubMenu();
                    Admin_User_Page.verifyVisibility_UserLastNames(data.Menu_Admin);
                    Admin_User_Page.verifyPresence_LastName();
                });
            }  
            if(data.Jira_ID === 'PAN-T136'){
                it('PAN-T136 (1.0) Verify the User Type is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_User_Page.click_User_SubMenu();
                    Admin_User_Page.verifyVisibility_UserTypes(data.Menu_Admin);
                    Admin_User_Page.verifyPresence_UserTypes();
                });
            }  
            if(data.Jira_ID === 'PAN-T135'){
                it('PAN-T135 (1.0) Verify the Email is shown' , function(){
                    loginPage.click_Home_Btn();
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_User_Page.click_User_SubMenu();
                    Admin_User_Page.verifyVisibility_UserEmails(data.Menu_Admin);
                    Admin_User_Page.verifyPresence_Emails();
                });
            }
        }
    })
},
describe('Module : Admin_Groups - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
               })
            if(data.Jira_ID === 'PAN-T237'){
                it('PAN-T237 (1.0) Verify there is a button to view Nodes assigned to the Group are shown' , function(){
                       loginPage.click_Home_Btn();      
                       homePage.click_AdminMenu_Btn();
                       Admin_Group_Page.wait_Till_Group_Subtab_visibility();
                       Admin_Group_Page.click_Group_Btn();
                       Admin_Group_Page.waittil_Group_Column_appears();
                       Admin_Group_Page.clickon_firstNode_btn();
                       Admin_Group_Page.getting_Nodes_From_GroupList();
                       Admin_Group_Page.verifyPresence_Node_InGroup(); 
                    })
            }
            if(data.Jira_ID === 'PAN-T235'){
                it('PAN-T235 (1.0) Verify the Group Name is shown' , function(){
                    loginPage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Admin_Group_Page.wait_Till_Group_Subtab_visibility();
                    Admin_Group_Page.click_Group_Btn();
                    Admin_Group_Page.waittil_Group_Column_appears();
                    Admin_Group_Page.GettheNodeText();
                    Admin_Group_Page.gettheAdded_GroupsName();
                })
            }
        }
    })
},
describe('Module : Admin_Nodes - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
               })
               if(data.Jira_ID === 'PAN-T206'){
                it('PAN-T206 (1.0) Verify that the Name is shown' , function(){
                        loginPage.click_Home_Btn();       
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.verify_NodeColumn_Availability();
                        Admin_Nodes_Page.verifyVisibility_Nodes();
                 })
              }
               if(data.Jira_ID === 'PAN-T207'){
                it('PAN-T207 (1.0) Verify that the Node ID is shown' , function(){
                        loginPage.click_Home_Btn();      
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.verify_NodeID_Availability();
                        Admin_Nodes_Page.gettheAdded_Nodes_ID();
                })
            }
        }
    })
},
describe('Module : Admin_Schedules - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
            })
                    if(data.Jira_ID === 'PAN-T158'){
                        it('PAN-T158 (1.0) Verify a node can be scheduled to turn OFF' , function(){    
                                loginPage.click_Home_Btn();   
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.waittil_Schedule_Tab_appears();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn_selectNode();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_schedule_save();
                                waitActions.wait(5000)
                                Admin_Schedules_Page.SetPage_Value50();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);
                                })
                            }
                    if(data.Jira_ID === 'PAN-T193'){
                        it('PAN-T193 (1.0) Verify a zone schedule can be deleted' , function(){    
                                loginPage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.delete(data.Schedule_Names);
                                Admin_Schedules_Page.click_Schedule_Alert_Yes();    
                         })
                    }
                    if(data.Jira_ID === 'PAN-T173'){
                        it('PAN-T173 (1.0) Verify a group can be scheduled to turn OFF' , function(){    
                                loginPage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_group();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.schedule_select_Group();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_schedule_save();
                                waitActions.wait(3000)
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);    
                         })
                    }
                    if(data.Jira_ID === 'PAN-T187'){
                        it('PAN-T187 (1.0) Verify a zone can be scheduled to turn OFF' , function(){    
                              loginPage.click_Home_Btn();
                              homePage.click_AdminMenu_Btn();
                              Admin_Schedules_Page.click_Schedule_SubTab();
                              Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                              Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                              Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                              Admin_Schedules_Page.click_schedulePopUp_zone();
                              Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                              Admin_Schedules_Page.schedule_select_Zones();
                              Admin_Schedules_Page.schedule_subTab_Days();
                              Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                              Admin_Schedules_Page.click_schedule_save();
                              waitActions.wait(3000)
                              Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);      
                       })
                    }
                    if(data.Jira_ID === 'PAN-T159'){
                        it('PAN-T159 (1.0) Verify a node can be scheduled to turn ON' , function(){    
                                loginPage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn_selectNode();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                                Admin_Schedules_Page.click_SetScheduleDD();   
                                Admin_Schedules_Page.click_SelectScheduleDD_ON();
                                Admin_Schedules_Page.click_schedule_save();
                                waitActions.wait(5000)
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);      
                         })
                     }
                     if(data.Jira_ID === 'PAN-T160'){
                        it('PAN-T160 (1.0) Verify a node can be scheduled to DIM' , function(){    
                             loginPage.click_Home_Btn();
                             homePage.click_AdminMenu_Btn();
                             Admin_Schedules_Page.click_Schedule_SubTab();
                             Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                             Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                             Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                             Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                             Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn_selectNode();
                             Admin_Schedules_Page.schedule_subTab_Days();
                             Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                             Admin_Schedules_Page.click_SetScheduleDD();   
                             Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                             Admin_Schedules_Page.click_schedule_slider();
                             Admin_Schedules_Page.click_schedule_save();
                             waitActions.wait(5000)
                             Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);  
                      })
                    }
                    if(data.Jira_ID === 'PAN-T174'){
                        it('PAN-T174 (1.0) Verify a group can be scheduled to turn ON' , function(){    
                                loginPage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_group();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.schedule_select_Group();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_SetScheduleDD(); 
                                Admin_Schedules_Page.click_SelectScheduleDD_ON();
                                Admin_Schedules_Page.click_schedule_save();
                                waitActions.wait(5000)
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);    
                         })
                    }
                    if(data.Jira_ID === 'PAN-T175'){
                        it('PAN-T175 (1.0) Verify a group can be scheduled to DIM' , function(){    
                                loginPage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_group();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.schedule_select_Group();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_SetScheduleDD(); 
                                Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                                Admin_Schedules_Page.click_schedule_slider();
                                Admin_Schedules_Page.click_schedule_save();
                                waitActions.wait(5000)
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);   
                         })
                    }
                    if(data.Jira_ID === 'PAN-T188'){
                        it('PAN-T188 (1.0) Verify a zone can be scheduled to turn ON' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Zones();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                            Admin_Schedules_Page.click_SetScheduleDD(); 
                            Admin_Schedules_Page.click_SelectScheduleDD_ON();
                            Admin_Schedules_Page.click_schedule_save();
                            waitActions.wait(5000)
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary); 
                        })
                    }
                    if(data.Jira_ID === 'PAN-T189'){
                        it('PAN-T189 (1.0) Verify a zone can be scheduled to DIM' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Summary);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Zones();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                            Admin_Schedules_Page.click_SetScheduleDD(); 
                            Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                            Admin_Schedules_Page.click_schedule_slider();
                            Admin_Schedules_Page.click_schedule_save();
                            waitActions.wait(5000)
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T179'){
                        it('PAN-T179 (1.0) Verify a group schedule can be deleted' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.delete(data.Schedule_Names);
                            Admin_Schedules_Page.click_Schedule_Alert_Yes();   
                        })
                    }
                    if(data.Jira_ID === 'PAN-T164'){
                        it('PAN-T164 (1.0) Verify a node schedule can be deleted' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.delete(data.Schedule_Names);
                            Admin_Schedules_Page.click_Schedule_Alert_Yes();
                        })
                }    
        }
    })
},
describe('Module : Admin_Zones - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
        if(data.Status === 'Yes')
        {
            beforeEach(function(){
                hotkeys.trigger('esc');
                })
                if(data.Jira_ID === 'PAN-T261'){
                    it('PAN-T261 (1.0) Verify that the name of the Zone is shown' , function(){    
                        loginPage.click_Home_Btn();       
                        homePage.click_AdminMenu_Btn();
                        Admin_Zones_Page.click_Zone_SubTab();
                        Admin_Zones_Page.verify_ZoneName_Column_Availability();
                        Admin_Zones_Page.getAll_ZonesNames(); 
                    })
                }
                if(data.Jira_ID === 'PAN-T262'){
                    it('PAN-T262 (1.0) Verify there is a button to view the groups associated with the zone' , function(){    
                        loginPage.click_Home_Btn();      
                        homePage.click_AdminMenu_Btn();
                        Admin_Zones_Page.click_Zone_SubTab();
                        Admin_Zones_Page.click_on_firstGroup();
                        Admin_Zones_Page.get_Group_InsideZone();
                        })
                }
                if(data.Jira_ID === 'PAN-T268'){
                    it('PAN-T268 (1.0) Verify that there is a list of groups present' , function(){    
                        loginPage.click_Home_Btn();
                        waitActions.wait(2000);
                        homePage.click_AdminMenu_Btn();
                        Admin_Zones_Page.click_Zone_SubTab();
                        Admin_Zones_Page.click_Zone_SubTab_Add();
                        Admin_Zones_Page.click_Zone_GroupDD();
                        Admin_Zones_Page.getting_Group_FromList();
                        })
                }
        }
    })
},
describe('Module : Menu_Nodes - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
        if(data.Status === 'Yes')
        {
            beforeEach(function(){
                hotkeys.trigger('esc');
               })
            if( data.Jira_ID === 'PAN-T54' ){
                it('PAN-T54 (1.0) Verify that nodes assigned to the panel appear in the Node List' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verifyDisplayedNodeHeader(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NoOfNodes();
                    }); 
                }
            if( data.Jira_ID === 'PAN-T55' ){
                it('PAN-T55 (1.0) Verify that Node Name is shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodeNameColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodeNameList();
                }); 
            }
            if( data.Jira_ID === 'PAN-T57' ){
                it('PAN-T57 (1.0) Verify that Fixture Current is shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodeFixtureCurrentColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodeFixtureCurrentList();  
                }); 
            }
            if( data.Jira_ID === 'PAN-T58' ){
                it('PAN-T58 (1.0) Verify that Pole Current is shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodePoleCurrentColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodePoleCurrentList(); 
                }); 
            }
            if( data.Jira_ID === 'PAN-T59' ){
                it('PAN-T59 (1.0) Verify that Fixture Voltage is shown' , function(){
                    loginPage.click_Home_Btn();       
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodeFixtureVoltageColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodeFixtureVoltageList();
                }); 
            }
            if( data.Jira_ID === 'PAN-T60' ){
                it('PAN-T60 (1.0) Verify that Pole Voltage is shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodePoleVoltageColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodePoleVoltageList(); 
                }); 
            }
            if( data.Jira_ID === 'PAN-T61' ){
                it('PAN-T61 (1.0) Verify that Node Status is shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodeStatusColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodeStatusList();
                }); 
            }
            if( data.Jira_ID === 'PAN-T62' ){
                it('PAN-T62 (1.0) Verify that there is a light switch option shown' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.verify_NodeLightSwitchColumn_Present(data.Menu_Node);
                    Menu_Node_Page.verifyPresent_NodeLightSwitchOptionList();
                }); 
            }
            if( data.Jira_ID === 'PAN-T63' ){
                it('PAN-T63 (1.0) Verify that turning the Node On via the light switch works as expected' , function(){
                    homePage.click_Home_Btn();       
                    homePage.clickingOn_MenuNode();
                    Menu_Node_Page.clickTo_switchOn_NodeLight();
                    Menu_Node_Page.clickLightSwitch_ON_VerifyStatus(data.Menu_Node);  
                }); 
            }
            if( data.Jira_ID === 'PAN-T65' ){
                it('PAN-T65 (1.0) Verify that turning the Node Off via the light switch works as expected' , function(){
                    homePage.click_Home_Btn();       
                    homePage.clickingOn_MenuNode();
                    Menu_Node_Page.clickTo_switchOff_NodeLight();
                    Menu_Node_Page.clickLightSwitch_OFF_VerifyStatus(data.Menu_Node); 
                }); 
            }
            if( data.Jira_ID === 'PAN-T67' ){
                it('PAN-T67 (1.0) Verify that there is a search box present on the screen' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.clickOnSearchBox();
                    Menu_Node_Page.verifyPresenceOf_SearchBox(data.Menu_Node);
                }); 
            }
            if( data.Jira_ID === 'PAN-T68' ){
                it('PAN-T68 (1.0) Verify that searching by specific text filters out the nodes that do not contain the specific text' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.clickOnSearchBox();
                    Menu_Node_Page.verifySearchBox_Clicked();
                    Menu_Node_Page.passData_ToSearchBox();
                    waitActions.wait(4000);
                    Menu_Node_Page.verify_SearchResult();
                }); 
            }
        }
    })
},
describe('Module : Menu_Nodes_Summary - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
        if(data.Status === 'Yes')
        {
            beforeEach(function(){
                hotkeys.trigger('esc');
                })
            if( data.Jira_ID === 'PAN-T69' ){
                it('PAN-T69 (1.0) Verify that clicking a Node will present the Node Summary Screen' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(4000);
                    Menu_Node_Page.clickAndSelectNode();
                    Menu_Node_Page.verifySummaryPage(data.Menu_Node);
                }); 
            }
            if(data.Jira_ID === 'PAN-T83'){
                it('PAN-T83 (1.0) Verify that there is a Status tab present' , function(){    
                        loginPage.click_Home_Btn();
                        Menu_Node_Page.clickingOn_MenuNode();
                        waitActions.wait(2000);
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node();
                        Menu_Node_Status_Page.waittil_Nodestatus_appears();
                        Menu_Node_Status_Page.verfiy_availabilty_Node_Status();
                        Menu_Node_Status_Page.click_Node_popup_Status();      
                 })
              }         
            if(data.Jira_ID === 'PAN-T84'){
                it('PAN-T84 (1.0) Verify that there is a Settings tab present' , function(){    
                        loginPage.click_Home_Btn();
                        Menu_Node_Page.clickingOn_MenuNode();
                        waitActions.wait(2000);
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node();
                        Menu_Node_Status_Page.waittil_Nodestatus_appears();
                        Menu_Node_Summary_Page.Verify_availability_Node_Settings();
                        Menu_Node_Settings_Page.click_Node_popup_Settings(); 
                })
            }                                              
        }
    })
},
describe('Module : Menu_Zone - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
           beforeEach(function(){
            hotkeys.trigger('esc');
           })
            if( data.Jira_ID === 'PAN-T119' ){
            it('PAN-T119 (1.0) Verify the Name of the Zone is shown' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.verifyVisibility_ZoneNameColumn(data.Menu_Zone)
                    Menu_Zone_Page.verifyPresent_ZoneNames();
                }); 
            }
            if( data.Jira_ID === 'PAN-T120' ){
                it('PAN-T120 (1.0) Verify there is a Light Switch control toggle' , function(){
                    loginPage.click_Home_Btn();         
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.verifyVisibility_LightSwitchColumn(data.Menu_Zone);
                    Menu_Zone_Page.verifyPresent_LightSwitch_Btn();
                }); 
            }
            if( data.Jira_ID === 'PAN-T122' ){
                it('PAN-T122 (1.0) Verify that clicking a zone will enter the Zone Settings modal' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.clickOnZoneRow();
                    Menu_Zone_Page.verifyVisibilitySetting(data.Menu_Zone);   
                }); 
            }
            if( data.Jira_ID === 'PAN-T123' ){
                it('PAN-T123 (1.0) Verify the zone name is shown at the top of the Zone Settings modal' , function(){
                    loginPage.click_Home_Btn();       
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.clickOnZone_ZoneName();
                    Menu_Zone_Page.verifyZoneName_ZonePopup();    
                }); 
            }
            if( data.Jira_ID === 'PAN-T125' ){
                it('PAN-T125 (1.0) Verify the Dim Value slider is present' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.clickOnZoneRow();
                    Menu_Zone_Page.verifyVisibilityOf_DimValue(data.Menu_Zone);
                    Menu_Zone_Page.verifyVisibility_DimSlider();  
                }); 
            }
            if( data.Jira_ID === 'PAN-T127' ){
                it('PAN-T127 (1.0) Verify the Light Sensitivy Slider bar is shown' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.clickOnZoneRow();
                    waitActions.wait(4000); 
                    Menu_Zone_Page.verifyVisibilityOf_LightSensitivity(data.Menu_Zone);
                    Menu_Zone_Page.verifyVisibility_LightSensitivitySlider();    
                }); 
            }
            if( data.Jira_ID === 'PAN-T129' ){
                it('PAN-T129 (1.0) Verify there is an update frequency field' , function(){
                    loginPage.click_Home_Btn();        
                    Menu_Zone_Page.clickingOn_MenuZones();
                    Menu_Zone_Page.clickOnZoneRow();
                    Menu_Zone_Settings_Page.verifyVisibilityOf_UpdateFrequency(data.Menu_Zone);  
                }); 
            }
        }
    })
},
describe('Module : Menu_Node_Settings - ' , function()
{
     TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
           beforeEach(function(){
            hotkeys.trigger('esc');
           })
            if(data.Jira_ID === 'PAN-T96'){
                it('PAN-T96 (1.0) Verify the Node Settings show a Dim Value slider' , function(){    
                        loginPage.click_Home_Btn();
                        Menu_Node_Page.clickingOn_MenuNode();
                        waitActions.wait(2000);
                        Menu_Node_Page.click_on_Node();
                        Menu_Node_Settings_Page.click_Node_popup_Settings();
                        waitActions.wait(5000);
                        Menu_Node_Settings_Page.Verify_availability_DimSlider();
                 })
             }
          
             if(data.Jira_ID === 'PAN-T101'){
              it('PAN-T101 (1.0) Verify the Node Settings show an Update Frequency' , function(){    
                      loginPage.click_Home_Btn();
                      Menu_Node_Page.clickingOn_MenuNode();
                      waitActions.wait(2000);
                      Menu_Node_Page.click_on_Node();
                      Menu_Node_Settings_Page.click_Node_popup_Settings();
                      waitActions.wait(2000);
                      Menu_Node_Settings_Page.Verify_availability_threshold_hours();
                      Menu_Node_Settings_Page.Verify_availability_threshold_minutes(); 
               })
           }
           if(data.Jira_ID === 'PAN-T99'){
            it('PAN-T99 (1.0) Verify the Node Settings show a Light Sensitivity slider' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Settings_Page.click_Node_popup_Settings();
                    waitActions.wait(2000);
                    Menu_Node_Settings_Page.Verify_availability_LightSlider();    
             })
          }
        }
    })
},
describe('Module : Menu_Node_Status - ' , function()
{
     TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
           beforeEach(function(){
            hotkeys.trigger('esc');
           })
          if(data.Jira_ID === 'PAN-T86'){
            it('PAN-T86 (1.0) Verify the Node Status shows the Fixture Current' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Fixture_Current();
                    Menu_Node_Status_Page.Verify_fixtureCurrentValue();    
             })
          }
          if(data.Jira_ID === 'PAN-T88'){
            it('PAN-T88 (1.0) Verify the Node Status shows the Fixture Voltage' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Fixture_Voltage();
                    Menu_Node_Status_Page.Verify_fixtureVoltageValue();   
             })
          }
          if(data.Jira_ID === 'PAN-T90'){
            it('PAN-T90 (1.0) Verify the Node Status shows the Node RSSI' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_RSSI();
                    Menu_Node_Status_Page.Verify_NodeRSSI_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T92'){
            it('PAN-T92 (1.0) Verify the Node Status shows the Dim Value' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_DIM();
                    Menu_Node_Status_Page.Verify_NodeDIM_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T94'){
            it('PAN-T94 (1.0) Verify the Node Status shows the Longitude' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_Longitude();
                    Menu_Node_Status_Page.Verify_NodeLongitude_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T87'){
            it('PAN-T87 (1.0) Verify the Node Status shows the Pole Current' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_Pole_Current();
                    Menu_Node_Status_Page.Verify_Node_Pole_Current_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T89'){
            it('PAN-T89 (1.0) Verify the Node Status shows the Pole Voltage' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_Pole_Voltage();
                    Menu_Node_Status_Page.Verify_Node_Pole_Voltage_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T91'){
            it('PAN-T91 (1.0) Verify the Node Status shows the Tilt Angle' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_Tilt_Angle();
                    Menu_Node_Status_Page.Verify_Node_Tilt_Angle_Value();     
             })
          }
          if(data.Jira_ID === 'PAN-T93'){
            it('PAN-T93 (1.0) Verify the Node Status shows the Latitude' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Node_Page.clickingOn_MenuNode();
                    waitActions.wait(2000);
                    Menu_Node_Page.wait_Till_Namevisibility();
                    Menu_Node_Page.click_on_Node();
                    Menu_Node_Status_Page.waittil_Nodestatus_appears();
                    Menu_Node_Status_Page.click_Node_popup_Status();
                    waitActions.wait(2000);
                    Menu_Node_Status_Page.Verify_availability_Node_Latitude();
                    Menu_Node_Status_Page.Verify_Node_Latitude_Value();   
                })
            }
        }
    })
},
describe('Module : Menu_Groups - ' , function()
{
     TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
           beforeEach(function(){
            hotkeys.trigger('esc');
           })
          if(data.Jira_ID === 'PAN-T111'){
            it('PAN-T111 (1.0) Verify the Dim Value slider is present' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.ClickOn_GroupName(data.Menu_Group_Name);
                    waitActions.wait(2000);
                    Menu_Group_Settings_Page.Verify_SettingsSection_Appears();
                    Menu_Group_Settings_Page.Verify_SettingsDimSliderAppears();        
             })
          }
          
          if(data.Jira_ID === 'PAN-T113'){
            it('PAN-T113 (1.0) Verify the Light Sensitivy Slider bar is shown' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.ClickOn_GroupName(data.Menu_Group_Name);
                    waitActions.wait(2000);
                    Menu_Group_Settings_Page.Verify_SettingsSection_Appears();
                    Menu_Group_Settings_Page.Verify_SettingsLightSensitivityAppears();        
             })
          }
          
          if(data.Jira_ID === 'PAN-T115'){
            it('PAN-T115 (1.0) Verify there is an update frequency field' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.ClickOn_GroupName(data.Menu_Group_Name);
                    waitActions.wait(2000);
                    Menu_Group_Settings_Page.Verify_SettingsSection_Appears();
                    Menu_Group_Settings_Page.Verify_SettingsTH_HoursAppears();
                    Menu_Group_Settings_Page.Verify_SettingsTH_MinutesAppears();          
             })
          }
          if(data.Jira_ID === 'PAN-T104'){
            it('PAN-T104 (1.0) Verify the Name of the group is shown' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.Verify_GroupName_Appears();
                    Menu_Group_Page.Getting_AllGroup_Name();          
             })
          }
          if(data.Jira_ID === 'PAN-T106'){
            it('PAN-T106 (1.0) Verify there is a Light Switch control toggle' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.VerifyPresent_ToggleSwitch();
             })
          }
          if(data.Jira_ID === 'PAN-T108'){
            it('PAN-T108 (1.0) Verify that clicking a group will enter the Group Settings modal' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.ClickOn_GroupName(data.Menu_Group_Name);
                    waitActions.wait(2000);
                    Menu_Group_Settings_Page.Verify_SettingsSection_Appears();
                    hotkeys.trigger('esc');
             })
          }
          if(data.Jira_ID === 'PAN-T105'){
            it('PAN-T105 (1.0) Verify the Group Description is shown' , function(){    
                    loginPage.click_Home_Btn();
                    Menu_Group_Page.clickingOn_MenuGroupOption();
                    Menu_Group_Page.Verify_Group_PageDisplayed();
                    Menu_Group_Page.verifyPresent_GroupDescription();
                    Menu_Group_Page.Getting_AllGroup_Description();
                })
            }
        }
    });
}))))))))))))))     

