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

var TEST_DATA = excelData.convertExcel_ToJSON( './resources/DataForProtractor.xlsx','Second_Drop');
describe('SecondDrop_Module : Menu_Groups - ' , function(){
    TEST_DATA.forEach(function(data){
       if(data.Status === 'Yes'){
            beforeEach(function(){
               hotkeys.trigger('esc');
            })
            if(data.Jira_ID === 'PAN-T107'){          
                it('PAN-T107 (1.0) Verify the Light Switch control toggle turns all nodes in the group on_off' , function(){    
                    homePage.click_Home_Btn();
                    homePage.clickingOn_MenuGroup();
                    Menu_Group_Page.click_LightSwitch_To_Verify_Status();
                    Menu_Group_Page.verifyLightSwitch_On(textData_Json.Menu_Group.Condition_On); 
                    Menu_Group_Page.click_LightSwitch_To_Verify_Status();
                    Menu_Group_Page.verifyLightSwitch_Off(textData_Json.Menu_Group.Condition_Off);
                })
            }
            if(data.Jira_ID === 'PAN-T109'){
                it('PAN-T109 (1.0) Verify the group title is shown at the top of the Group Settings modal' , function(){    
                    homePage.click_Home_Btn();
                    homePage.clickingOn_MenuGroup();
                    Menu_Group_Page.clickOn_GroupRow(); 
                    Menu_Group_Settings_Page.verifyPresence_Setting_PopUp(data.Menu_Group); 
                })
            }
            if(data.Jira_ID === 'PAN-T117'){
                it('PAN-T117 (1.0) Verify the next page arrows function correctly' , function(){    
                    homePage.click_Home_Btn();
                    homePage.clickingOn_MenuGroup();
                    Menu_Group_Page.clickOn_Pagination_Dropdown_Select_Range();
                    Menu_Group_Page.clickPagination_Next_ArrowMark();     
                    Menu_Group_Page.verifyPresent_NoOfGroups();
                    Menu_Group_Page.clickPagination_Prev_ArrowMark();
                    Menu_Group_Page.verifyPresent_NoOfGroups();
                })
            }
        }
    })
}), 
describe('SecondDrop_Module : Menu_Zones - ' , function(){
    TEST_DATA.forEach(function(data)
    {
       if(data.Status === 'Yes')
       {
           beforeEach(function(){
            hotkeys.trigger('esc');
           })
            if( data.Jira_ID === 'PAN-T121' ){
                it('PAN-T121 (1.0) Verify the Light Switch control toggle turns all nodes in the zone on_off' , function(){
                    homePage.click_Home_Btn();       
                    homePage.clickingOn_MenuZones(); 
                    Menu_Zone_Page.click_LightSwitch_To_Verify_Status();
                    Menu_Zone_Page.verifyLightSwitch_On(textData_Json.Menu_Group.Condition_On); 
                    Menu_Zone_Page.click_LightSwitch_To_Verify_Status();
                    Menu_Zone_Page.verifyLightSwitch_Off(textData_Json.Menu_Group.Condition_Off);   
                });
            }
            if( data.Jira_ID === 'PAN-T131' ){
                it('PAN-T131 (1.0) Verify the next page arrows function correctly' , function(){
                    homePage.click_Home_Btn();       
                    homePage.clickingOn_MenuZones(); 
                    Menu_Zone_Page.clickOn_Pagination_Dropdown_Select_Range();
                    Menu_Zone_Page.clickPagination_Next_ArrowMark();     
                    Menu_Zone_Page.verifyPresent_NoOfZones();
                    Menu_Zone_Page.clickPagination_Prev_ArrowMark();
                    Menu_Zone_Page.verifyPresent_NoOfZones();
                });
            }
        }
    })
}),
describe('SecondDrop_Module : Admin_Groups - ' , function(){
    TEST_DATA.forEach(function(data){
            if(data.Status === 'Yes'){
    
                beforeEach(function(){
                    hotkeys.trigger('esc');
                   })    
                if(data.Jira_ID === 'PAN-T236'){
                    it('PAN-T236 (1.0) Verify Group Description is shown' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyGroup_Description_Column(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T238'){
                    it('PAN-T238 (1.0) Verify there is a search bar present' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyPresenceOf_SearchBox()
                    })
                }
                if(data.Jira_ID === 'PAN-T239'){
                    it('PAN-T239 (1.0) Verify that entering characters in the search field will filter the groups list based on the specified character(s)' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.passData_ToSearchBox()
                        Admin_Group_Page.verify_SearchResult();
                    })
                }
                if(data.Jira_ID === 'PAN-T240'){
                    it('PAN-T240 (1.0) Verify that there is an Add Icon' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyPresence_PlusAdd_Icon();
                    })
                }
                if(data.Jira_ID === 'PAN-T241'){
                    it('PAN-T241 (1.0) Verify that selecting the Add Icon will take the user to the Create Group modal' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.verifyDisplayed_GroupPopUp_Title(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T242'){
                    it('PAN-T242 (1.0) Verify that the Create Group Modal contains a place to enter the name of the new Group' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.verifyPresence_Name_InputPlace(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T243'){
                    it('PAN-T243 (1.0) Verify that the Create Group Modal contains a place to enter the Group Description' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.verifyPresence_Description_InputPlace(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T244'){               
                    it('PAN-T244 (1.0) Verify that there is a list of nodes to select and to assign to the group' , function(){
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.passDataTo_InputFields(data.Admin_Group);
                        Admin_Group_Page.clickOn_Next_Btn_CreateGroup();
                        Admin_Group_Page.verifyDisplayed_NodesPresent();
                    })
                }
                if(data.Jira_ID === 'PAN-T245'){
                    it('PAN-T245 (1.0) Verify that more than one node can be entered into a group' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.passDataTo_InputFields(data.Admin_Group);
                        Admin_Group_Page.clickOn_Next_Btn_CreateGroup();
                        Admin_Group_Page.verifyDisplayed_NodesPresent();
                        Admin_Group_Page.select_MultipleNodes_CreateGroup();
                        Admin_Group_Page.clickOn_SaveBtn_CreateGroup();
                        Admin_Group_Page.clickOn_Node_Attached_ToGroup(data.Admin_Group);
                        Admin_Group_Page.verifyVisibility_Nodes_AttachedToGroup();
                    })
                }
                if(data.Jira_ID === 'PAN-T249'){
                    it('PAN-T249 (1.0) Verify that there is a pencil Icon in each Group Row' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyVisibility_EditIcon();
                    })
                }
                if(data.Jira_ID === 'PAN-T250'){
                    it('PAN-T250 (1.0) Verify that clicking the Pencil Icon takes the user to the Edit Groups modal' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.SelectOneGroup_ToEdit();
                        Admin_Group_Page.verifyDisplayed_GroupPopUp_Title(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T251'){
                    it('PAN-T251 (1.0) Verify that in the Edit Group modal the Group Name and associated nodes are pre-filled' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.SelectOneGroup_ToEdit();
                        Admin_Group_Page.verifyPreFilled_Data_EditGroup();
                    })
                }
                if(data.Jira_ID === 'PAN-T252'){
                    it('PAN-T252 (1.0) Verify that selecting Cancel will exit the modal without saving changes' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.SelectOneGroup_ToEdit();
                        Admin_Group_Page.passDataTo_InputFields(data.Admin_Group);
                        Admin_Group_Page.clickOn_Cancel_Close_Btn();
                        Admin_Group_Page.verifyNameOfGroup_Not_EditedName(data.Admin_Group);
                        
                    })
                }
                if(data.Jira_ID === 'PAN-T253'){                   
                    it('PAN-T253 (1.0) Verify that selecting Save from the Edit Groups modal will save the changes and return the user to the Groups List' , function(){  
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.SelectOneGroup_ToEdit();
                        Admin_Group_Page.passDataTo_InputFields(data.Admin_Group);
                        Admin_Group_Page.clickOn_Next_Btn_CreateGroup();
                        Admin_Group_Page.clickOn_SaveBtn_CreateGroup();
                        Admin_Group_Page.verifyNameOfGroup_EditedName(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T254'){
                    it('PAN-T254 (1.0) Verify that there is a trash icon in each group row' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyVisibility_DeleteIcon();
                    })
                }
                if(data.Jira_ID === 'PAN-T255'){
                    it('PAN-T255 (1.0) Verify that selecting the trash can icon will present the user with a Delete confirmation pop-up' , function(){ 
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyVisibility_DeletePopUp(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T256'){                  
                    it('PAN-T256 (1.0) Verify selecting Cancel will exit the modal without deleting the group' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickTo_Group_Not_ToDelete_Verify_Presence();
                        
                    })
                }
                if(data.Jira_ID === 'PAN-T257'){                       
                    it('PAN-T257 (1.0) Verify selecting Yes will exit the modal and delete the group from the Groups List' , function(){  
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.verifyVisibility_DeletePopUp(data.Admin_Group);
                        Admin_Group_Page.clickOn_Yes_DeleteGroup_PopUp();
                        Admin_Group_Page.verifyName_GroupName_Deleted();
                    })
                }
                if(data.Jira_ID === 'PAN-T258'){                 
                    it('PAN-T258 (1.0) Verify nodes that are set to Inactive do not appear in the Node List when creating a group' , function(){  
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOn_NodeColumn();
                        Admin_Nodes_Page.click_ToDeactivate_Node_Verify_Deactivation();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOn_PlusAdd_ToCreateGroup();
                        Admin_Group_Page.passDataTo_InputFields(data.Admin_Group);
                        Admin_Group_Page.clickOn_Next_Btn_CreateGroup();
                        Admin_Group_Page.verify_NotVisibility_InActive_Nodes(data.Admin_Group);
                    })
                }
                if(data.Jira_ID === 'PAN-T259'){
                    it('PAN-T259 (1.0) Verify the next page arrows function correctly' , function(){   
                        homePage.click_Home_Btn();  
                        homePage.click_AdminMenu_Btn();
                        Menu_Admin_Page.clickOnGroup();
                        Admin_Group_Page.clickOnPagination_Next_ArrowMark();
                        Admin_Group_Page.clickOnPagination_Prev_ArrowMark();
                    })
                }
            }
    })
}),
describe('SecondDrop_Module : Admin_Zones - ' , function(){
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
            })
            if(data.Jira_ID === 'PAN-T263'){
                it('PAN-T263 (1.0) Verify there is a search bar present' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu(); 
                    Admin_Zones_Page.verifyPresenceOf_SearchBox();
                })
            }
            if(data.Jira_ID === 'PAN-T264'){
                it('PAN-T264 (1.0) Verify that entering characters in the search field will filter the Zone list by the specified character' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu(); 
                    Admin_Zones_Page.passData_ToSearchBox();
                    Admin_Zones_Page.verify_SearchResult();
                })
            }
            if(data.Jira_ID === 'PAN-T265'){
                it('PAN-T265 (1.0) Verify that there is an Add Icon' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.verifyPresence_PlusAdd_Icon();
                })
            }
            if(data.Jira_ID === 'PAN-T266'){
                it('PAN-T266 (1.0) Verify that selecting the Add button presents the Add Zone Modal' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.clickOn_PlusAdd_ToCreateZone();
                    Admin_Zones_Page.verifyDisplayed_ZonePopUp_Title(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T269'){
                it('PAN-T269 (1.0) Verify that a group can only belong to one zone at a time' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.clickOn_PlusAdd_ToCreateZone();
                    Admin_Zones_Page.passData_Create_Zone(data.Admin_Zone);
                    Admin_Zones_Page.clickOn_Save_Btn_CreateZone();
                    Admin_Zones_Page.clickOn_PlusAdd_ToCreateZone();
                    Admin_Zones_Page.verify_Not_Visibility_GroupName(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T270'){
                it('PAN-T270 (1.0) Verify that selecting Close will exit without saving the zone' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.clickOn_PlusAdd_ToCreateZone();
                    Admin_Zones_Page.passData_Create_Zone(data.Admin_Zone);
                    Admin_Zones_Page.clickOn_Cancel_Close_Btn();
                    Admin_Zones_Page.verifyVisibility_Canceled_ZoneCreation(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T271'){
                it('PAN-T271 (1.0) Verify that after selecting Save the newly created zone appears in the Zone List' , function(){
                    homePage.click_Home_Btn();  
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.clickOn_PlusAdd_ToCreateZone();
                    Admin_Zones_Page.passData_Create_Zone(data.Admin_Zone);
                    Admin_Zones_Page.clickOn_Save_Btn_CreateZone();
                    Admin_Zones_Page.verifyPresence_Created_ZoneName(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T272'){
                it('PAN-T272 (1.0) Verify there is a pencil icon next to each zone' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.verifyVisibility_EditIcon();
                })
            }
            if(data.Jira_ID === 'PAN-T273'){
                it('PAN-T273 (1.0) Verify selecting the pencil icon brings up the Edit Zone modal' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu(); 
                    Admin_Zones_Page.select_OneZone_ForEdit(); 
                    Admin_Zones_Page.verifyDisplayed_ZonePopUp_Title(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T274'){
                it('PAN-T274 (1.0) Verify that there is a trash can icon' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.verifyVisibility_DeleteIcon();
                })
            }
            if(data.Jira_ID === 'PAN-T275'){
                it('PAN-T275 (1.0) Verify that selecting the trash can icon brings up a confirmation pop-up' , function(){
                    homePage.click_Home_Btn();                     
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.select_Zone_ToDelete();
                    Admin_Zones_Page.verifyVisibility_DeletePopUp(data.Admin_Zone);
                })
            }
            if(data.Jira_ID === 'PAN-T276'){
                it('PAN-T276 (1.0) Verify that selecting Yes from the pop-up will delete the zone' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.selectZone_Verify_Is_Deleted();
                })
            }
            if(data.Jira_ID === 'PAN-T277'){                    
                it('PAN-T277 (1.0) Verify that selecting cancel will return the user to the zone list without deleting the zone' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.selectZone_Verify_Not_Deleted();
                })
            }
            if(data.Jira_ID === 'PAN-T278'){
                it('PAN-T278 (1.0) Verify the next page arrows function correctly' , function(){
                    homePage.click_Home_Btn();                      
                    homePage.click_AdminMenu_Btn();
                    Menu_Admin_Page.clickZones_Submenu();  
                    Admin_Zones_Page.clickOnPagination_Next_ArrowMark();
                    Admin_Zones_Page.clickOnPagination_Prev_ArrowMark();
                })
            }     
        }
    })
}),
describe('SecondDrop_Module : Admin_Schedules - ' , function(){
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
            })    
                    if(data.Jira_ID === 'PAN-T161'){
                        it('PAN-T161 (1.0) Verify Multiple nodes can be scheduled to turn ON' , function(){    
                                homePage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                                Admin_Schedules_Page.click_SetScheduleDD();   
                                Admin_Schedules_Page.click_SelectScheduleDD_ON();
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                         })
                    }
                    if(data.Jira_ID === 'PAN-T162'){
                        it('PAN-T162 (1.0) Verify Multiple nodes can be scheduled to turn OFF' , function(){    
                                homePage.click_Home_Btn(); 
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.waittil_Schedule_Tab_appears();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                                
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T163'){
                        it('PAN-T163 (1.0) Verify Multiple nodes can be scheduled to DIM' , function(){    
                             homePage.click_Home_Btn();
                             homePage.click_AdminMenu_Btn();
                             Admin_Schedules_Page.click_Schedule_SubTab();
                             Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                             Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                             Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                             Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                             
                             Admin_Schedules_Page.selectMultipleNames_VerifyNames();        
                             Admin_Schedules_Page.schedule_subTab_Days();
                             Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                             Admin_Schedules_Page.click_SetScheduleDD();   
                             Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                             Admin_Schedules_Page.click_schedule_slider();
                             Admin_Schedules_Page.click_schedule_save();
                             Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T176'){
                        it('PAN-T176 (1.0) Verify Multiple groups can be scheduled to turn ON' , function(){    
                                homePage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_group();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();        
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                                Admin_Schedules_Page.click_SetScheduleDD();   
                                Admin_Schedules_Page.click_SelectScheduleDD_ON();
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                         })
                    }
                    if(data.Jira_ID === 'PAN-T177'){
                        it('PAN-T177 (1.0) Verify Multiple groups can be scheduled to turn OFF' , function(){    
                                homePage.click_Home_Btn();   
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.waittil_Schedule_Tab_appears();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_group();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                                
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T178'){
                        it('PAN-T178 (1.0) Verify a group can be scheduled to turn OFF' , function(){    
                             homePage.click_Home_Btn();
                             homePage.click_AdminMenu_Btn();
                             Admin_Schedules_Page.click_Schedule_SubTab();
                             Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                             Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                             Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                             Admin_Schedules_Page.click_schedulePopUp_group();
                             Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                             
                             Admin_Schedules_Page.selectMultipleNames_VerifyNames()        
                             Admin_Schedules_Page.schedule_subTab_Days();
                             Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                             Admin_Schedules_Page.click_SetScheduleDD();   
                             Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                             Admin_Schedules_Page.click_schedule_slider();
                             Admin_Schedules_Page.click_schedule_save();
                             Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T190'){
                        it('PAN-T190 (1.0) Verify Multiple zones can be scheduled to turn ON' , function(){    
                                homePage.click_Home_Btn();
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_zone();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                                
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();       
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                                Admin_Schedules_Page.click_SetScheduleDD();   
                                Admin_Schedules_Page.click_SelectScheduleDD_ON();
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                         })
                    }
                    if(data.Jira_ID === 'PAN-T191'){
                        it('PAN-T191 (1.0) Verify Multiple zones can be scheduled to turn OFF' , function(){    
                                homePage.click_Home_Btn();   
                                homePage.click_AdminMenu_Btn();
                                Admin_Schedules_Page.waittil_Schedule_Tab_appears();
                                Admin_Schedules_Page.click_Schedule_SubTab();
                                Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                                Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                                Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                                Admin_Schedules_Page.click_schedulePopUp_zone();
                                Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                                
                                Admin_Schedules_Page.selectMultipleNames_VerifyNames();        
                                Admin_Schedules_Page.schedule_subTab_Days();
                                Admin_Schedules_Page.Enter_scheduleTime(data.Time);
                                Admin_Schedules_Page.click_schedule_save();
                                Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T192'){
                        it('PAN-T192 (1.0) Verify Multiple zones can be scheduled to DIM' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();                            
                            Admin_Schedules_Page.selectMultipleNames_VerifyNames();        
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.Enter_scheduleTime(data.Time);   
                            Admin_Schedules_Page.click_SetScheduleDD();   
                            Admin_Schedules_Page.click_SelectScheduleDD_DIM();
                            Admin_Schedules_Page.click_schedule_slider();
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T165'){                   
                        it('PAN-T165 (1.0) Verify an existing node schedule can be edited' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.selectOne_Schedule_ToEdit(); 
                            Admin_Schedules_Page.edit_ScheduleName_PopUp(data.Summary);
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T180'){                       
                        it('PAN-T180 (1.0) Verify an existing group schedule can be edited' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.selectOne_Schedule_ToEdit();  
                            Admin_Schedules_Page.edit_ScheduleName_PopUp(data.Summary);
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);
                        })
                    }
                    if(data.Jira_ID === 'PAN-T194'){                           
                        it('PAN-T194 (1.0) Verify an existing zone schedule can be edited' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.selectOne_Schedule_ToEdit();  
                            Admin_Schedules_Page.edit_ScheduleName_PopUp(data.Summary);
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Summary);
                        })
                    }  
                    if(data.Jira_ID === 'PAN-T167'){
                        it('PAN-T167 (1.0) Verify sunset option is available as a start time for node schedules' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunSet();
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T168'){
                        it('PAN-T168 (1.0) Verify sunrise option is available as a start time for a node schedule' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunRise();
                       })
                    }
                    if(data.Jira_ID === 'PAN-T169'){
                        it('PAN-T169 (1.0) Verify when celestial time is used in a group schedule there is an offset field' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_OffSet();
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T170'){
                        it('PAN-T170 (1.0) Verify a celestial node schedule can be sent with a positive offset' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn_selectNode();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.click_OffSet_Btn_After();
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T171'){
                        it('PAN-T171 (1.0) Verify a celestial node schedule can be sent with a negative offset' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn_selectNode();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T181'){
                        it('PAN-T181 (1.0) Verify sunset option is available as a start time for a group schedule' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_group();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunSet();       
                       })
                    } 
                     if(data.Jira_ID === 'PAN-T182'){
                        it('PAN-T182 (1.0) Verify sunrise option is available as a start time for a group schedule' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);      
                            Admin_Schedules_Page.click_schedulePopUp_group();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunRise();    
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T183'){
                        it('PAN-T183 (1.0) Verify when celestial time is used for a group schedule there is an offset field' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_group();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_OffSet();       
                       })
                    }
                    if(data.Jira_ID === 'PAN-T184'){
                        it('PAN-T184 (1.0) Verify a celestial group schedule can be sent with a positive offset' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_group();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Group();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();       
                            Admin_Schedules_Page.click_OffSet_Btn_After();
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    }  
                    if(data.Jira_ID === 'PAN-T185'){
                        it('PAN-T185 (1.0) Verify a celestial group schedule can be sent with a negative offset' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_group();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Group();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();       
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    } 
                    if(data.Jira_ID === 'PAN-T195'){
                        it('PAN-T195 (1.0) Verify when celestial time is used in a zone schedule there is an offset field' , function(){    
                            homePage.click_Home_Btn();                          
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_OffSet();    
                       })
                    }  
                    if(data.Jira_ID === 'PAN-T196'){
                        it('PAN-T196 (1.0) Verify sunset option is available as a start time for a zone schedule' , function(){    
                            homePage.click_Home_Btn();                           
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunSet();      
                       })
                    }  
                    if(data.Jira_ID === 'PAN-T197'){
                        it('PAN-T197 (1.0) Verify sunrise option is available as a start time for a zone schedule' , function(){    
                            homePage.click_Home_Btn();                           
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.verify_Visibility_SunRise();
                       })
                    }
                    if(data.Jira_ID === 'PAN-T198'){
                        it('PAN-T198 (1.0) Verify a celestial zone schedule can be sent with a positive offset' , function(){    
                            homePage.click_Home_Btn();                           
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Zones();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.click_OffSet_Btn_After();
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();                           
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    }        
                    if(data.Jira_ID === 'PAN-T199'){
                        it('PAN-T199 (1.0) Verify a celestial zone schedule can be sent with a negative offset' , function(){    
                            homePage.click_Home_Btn();                           
                            homePage.click_AdminMenu_Btn();
                            Admin_Schedules_Page.click_Schedule_SubTab();
                            Admin_Schedules_Page.click_Schedule_SubTab_AddBtn();
                            Admin_Schedules_Page.enter_Schedule_Name(data.Admin_Schedule);
                            Admin_Schedules_Page.enter_Schedule_Description(data.Description);
                            Admin_Schedules_Page.click_schedulePopUp_zone();
                            Admin_Schedules_Page.click_Schedule_SubTab_NodeBtn();
                            Admin_Schedules_Page.schedule_select_Zones();
                            Admin_Schedules_Page.schedule_subTab_Days();
                            Admin_Schedules_Page.click_Celestial_CheckBox_VerifyStatus();
                            Admin_Schedules_Page.passData_OffSet_Hour_Minutes();
                            Admin_Schedules_Page.click_schedule_save();                           
                            Admin_Schedules_Page.verifyPresence_Names_ScheduleList(data.Admin_Schedule);
                       })
                    }                                                           
        }
    })
}),
describe('Test response for all REST API methods' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
               })
        if(data.Jira_ID === 'PAN-T520')
        {
            it("Login API to Ubicquia Server",function(done){
                Request.post({
                  "headers": { "content-type": "application/json" },
                  "url": data.url,
                  "body": JSON.stringify({
                  "email":data.email,
                  "password" : data.password      
                  })
                  },
                   (error, response, body) => {
                    if(error) {
                        return console.dir(error);
                    }
                    const info = JSON.parse(body);
                    var accessToken=info.data.access_token;
                    access_token1 =  accessToken;
                    done();
                }); 
              });
            }
         if(data.Jira_ID === 'PAN-T97')
         {
              it("PAN-T97  Verify adjusting the Dim Value slider correctly adjust the dim setting of the node",function(done){
                Request.post({
                  "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
                  "url": data.url,
                  "body": JSON.stringify({
                        "id_list": [
                          {
                            "id": data.id
                          }
                        ],
                        "value": data.value,
                        "node_level_type_id": data.node_level_type_id,
                        "dim_type": "LD1State" 
                  })
                  }, (error, response, body) => {
                    if(error) {
                       console.dir('Some error occured...');
                    }
                    else{
                    }
                    const info = JSON.parse(body);
                    var nodeDimvalue=info.data.value;
                    expect(nodeDimvalue).toEqual(data.value);
                    done()
                });
              });
            }
            if(data.Jira_ID === 'PAN-T98')
            {
                 it("PAN-T98  Verify when adjusting the Dim Value the command is sent to the node",function(done){
                   Request.post({
                     "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
                     "url": data.url,
                     "body": JSON.stringify({
                           "id_list": [
                             {
                               "id": data.id
                             }
                           ],
                           "value": data.value,
                           "node_level_type_id": data.node_level_type_id,
                           "dim_type": "LD1State" 
                     })
                     }, (error, response, body) => {
                       if(error) {
                          console.dir('Some error occured...');
                       }
                       else{
                       }
                       const info = JSON.parse(body);
                       var nodeDimvalue=info.data.value;
                       expect(nodeDimvalue).toEqual(data.value);
                       done()
                   });
                 });
               }
              if(data.Jira_ID === 'PAN-T100')
              {
              it("PAN-T100 Verify adjusting the Light Sensitivity sends the correct command to the node",function(done){
                Request.post({
                  "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
                  "url": data.url,
                  "body": JSON.stringify({
                        "id_list": [
                          {
                            "id": data.id
                          }
                        ],
                        "value": data.value,
                        "node_level_type_id": data.node_level_type_id
                  })
                  }, (error, response, body) => {
                    if(error) {
                       console.dir('Some error occured...');
                    }
                    else{
                    }
                    const info = JSON.parse(body);
                    var Value_on=info.data.value;
                    expect(Value_on).toEqual(data.value);
                    done()
                });
              });
              it("api Testing in protractor",function(done){
                Request.post({
                  "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
                  "url": data.url1,
                  "body": JSON.stringify({
                        "id_list": [
                          {
                            "id": data.id
                          }
                        ],
                        "value": data.value2,
                        "node_level_type_id": data.node_level_type_id
                  })
                  }, (error, response, body) => {
                    if(error) {
                       console.dir('Some error occured...');
                    }
                    else{
                    }
                    const info = JSON.parse(body);
                    var Value_off=info.data.value;
                    expect(Value_off).toEqual(data.value2);
                    done()
                });
              });
            }
            if(data.Jira_ID === 'PAN-T112')
            {
            it("PAN-T112 Verify the Dim Value slider will change the dim setting for all nodes within the group",function(done){
              Request.post({
                "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
                "url": data.url,
                "body": JSON.stringify({
                      "id_list": [
                        {
                          "id": data.id
                        }
                      ],
                      "value": data.value,
                      "node_level_type_id": data.node_level_type_id,
                      "dim_type": "LD1State" 
                })
                }, (error, response, body) => {
                  if(error) {
                     console.dir('Some error occured...');
                  }
                  else{
                  }
                  const info = JSON.parse(body);
                  var Group_dim=info.data.value;           
                  done()
              });
            });
          }
          if(data.Jira_ID === 'PAN-T114')
          {
          it("PAN-T114 Verify that adjusting the min and max of the slider bar will change all node settings in the group",function(done){
            Request.post({
              "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
              "url": data.url,
              "body": JSON.stringify({
                    "id_list": [
                      {
                        "id": data.id
                      }
                    ],
                    "value": data.value,
                    "node_level_type_id": data.node_level_type_id
              })
              }, (error, response, body) => {
                if(error) {
                   console.dir('Some error occured...');
                }
                else{
                }
                const info = JSON.parse(body);
                var Group_Value_on=info.data.value;
                done()
            });
          });
          it("api Testing in protractor",function(done){
            Request.post({
              "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
              "url": data.url1,
              "body": JSON.stringify({
                    "id_list": [
                      {
                        "id": data.id
                      }
                    ],
                    "value": data.value2,
                    "node_level_type_id": data.node_level_type_id
              })
              }, (error, response, body) => {
                if(error) {
                   console.dir('Some error occured...');
                }
                else{
                }
                const info = JSON.parse(body);
                var Group_Value_off=info.data.value;
                done()
            });
          });
        }
        if(data.Jira_ID === 'PAN-T126')
        {
        it("PAN-T126 Verify the Dim Value slider will change the dim setting for all nodes within the Zone",function(done){
          Request.post({
            "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
            "url": data.url,
            "body": JSON.stringify({
                  "id_list": [
                    {
                      "id": data.id
                    }
                  ],
                  "value": data.value,
                  "node_level_type_id": data.node_level_type_id,
                  "dim_type": "LD1State" 
            })
            }, (error, response, body) => {
              if(error) {
                 console.dir('Some error occured...');
              }
              else{
              }
              const info = JSON.parse(body);
                var Zone_dim_value=info.data.value;
              done()
          });
        });
      }
      if(data.Jira_ID === 'PAN-T128')
      {
      it("PAN-T128 Verify that adjusting the min and max of the slider bar will change all node settings in the group",function(done){
        Request.post({
          "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
          "url": data.url,
          "body": JSON.stringify({
                "id_list": [
                  {
                    "id": data.id
                  }
                ],
                "value": data.value,
                "node_level_type_id": data.node_level_type_id
          })
          }, (error, response, body) => {
            if(error) {
               console.dir('Some error occured...');
            }
            else{
            }
            const info = JSON.parse(body);
            var Zone__value_on=info.data.value;
            done()
        });
      });
      it("api Testing in protractor",function(done){
        Request.post({
          "headers": { "content-type": "application/json","Authorization": "Bearer "+access_token1+""},
          "url": data.url1,
          "body": JSON.stringify({
                "id_list": [
                  {
                    "id": data.id
                  }
                ],
                "value": data.value2,
                "node_level_type_id": data.node_level_type_id
          })
          }, (error, response, body) => {
            if(error) {
               console.dir('Some error occured...');
            }
            else{
            }
            const info = JSON.parse(body);
            var Zone__value_off=info.data.value;
            done()
        });
      });
    }
        }
    })
}),
describe('SecondDrop_Module : HomePage - ' , function(){
    TEST_DATA.forEach(function(data){
       if(data.Status === 'Yes'){
            beforeEach(function(){
                browser.sleep(2000);
                hotkeys.trigger('esc');
            })
            if( data.Jira_ID === 'PAN-T11' ){    
                it('PAN-T11 (1.0) Verify the notification icon will show an icon if there are unread notifications' , function(){
                    homePage.click_Home_Btn(); 
                    waitActions.wait(1000);   
                    homePage.BellIconCount();
                });
            }; 
            if( data.Jira_ID === 'PAN-T12' ){
                it('PAN-T12 (1.0) Verify the language icon is present' , function(){
                    homePage.click_Home_Btn();                            
                    homePage.verifyPresence_LanguageIcon();
                      
                });
            };
            if( data.Jira_ID === 'PAN-T13' ){
                it('PAN-T13 (1.0) Verify the available languages are English, Espanol, Russian' , function(){
                    homePage.click_Home_Btn();         
                    homePage.ClickOn_LanguageIcon();
                    homePage.VerifyLanguages(data.Languages);
                      
                });
            };
            if( data.Jira_ID === 'PAN-T14' ){
                it('PAN-T14 (1.0) Verify selecting a language changes the UI to the specific language' , function(){
                    homePage.click_Home_Btn();         
                    homePage.ClickOn_LanguageIcon();
                    homePage.ClickOn_Language_Espanol();
                    homePage.verifyPresence_HomeInEspanol_Language();
                    homePage.ClickOn_LanguageIcon();
                    homePage.ClickOn_Language_Pyccknn();
                    homePage.verifyPresence_HomeInpyccknn_Language();
                    homePage.ClickOn_LanguageIcon();
                    homePage.ClickOn_Language_English();
                    homePage.verifyPresence_HomeEnglish_Language();    
                });
            };
            if( data.Jira_ID === 'PAN-T15' ){
                it('PAN-T15 (1.0) Verify there is a report Icon' , function(){
                    homePage.click_Home_Btn();       
                    homePage.verifyPresence_ReportIcon();        
                });
            };
            if( data.Jira_ID === 'PAN-T16' ){
                it('PAN-T16 (1.0) Verify selecting KwH Report will download the KwH data to your computer' , function(){
                    homePage.click_Home_Btn();       
                    homePage.verifyPresence_ReportIcon();     
                    homePage.ClickOn_ReportIcon();   
                    homePage.ClickonKWH();
                    homePage.VerifyKWH_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T17' ){
                it('PAN-T17 (1.0) Verify selecting Transaction Report will download the Transaction data to your computer' , function(){
                    homePage.click_Home_Btn();       
                    homePage.verifyPresence_ReportIcon();     
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_Transaction();
                    homePage.VerifyTransaction_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T18' ){
                it('PAN-T18 (1.0) Verify selecting the Light State Report 3 Days will download the Light State data to your computer' , function(){
                    homePage.click_Home_Btn();       
                    homePage.verifyPresence_ReportIcon();     
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_LightState_30Days();
                    homePage.VerifyLightState_30Days_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T19' ){
                it('PAN-T19 (1.0) Verify the Light State Report 7 Days will download to your computer' , function(){
                    homePage.click_Home_Btn();       
                    homePage.verifyPresence_ReportIcon();     
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_LightState_7Days();
                    homePage.VerifyLightState_7Days_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T20' ){
                it('PAN-T20 (1.0) Verify the Zones With Groups report will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_ZoneWithgroups();
                    homePage.VerifyZone_with_Groups_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T21' ){
                it('PAN-T21 (1.0) Verify the Groups with Nodes will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_Group_with_Zones();
                    homePage.VerifyGroup_with_Zones_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T22' ){
                it('PAN-T22 (1.0) Verify the Zones with Groups and Nodes report will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_Zone_With_GroupNode();
                    homePage.VerifyZone_With_GroupNode_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T23' ){
                it('PAN-T23 (1.0) Verify the Schedule transactions report will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_Schedule_Transaction();
                    homePage.VerifySchedule_Transaction_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T24' ){
                it('PAN-T24 (1.0) Verify the Node Schedules report will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_Node_Schedule();
                    homePage.VerifyNode_Schedule_Text();
                });
            };
            if( data.Jira_ID === 'PAN-T25' ){
                it('PAN-T25 (1.0) Verify the Audit Report will download to your computer' , function(){
                    homePage.click_Home_Btn();
                    homePage.verifyPresence_ReportIcon();
                    homePage.ClickOn_ReportIcon();   
                    homePage.Clickon_AuditReport_3Days();
                    homePage.VerifyAuditReport_3Days_Text();
                });
            }; 
            if( data.Jira_ID === 'PAN-T26' ){
                it('PAN-T26 (1.0) Verify the logged in user appears in the top right corner' , function(){
                    homePage.click_Home_Btn();        
                    homePage.verifyPresence_PriofileIcon();
                    homePage.verifyPresence_ProfileName();      
                });
            };
            if( data.Jira_ID === 'PAN-T27' ){
                it('PAN-T27 (1.0) Verify clicking the User will present two options Profile and Sign Out' , function(){
                    homePage.click_Home_Btn();       
                    homePage.Click_ProfileName();  
                    homePage.Menu_options(data.Menu_optionss);   
                });
            };
            if( data.Jira_ID === 'PAN-T28' ){
                it('PAN-T28 (1.0) Verify that selecting the Profile option from the user menu takes the user to the Profile Update page' , function(){
                    homePage.click_Home_Btn();       
                    homePage.Click_ProfileName();  
                    homePage.Click_MenuProfileName();  
                    homePage.VerifyUserOn_ProfilePage();
                });
            };
            if( data.Jira_ID === 'PAN-T29' ){
                it('PAN-T29 (1.0) Verify that any notifications are shown in the Latest Activity section of the dashboard' , function(){
                    loginPage.click_Home_Btn();
                    homePage.verifyNotification_sectionAppars();
                    homePage.verifyNotification_LIstingAppars();
                    homePage.VerifyLatestActivity_Notification_count();
                });
            }; 
        }
    })
}),
describe('SecondDrop_Module : Menu_Nodes - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
        if(data.Status === 'Yes')
        {
            beforeEach(function(){
                hotkeys.trigger('esc');
            })
            if( data.Jira_ID === 'PAN-T70' ){
                it('PAN-T70 (1.0) Verify the next page arrows function correctly' , function(){
                    homePage.click_Home_Btn();        
                    homePage.clickingOn_MenuNode();
                    Menu_Node_Page.SetPagesValue_5();
                    Menu_Node_Page.clickNext_Arrow();
                    Menu_Node_Page.clickPre_Arrow();
                }); 
            }
            if( data.Jira_ID === 'PAN-T64' ){
                it('PAN-T64 (1.0) Verify the Fixture Current changes to a value close in range to the Pole Current when the Light is turned On' , function(){
                    homePage.click_Home_Btn();        
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.Verify_FixtureVoltage();       
                }); 
            }
            if( data.Jira_ID === 'PAN-T66' ){
                it('PAN-T66 (1.0) Verify the Fixture Current drops below 1 on the panel when the Light is turned Off' , function(){
                    homePage.click_Home_Btn();        
                    Menu_Node_Page.clickingOn_MenuNode();
                    Menu_Node_Page.Verify_FixtureCurrent();       
                }); 
            }
        }
    })
}),
describe('SecondDrop_Module : Admin_Users - ' , function()
{
    TEST_DATA.forEach(function(data)
    {
        if(data.Status === 'Yes')
        {
            beforeEach(function(){
                hotkeys.trigger('esc');
                })
                if(data.Jira_ID === 'PAN-T137'){
                    it('PAN-T137 (1.0) Verify clicking a user row will present the Edit User modal' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.click_on_UserName();
                            Admin_User_Page.verifyVisibility_EditUserTitle();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T138'){
                    it('PAN-T138 (1.0) Verify that selecting the trash icon in a User Row presents a confirmation pop-up' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.click_on_TrashIcon();
                            Admin_User_Page.verifyVisibility_TrashPopup_Title();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T139'){
                    it('PAN-T139 (1.0) Verify that selecting Yes from the Delete Confirmation will delete the user' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.click_on_TrashIcon();
                            Admin_User_Page.click_DeleteUser_YesBtn();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T140'){
                    it('PAN-T140 (1.0) Verify that there is a search field present' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_SearchBar();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T141'){
                    it('PAN-T141 (1.0) Verify that entering characters in the search field will filter the user list by those characters' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_SearchBar();
                            Admin_User_Page.VerifySearch_Users();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T142'){
                    it('PAN-T142 (1.0) Verify that there is an +Add button' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T143'){
                    it(' PAN-T143 (1.0) Verify that selecting the Add button brings up the Add User modal' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T151'){
                    it('PAN-T151 (1.0) Verify that selecting Cancel from the Add User Modal will cancel the user creation' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.click_CrossBtn();
                            Admin_User_Page.verifyVisibility_SearchBar();
                     })
                  }
                
                  if(data.Jira_ID === 'PAN-T145'){
                    it('PAN-T145 (1.0) Verify that the First Name is required' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.enter_LastName(data.Last);
                            Admin_User_Page.enter_UserEmail(data.User_Email);
                            Admin_User_Page.click_UberUser_checkbox();
                            Admin_User_Page.VerfiyNextButtonDisabled();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T146'){
                    it('PAN-T146 (1.0) Verify that the Last Name is required' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.enter_FirstName(data.First);
                            Admin_User_Page.enter_UserEmail(data.User_Email);
                            Admin_User_Page.click_UberUser_checkbox();
                            Admin_User_Page.VerfiyNextButtonDisabled();                  
                     })
                  }
                  if(data.Jira_ID === 'PAN-T147'){
                    it('PAN-T147 (1.0) Verify that the Email is required' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.enter_FirstName(data.First);
                            Admin_User_Page.enter_LastName(data.Last);
                            Admin_User_Page.click_UberUser_checkbox();
                            Admin_User_Page.VerfiyNextButtonDisabled();         
                     })
                  }
                  if(data.Jira_ID === 'PAN-T149'){
                    it('PAN-T149 (1.0) Verify that the Type of User is required' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.verifyVisibility_UserTypeUberUser();         
                     })
                  }
                  if(data.Jira_ID === 'PAN-T150'){
                    it('PAN-T150 (1.0) Verify there are two types of Users ADMIN & USER' , function(){    
                            loginPage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.WaitTillAddButtonAppears();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.enter_FirstName(data.First);
                            Admin_User_Page.enter_LastName(data.Last);
                            Admin_User_Page.enter_UserEmail(data.User_Email);
                            Admin_User_Page.ClickNext_Btn();
                            Admin_User_Page.Click_UserRole();
                            Admin_User_Page.Validate_UserRolesUnderListing();
                     })
                  }
                  if(data.Jira_ID === 'PAN-T152'){
                    it('PAN-T152 (1.0) Verify that selecting Save from the Add User Modal will create a new User' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.WaitTillAddButtonAppears();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.click_AddBtn();
                            Admin_User_Page.verifyVisibility_AddUserTitle();
                            Admin_User_Page.enter_FirstName(data.First);
                            Admin_User_Page.enter_LastName(data.Last);
                            Admin_User_Page.enter_UserEmail(data.User_Email);
                            Admin_User_Page.click_UberUser_checkbox();
                            Admin_User_Page.ClickNext_Btn();
                            Admin_User_Page.click_PageBtn();
                            Admin_User_Page.Validate_UserAdded(data.User_Email);
                     })
                  }
                  if(data.Jira_ID === 'PAN-T156'){
                    it('PAN-T156 (1.0) Verify the next page arrows function correctly' , function(){    
                            homePage.click_Home_Btn();
                            homePage.click_AdminMenu_Btn();
                            Admin_User_Page.click_User_SubMenuButton();
                            Admin_User_Page.WaitTillAddButtonAppears();
                            Admin_User_Page.verifyVisibility_AddBtn();
                            Admin_User_Page.SetPagesValue_5();
                            Admin_User_Page.clickNext_Arrow();
                            Admin_User_Page.clickPre_Arrow();
                     })
                  }
        }
    })
}),
describe('SecondDrop_Module : Admin_Nodes - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
               })
               if(data.Jira_ID === 'PAN-T231'){
                it('PAN-T231 (1.0) Verify there is a search field on the Admin-> Nodes screen' , function(){
                        homePage.click_Home_Btn();                             
                        homePage.click_AdminMenu_Btn();                       
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.verifyVisibility_SearchBar();
                })
            }
            if(data.Jira_ID === 'PAN-T230'){
                it('PAN-T230 (1.0) Verify that clicking the clock icon will present the user with a "Update over OTA" confirmation pop-up' , function(){
                        homePage.click_Home_Btn();                              
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.wait_Till_Node_Subtab_visibility();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.click_on_OTABtn_1();
                        Admin_Nodes_Page.verifyVisibility_PopupYesBtn();
                })
            }
            if(data.Jira_ID === 'PAN-T229'){
                it('PAN-T229 (1.0) Verify that clicking the pencil icon will present the Edit Node modal' , function(){
                        homePage.click_Home_Btn();                              
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.wait_Till_Node_Subtab_visibility();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.click_on_EditBtn_1();
                        Admin_Nodes_Page.verifyVisibility_EditNodePop();
                })
            }
            if(data.Jira_ID === 'PAN-T228'){
                it('PAN-T228 (1.0) Verify that there is a pencil icon in each node row' , function(){
                        homePage.click_Home_Btn();                              
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.wait_Till_Node_Subtab_visibility();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.verifyVisibility_AllEditBtn();
                })
            }
            if(data.Jira_ID === 'PAN-T227'){
                it('PAN-T227 (1.0) Verify that selecting the Add button will present the Add Node modal' , function(){
                        homePage.click_Home_Btn();                              
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.wait_Till_Node_Subtab_visibility();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.click_AddBtn();
                        Admin_Nodes_Page.verifyVisibility_EditNodePop();
                })
            }
            if(data.Jira_ID === 'PAN-T226'){
                it('PAN-T226 (1.0) Verify that the Admin->Nodes screen contains an +Add button' , function(){
                        homePage.click_Home_Btn();                              
                        homePage.click_AdminMenu_Btn();
                        Admin_Nodes_Page.wait_Till_Node_Subtab_visibility();
                        Admin_Nodes_Page.click_Nodes_SubTab();
                        Admin_Nodes_Page.verifyVisibility_AddButton();     
                })
            }
            if(data.Jira_ID === 'PAN-T225'){
                it('PAN-T225 (1.0) Verify that selcting Cancel from the Edit Node Modal will cancel without saving changes' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.CancelWithout_Saving(data.NodeName);
                })
            }
            if(data.Jira_ID === 'PAN-T208'){
                it('PAN-T208 (1.0) Verify there is an Active check box for each node' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.verifyVisibility_ActiveCheckBoxs();
                })
            }
            if(data.Jira_ID === 'PAN-T209'){
                it('PAN-T209 (1.0) Verify that clicking a node row will present the Edit Node Modal' , function(){
                    homePage.click_Home_Btn();                         
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                })
            }
            if(data.Jira_ID === 'PAN-T210'){
                it('PAN-T210 (1.0) Verify the Edit Node Modal contains Node Name' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Edit_NodeName(data.NodeName);
                })
            }
            if(data.Jira_ID === 'PAN-T211'){
                it('PAN-T211 (1.0) Verify the Edit Node Modal contains Pole ID' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_PoleID();
                })
            }
            if(data.Jira_ID === 'PAN-T212'){
                it('PAN-T212 (1.0) Verify the Edit Node Modal contains Pole Type' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Edit_Node_PoleType(data.Pole_type);    
                })
            }
            if(data.Jira_ID === 'PAN-T213'){
                it('PAN-T213 (1.0) Verify the Edit Node Modal contains Fixture ID' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Edit_Node_FixtureID(data.FID);   
                })
            }
            if(data.Jira_ID === 'PAN-T214'){
                it('PAN-T214 (1.0) Verify the Edit Node Modal contains Fixture Type' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();  
                    Admin_Nodes_Page.Edit_Node_FixtureType(data.FT);    
                })
            }
            if(data.Jira_ID === 'PAN-T215'){
                it('PAN-T215 (1.0) Verify the Latitude of the Node is shown on the Edit Node Modal' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_Latitude();
                })
            }
            if(data.Jira_ID === 'PAN-T216'){
                it('PAN-T216 (1.0) Verify the Longitude of the Node is shown on the Edit Node Modal' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_Longitude();
                })
            }
            if(data.Jira_ID === 'PAN-T217'){
                it('PAN-T217 (1.0) Verify that the Node ID is shown in the Edit Node Modal' , function(){
                    homePage.click_Home_Btn();                         
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_PoleID();
                })
            }
            if(data.Jira_ID === 'PAN-T218'){
                it('PAN-T218 (1.0) Verify that there is an Override GPS checkbox' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_GPSCheckbox();
                })
            }
            if(data.Jira_ID === 'PAN-T219'){
                it('PAN-T219 (1.0) Verify there is an Active checkbox in the Edit Node modal' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_ActiveCheckbox();
                })
            }
            if(data.Jira_ID === 'PAN-T222'){
                it('PAN-T222 (1.0) Verify that selecting Override GPS checkbox presents user with a confirmation pop-up' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_GPSCheckbox();
                    Admin_Nodes_Page.click_GPS();
                    Admin_Nodes_Page.verifyVisibility_GPSPopup_appears();   
                })
            }
            if(data.Jira_ID === 'PAN-T223'){
                it('PAN-T223 (1.0) Verify that selecting Yes from the confirmation pop-up causes the Latitude and Longitude fields to be edited' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.click_on_Node_1();
                    Admin_Nodes_Page.verifyVisibility_EditNodePop();
                    Admin_Nodes_Page.verifyVisibility_GPSCheckbox();
                    Admin_Nodes_Page.clickGPS_ifunChecked();
                    Admin_Nodes_Page.verifyVisibility_GPSPopup_appears();
                    Admin_Nodes_Page.click_GPS_Pop_YesBtn();
                    Admin_Nodes_Page.LatitudeEnabled();
                    Admin_Nodes_Page.LongitudeEnabled();
                })
            }
            if(data.Jira_ID === 'PAN-T224'){
                it('PAN-T224 (1.0) Verify that selecting Save from the Edit Node Modal will save the changes to the Node' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Edit_Node_Name(data.NodeName);    
                })
            }
            if(data.Jira_ID === 'PAN-T529'){
                it('PAN-T529 (1.0) Verify the Edit Node modal contains a Maintenance Company field' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Edit_Node_Maintenance(data.Maintenance_c);    
                })
            }
            if(data.Jira_ID === 'PAN-T233'){
                it('PAN-T233 (1.0) Verify the next page arrows function correctly' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.SetPagesValue_10();
                    Admin_Nodes_Page.clickNext_Arrow();
                    Admin_Nodes_Page.clickPre_Arrow();     
                })
            }
            if(data.Jira_ID === 'PAN-T232'){               
                it('PAN-T232 (1.0) Verify that entering characters in the search field will filter out of the list nodes without the specified character' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.VerifySearch_Nodes();            
                })
            }
            if(data.Jira_ID === 'PAN-T221'){
                it('PAN-T221 (1.0) Verify that Inactive nodes do not appear in the Create Group node list or map' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Inactive_not_GroupList(data.Group_Name,data.Description);
                })
            }
            if(data.Jira_ID === 'PAN-T220'){
                it('PAN-T220 (1.0) Verify that unchecking Active and saving removes the Node from the Nodes-Node Status list' , function(){
                    homePage.click_Home_Btn();                          
                    homePage.click_AdminMenu_Btn();
                    Admin_Nodes_Page.click_Nodes_SubTab();
                    Admin_Nodes_Page.Inactive_not_MenuNodeList()
                })
            } 
        }
    })
}),
describe('SecondDrop_Module : Admin_Thresholds - ' , function()
{
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
                hotkeys.trigger('esc');
            });
            if(data.Jira_ID === 'PAN-T295'){
                it('PAN-T295 (1.0) Verify that the Edit Threshold modal contains an Alert Type dropdown' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.click_on_Node();
                    Admin_Thresholds_Page.verifyVisibility_ThresholdDD();
                    
                });
            } 
            if(data.Jira_ID === 'PAN-T294'){
                it('PAN-T294 (1.0) Verify that the Edit Threshold modal contains an Active checkbox' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.click_on_Node();
                    Admin_Thresholds_Page.verifyVisibility_ActiveCheckBox();
                    
                });
            } 
            if(data.Jira_ID === 'PAN-T293'){
                it('PAN-T293 (1.0) Verify that selecting the Pencil will bring up the Edit Threshold Alert' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.click_on_Edit();
                    Admin_Thresholds_Page.verify_EditThreshold_Header();
                    
                });
            } 
            if(data.Jira_ID === 'PAN-T292'){
                it('PAN-T292 (1.0) Verify that there is a pencil icon present on the screen' , function(){
                    homePage.click_Home_Btn();                  
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.verifyPresence_EditIcons();
                    
                });
            } 
            if(data.Jira_ID === 'PAN-T291'){
                it('PAN-T291 (1.0) Verify that selecting Cancel from the modal will not delete the threshold alert' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.clickTrash_ValidateThreshold();
                });
            } 
            if(data.Jira_ID === 'PAN-T290'){
                it('PAN-T290 (1.0) Verify that selecting Yes from the confirmation pop-up will delete the threshold alert' , function(){
                    homePage.click_Home_Btn();                  
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.clickTrash_ValidateThresholdNotPresence();
                });
            } 
            if(data.Jira_ID === 'PAN-T289'){
                it('PAN-T289 (1.0) Verify that selecting the trash can icon brings up a confirmation pop-up' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.click_on_Trash();
                    Admin_Thresholds_Page.verifyPresence_DeletePopup();
                });
            } 
            if(data.Jira_ID === 'PAN-T288'){
                it('PAN-T288 (1.0) Verify there is a trash can icon listed next to each threshold alert' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.verifyPresence_TrashIcons();
                });
            } 
            if(data.Jira_ID === 'PAN-T287'){
                it('PAN-T287 (1.0) Verify there is a search filter located on the screen' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.verifyPresence_Search();
                });
            } 
            if(data.Jira_ID === 'PAN-T286'){
                it('PAN-T286 (1.0) Verify there is a Clear All button present on the screen' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.verifyPresence_ClearAll();
                });
            } 
            if(data.Jira_ID === 'PAN-T285'){
                it('PAN-T285 (1.0) Verify there is an Add Button present on the screen' , function(){
                    homePage.click_Home_Btn();                  
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();
                    Admin_Thresholds_Page.verifyPresence_AddButton();
                });
            } 
            if(data.Jira_ID === 'PAN-T296'){
                it('PAN-T296 (1.0) Verify that the Edit Threshold modal contains a Maximum Threshold field' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();                    
                    Admin_Thresholds_Page.verifyPresence_AddButton();
                    Admin_Thresholds_Page.SelectNode_FromNodeListing();
                    Admin_Thresholds_Page.SelecttheAlertType();
                    Admin_Thresholds_Page.VerfiyVisibility_Threshold();
                    Admin_Thresholds_Page.SelectGroup_FromGroupListing();
                    Admin_Thresholds_Page.SelecttheAlertType();
                    Admin_Thresholds_Page.VerfiyVisibility_Threshold();
                    Admin_Thresholds_Page.SelectZones_FromZonesListing();
                    Admin_Thresholds_Page.SelecttheAlertType();
                });
            } 
            if(data.Jira_ID === 'PAN-T297'){
                it('PAN-T297 (1.0) Verify that the Edit Threshold modal contains a Minimum Threshold field' , function(){
                    loginPage.click_Home_Btn();
                    waitActions.wait(1000);
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();                    
                    Admin_Thresholds_Page.verifyPresence_AddButton();
                    Admin_Thresholds_Page.SelectNode_FromNodeListing();
                    Admin_Thresholds_Page.SelecttheAlertType();
                    Admin_Thresholds_Page.VerfiyVisibility_Threshold();
                });
            }
            if(data.Jira_ID === 'PAN-T298'){
                it('PAN-T298 (1.0) Verify when a threshold is met an alert is sent to the panel' , function(){
                    loginPage.click_Home_Btn();
                    waitActions.wait(1000);
                    Menu_Admin_Page.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();                    
                    Admin_Thresholds_Page.verifyPresence_AddButton();
                    Admin_Thresholds_Page.SelectNode_FromNodeListing();
                    Admin_Thresholds_Page.SelecttheAlertType();
                    Admin_Thresholds_Page.VerfiyVisibility_Threshold();
                    Admin_Thresholds_Page.SendValuein_Threshold(data.ThresholdValue_1);
                });
            }
            if(data.Jira_ID === 'PAN-T299'){
                it('PAN-T299 (1.0) Verify the next page arrows function correctly' , function(){
                    homePage.click_Home_Btn();                   
                    homePage.click_AdminMenu();
                    Admin_Thresholds_Page.click_thresholdSubmenuOption();     
                    Admin_Thresholds_Page.SetPagesValue_5();               
                    Admin_Thresholds_Page.clickNext_Arrow();
                    Admin_Thresholds_Page.clickPre_Arrow();
                });
            }
        }
    })
}),
describe('SecondDrop_Module : Menu_Node_Summary - ' , function(){
    TEST_DATA.forEach(function(data){

        if(data.Status === 'Yes')
        {
            beforeEach(function(){
             hotkeys.trigger('esc');
            })
            if(data.Jira_ID === 'PAN-T75'){
                it('PAN-T75 (1.0) Verify that the Node Summary shows the Name' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                      
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_NameHeader();
                        Menu_Node_Summary_Page. Verify_NodeSummary_Name_Value();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T74'){
                it('PAN-T74 (1.0) Verify that the Node Summary shows the Node ID' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_IDHeader();
                        Menu_Node_Summary_Page. Verify_NodeSummary_NodeID_Value();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T73'){
                it('PAN-T73 (1.0) Verify that the Node Name is listed in the header of the modal' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_IDHeaderTop();
                        Menu_Node_Summary_Page.Verify_NodeSummary_NodeName_Value_HeaderTop();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T76'){
                it('PAN-T76 (1.0) Verify that the Node Summary shows the assigned Group' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_GroupNameTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_GroupNameValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T77'){
                it('PAN-T77 (1.0) Verify that the Node Summary shows the assigned Zone' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_ZoneNameTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_ZoneNameValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T78'){
                it('PAN-T78 (1.0) Verify that the Node Summary shows the Maintenance Company' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_MaintenanceNameTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_MaintenanceNameValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T79'){
                it('PAN-T79 (1.0) Verify that the Node Summary shows the Pole ID' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_PoleIDTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_PoleIDValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T80'){
                it('PAN-T80 (1.0) Verify that the Node Summary shows the Pole Type' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                       
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_PoleTypeTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_PoleTypeValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T81'){
                it('PAN-T81 (1.0) Verify that the Node Summary shows the Fixture ID' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                      
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_FixtureIDTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_FixtureIDValue();                       
                 })
              }
              if(data.Jira_ID === 'PAN-T82'){
                it('PAN-T82 (1.0) Verify that the Node Summary shows the Fixture Type' , function(){    
                        homePage.click_Home_Btn();
                        homePage.clickingOn_MenuNode();
                        Menu_Node_Page.wait_Till_Namevisibility();
                        Menu_Node_Page.click_on_Node(data.Node_Name);                      
                        Menu_Node_Summary_Page.Verify_availability_Node_Summary_FixtureTypeTitle();
                        Menu_Node_Summary_Page.Verify_NodeSummary_FixtureTypeValue();                       
                 })
              }
        }
    })
}),
describe('SecondDrop_Module : Menu_SetUp_Message_Stream - ' , function(){
    TEST_DATA.forEach(function(data){
        if(data.Status === 'Yes'){
            beforeEach(function(){
             hotkeys.trigger('esc');
            })
            if(data.Jira_ID === 'PAN-T360'){
                it('PAN-T360 (1.0) Verify there is a Message Stream tab in the Setup Screen' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        
                 })
              }
              if(data.Jira_ID === 'PAN-T361'){
                it('PAN-T361 (1.0) Verify the Message Stream Screen appears' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Validate_msgScreeenAppears();
                 })
              }
              if(data.Jira_ID === 'PAN-T362'){
                it('PAN-T362 (1.0) Verify the DEV EUI is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_DevEui_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_Devui();
                 })
              }
              if(data.Jira_ID === 'PAN-T363'){
                it('PAN-T363 (1.0) Verify the V field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_V_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_V();
                 })
              }
              if(data.Jira_ID === 'PAN-T364'){
                it('PAN-T364 (1.0) Verify the V1 Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_V1_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_V1();
                 })
              }
              if(data.Jira_ID === 'PAN-T365'){
                it('PAN-T365 (1.0) Verify the L STATE appears and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_L_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_LState();
                 })
              }
              if(data.Jira_ID === 'PAN-T366'){
                it('PAN-T366 (1.0) Verify the RQ field appears and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_RQ_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_RQ_State();
                 })
              }
              if(data.Jira_ID === 'PAN-T367'){
                it('PAN-T367 (1.0) Verify the LD1 Field appears and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_LD1_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_LD1_State();
                 })
              }
              if(data.Jira_ID === 'PAN-T368'){
                it('PAN-T368 (1.0) Verify the LP Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_LP_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_LP_State();
                 })
              }
              if(data.Jira_ID === 'PAN-T369'){
                it('PAN-T369 (1.0) Verify the LT ON Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_LT_ON_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_LT_ON();
                 })
              }
              if(data.Jira_ID === 'PAN-T370'){
                it('PAN-T370 (1.0) Verify the LT OFF field appears and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_LT_OFF_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_LT_Off();
                 })
              }
              if(data.Jira_ID === 'PAN-T371'){
                it('PAN-T371 (1.0) Verify the VT SWELL Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_V_SWELL_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_V_swell();
                 })
              }
              if(data.Jira_ID === 'PAN-T372'){
                
                it('PAN-T372 (1.0) Verify the VT SAG Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_V_SAG_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_V_sag();
                 })
              }
              if(data.Jira_ID === 'PAN-T373'){
            
                it('PAN-T373 (1.0) Verify VERSION Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_Version_Appears();
                        Menu_Setup_Message_Page.Validate_sorting_Version();
                 })
              }
              if(data.Jira_ID === 'PAN-T374'){
            
                it('PAN-T374 (1.0) Verify CREATED DATE Field is shown and can be sorted' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.CreatedDate_appers();
                        Menu_Setup_Message_Page.Validate_sorting_CreatedDate();
                 })
              }
              if(data.Jira_ID === 'PAN-T375'){
              it('PAN-T375 (1.0) Verify there is a Search Bar present' , function(){    
                        homePage.click_Home_Btn();
                        Menu_Setup_Message_Page.click_Menu_SetupBtn();
                        Menu_Setup_Message_Page.Presenceof_MessageTab();
                        Menu_Setup_Message_Page.Verify_SearchAppears();
                 })
              }
              if(data.Jira_ID === 'PAN-T380'){
                it('PAN-T380 (1.0) Verify the Refresh button appears' , function(){    
                          homePage.click_Home_Btn();
                          Menu_Setup_Message_Page.click_Menu_SetupBtn();
                          Menu_Setup_Message_Page.Presenceof_MessageTab();
                          Menu_Setup_Message_Page.Verify_RefreshBtnAppears();
                   })
                }
                if(data.Jira_ID === 'PAN-T377'){
                    it('PAN-T377 (1.0) Verify the Items Per Page label appears' , function(){    
                              homePage.click_Home_Btn();
                              Menu_Setup_Message_Page.click_Menu_SetupBtn();
                              Menu_Setup_Message_Page.Presenceof_MessageTab();
                              Menu_Setup_Message_Page.Verify_ItemPerPageAppears();
                       })
                    }
                    if(data.Jira_ID === 'PAN-T379'){
                        it('PAN-T379 (1.0) Verify the Previous and Next Page arrow functions correctly' , function(){    
                                  homePage.click_Home_Btn();
                                  Menu_Setup_Message_Page.click_Menu_SetupBtn();
                                  Menu_Setup_Message_Page.Presenceof_MessageTab();
                                  Menu_Setup_Message_Page.SetPagesValue_5();
                                  Menu_Setup_Message_Page.clickNext_Arrow();
                                  Menu_Setup_Message_Page.clickPre_Arrow();
                           })
                    }
                    if(data.Jira_ID === 'PAN-T376'){
                        it('PAN-T376 (1.0) Verify searching will filter the text based on search criteria' , function(){    
                              homePage.click_Home_Btn();
                              Menu_Setup_Message_Page.click_Menu_SetupBtn();
                              Menu_Setup_Message_Page.Presenceof_MessageTab();
                              Menu_Setup_Message_Page.VerifySearch_Messages();
                           })
                        }
                        if(data.Jira_ID === 'PAN-T381'){
                            it('PAN-T381 (1.0) Verify clicking the refresh button actually refreshes the page' , function(){    
                                  homePage.click_Home_Btn();
                                  Menu_Setup_Message_Page.click_Menu_SetupBtn();
                                  Menu_Setup_Message_Page.Presenceof_MessageTab();
                                  Menu_Setup_Message_Page.Verify_NewMessage_Appears();
                               })
                            }
                            if(data.Jira_ID === 'PAN-T382'){
                                it('PAN-T382 (1.0) Verify the page refreshes every 15 seconds' , function(){    
                                      homePage.click_Home_Btn();
                                      Menu_Setup_Message_Page.click_Menu_SetupBtn();
                                      Menu_Setup_Message_Page.Presenceof_MessageTab();
                                      Menu_Setup_Message_Page.Verify_PageRefresh_15Seconds();
                                   })
                                }
                            if(data.Jira_ID === 'PAN-T378'){
                                    it('PAN-T378 (1.0) Verify adjusting the Items per page correctly reflects on the page' , function(){    
                                          homePage.click_Home_Btn();
                                          Menu_Setup_Message_Page.click_Menu_SetupBtn();
                                          Menu_Setup_Message_Page.Presenceof_MessageTab();
                                          Menu_Setup_Message_Page.Checking_PagainationCount();
                                       })
                                    }
                            if(data.Jira_ID === 'PAN-T420'){
                                        it('PAN-T420 (1.0) Verify there is a Message Stream tab in the Setup Screen' , function(){    
                                          homePage.click_Home_Btn();
                                          Menu_Setup_Message_Page.click_Menu_SetupBtn();
                                          Menu_Setup_Message_Page.Presenceof_MessageTab();
                                          Menu_Setup_Message_Page.Validate_sorting_V_swell1();
                                         })
                            }
        }
    })
})

