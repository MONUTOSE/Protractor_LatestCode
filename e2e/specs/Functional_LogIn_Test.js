var textData_Json = require('../resources/testData.json');
var excelData = require('../utils/readingWritingExcel.js');
var hotkeys = require('protractor-hotkeys');
var Request = require("request");

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
var Menu_SetUp_MsgStream_Page = new POMs.Menu_SetUp_MsgStream_Page();
var buttonActions = new commons.buttonActions();
var verifyActions = new commons.verifyActions();
var waitActions = new commons.waitActions();
var access_token1 = null;

var TEST_DATA = excelData.convertExcel_ToJSON ('./resources/DataForProtractor.xlsx','LogIn_TestCases');
describe('SecondDrop_Module : LogIn_Page_Validation - ' , function(){
     beforeAll(function(){
        browser.sleep(5000);
        homePage.clickOn_SignOut_Btn();
        browser.sleep(7000);
    })
    TEST_DATA.forEach(function(data){
         
        if(data.Status === 'Yes'){
            if( data.Jira_ID === 'PAN-T577' ){
                it('PAN-T577 (1.0) Verify Username field is present' , function(){
                   loginPage.verifyVisibility_UserNameField(data.LogIn_Data);
                }); 
            }
            if( data.Jira_ID === 'PAN-T578' ){
                it('PAN-T578 (1.0) Verify Password Field is present' , function(){
                    loginPage.verifyVisibility_PasswordField(data.LogIn_Data);
                }); 
            }
            if( data.Jira_ID === 'PAN-T579' ){
                it('PAN-T579 (1.0) Verify Login Button appears' , function(){
                    loginPage.verifyVisibility_LogInBtn(data.LogIn_Data);
                }); 
            }
            if( data.Jira_ID === 'PAN-T358' ){
                it('PAN-T358 (1.0) Verify a user cannot login with an invalid username' , function(){
                    loginPage.enter_Username_Keyword(textData_Json.LoginCredentials.Wrong_UserName);
                    loginPage.enter_Password_Keyword(textData_Json.LoginCredentials.Password)
                    loginPage.click_LogIn_Btn();
                    loginPage.verify_Visibility_WrongData(data.LogIn_Data);
                }); 
            }
            if( data.Jira_ID === 'PAN-T359' ){
                it('PAN-T359 (1.0) Verify a user cannot login with an invalid password' , function(){
                    loginPage.enter_Username_Keyword(textData_Json.LoginCredentials.Useranme)
                    loginPage.enter_Password_Keyword(textData_Json.LoginCredentials.Wrong_Password)
                    loginPage.click_LogIn_Btn();
                    loginPage.verify_Visibility_WrongData(data.LogIn_Data);
                }); 
            }
       }
    })
})
