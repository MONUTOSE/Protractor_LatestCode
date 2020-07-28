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
    var mouseActions = new commons.mouseActions();

    var User_Column = objLocator.findLocator(objRepo.Menu.User_Column);
    var User_FirstName_Column = objLocator.findLocator(objRepo.Menu.User_FirstName);
    var User_FirstName_List = objLocator.findLocator(objRepo.Menu.User_FirstName_List);
    var User_LastName_Column = objLocator.findLocator(objRepo.Menu.User_LastName);
    var User_LastName_List = objLocator.findLocator(objRepo.Menu.User_LastName_List);
    var User_Type = objLocator.findLocator(objRepo.Menu.User_Type);
    var User_Type_List = objLocator.findLocator(objRepo.Menu.User_Type_List);
    var User_Email = objLocator.findLocator(objRepo.Menu.User_Email);
    var User_Email_List = objLocator.findLocator(objRepo.Menu.User_Email_List);
    
    var UserPopup_Title_EditUser = objLocator.findLocator(objRepo_n.Users.UserPopup_Title_EditUser);
    var DeletePopup_title = objLocator.findLocator(objRepo_n.Users.DeletePopup_title);
    var DeletePopup_YesBtn = objLocator.findLocator(objRepo_n.Users.DeletePopup_YesBtn);
    var User_SearchBar = objLocator.findLocator(objRepo_n.Users.User_SearchBar);
    var User_AddBtn = objLocator.findLocator(objRepo_n.Users.User_AddBtn);
    var AddUserPopup_title = objLocator.findLocator(objRepo_n.Users.AddUserPopup_title);
    var AddUserPopup_crossBtn = objLocator.findLocator(objRepo_n.Users.AddUserPopup_crossBtn);
    var User_email = objLocator.findLocator(objRepo_n.Users.User_email);
    var User_Role = objLocator.findLocator(objRepo_n.Users.User_Role);
    var AllUser_Roles = objLocator.findLocator_ElementAll(objRepo_n.Users.AllUser_Roles);
    var APIAccess_checkbox = objLocator.findLocator_ElementAll(objRepo_n.Users.APIAccess_checkbox);
    var User_FirstName = objLocator.findLocator_ElementAll(objRepo_n.Users.User_FirstName);
    var User_LastName = objLocator.findLocator_ElementAll(objRepo_n.Users.User_LastName);
    var User_Password = objLocator.findLocator_ElementAll(objRepo_n.Users.User_Password);
    var User_ConfirmPwd = objLocator.findLocator_ElementAll(objRepo_n.Users.User_ConfirmPwd);
    var Select_customer = objLocator.findLocator(objRepo_n.Users.Select_customer);
    var All_customers = objLocator.findLocator_ElementAll(objRepo_n.Users.All_customers);
    var Save_Btn = objLocator.findLocator_ElementAll(objRepo_n.Users.Save_Btn);
    var Notification_Msg = objLocator.findLocator_ElementAll(objRepo_n.Users.Notification_Msg);
    var AllUsers_Email = objLocator.findLocator_ElementAll(objRepo_n.Users.AllUsers_Email);
    var Page = objLocator.findLocator_ElementAll(objRepo_n.Users.Page);
    var All_Pages = objLocator.findLocator_ElementAll(objRepo_n.Users.All_Pages);
    var Next_Arrow = objLocator.findLocator_ElementAll(objRepo_n.Users.Next_Arrow);
    var Name_Header = objLocator.findLocator_ElementAll(objRepo_n.Users.Name_Header);
    var AllNames = objLocator.findLocator_ElementAll(objRepo_n.Users.AllNames);
    var All_Pages_5 = objLocator.findLocator_ElementAll(objRepo_n.Users.All_Pages_5);
    var Pre_Arrow = objLocator.findLocator_ElementAll(objRepo_n.Users.Pre_Arrow);
    var SelectRole_User = objLocator.findLocator(objRepo_n.Users.SelectRole_User);
    var AllUserRoles_UnderListing = objLocator.findLocator_ElementAll(objRepo_n.Users.AllUserRoles_UnderListing);
    var Next_Button = objLocator.findLocator(objRepo_n.Users.Next_Button);
    var isUberUser = objLocator.findLocator(objRepo_n.Users.isUberUser);
 
    this.click_User_SubMenu = function () {
        buttonActions.click(User_Column);
        browser.sleep(2000);
        return this;
    };
    this.verifyVisibility_UserFirstNames = function(textOfColumn){
        waitActions.wait(3000)
        verifyActions.isElementDisplayed(User_FirstName_Column);
        User_FirstName_Column.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresence_FirstName = function(){
        for(var i =0; i<=User_FirstName_List.length; i++){
            verifyActions.isElementDisplayed(User_FirstName_List[i]);
        }
    }
    this.verifyVisibility_UserLastNames = function(textOfColumn){
        waitActions.wait(4000)
        verifyActions.isElementDisplayed(User_LastName_Column);
        User_LastName_Column.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresence_LastName = function(){
        for(var i =0; i<=User_LastName_List.length; i++){
            verifyActions.isElementDisplayed(User_LastName_List[i]);
        }
    }
    this.verifyVisibility_UserTypes = function(textOfColumn){
        verifyActions.isElementDisplayed(User_Type);
        User_Type.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresence_UserTypes = function(){
        for(var i =0; i<=User_Type_List.length; i++){
            verifyActions.isElementDisplayed(User_Type_List[i]);
        }
    }
    this.verifyVisibility_UserEmails = function(textOfColumn){
        verifyActions.isElementDisplayed(User_Email);
        User_Email.getText().then(function(text){
            expect(text).toBe(textOfColumn);
        })
    }
    this.verifyPresence_Emails = function(){
        for(var i =0; i<=User_Email_List.length; i++){
            verifyActions.isElementDisplayed(User_Email_List[i]);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    this.click_User_SubMenuButton = function () {
        buttonActions.click(User_Column);  
        waitActions.wait(4000)
     };
    this.WaitTillAddButtonAppears= function ()
    {        
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(User_AddBtn), 5000);       
    }
     this.click_on_UserName = function(){
       element.all(By.xpath("//mat-cell/parent::mat-row/mat-cell[1]")).first().click();
       waitActions.wait(4000);
    }
     this.verifyVisibility_EditUserTitle = function(){
         verifyActions.isElementDisplayed(UserPopup_Title_EditUser);
     }
    this.click_on_TrashIcon = function(){
        element(By.xpath("//mat-cell/parent::mat-row/mat-cell[6]")).click();
        waitActions.wait(4000)
       }
     this.verifyVisibility_TrashPopup_Title = function(){
         verifyActions.isElementDisplayed(DeletePopup_title);
     }
     this.click_DeleteUser_YesBtn = function () {
         buttonActions.click(DeletePopup_YesBtn);
         waitActions.wait(2000)
         return this;
     };
     this.verifyVisibility_SearchBar = function(){
         verifyActions.isElementDisplayed(User_SearchBar);
     }
     this.verifyVisibility_AddBtn = function(){
         verifyActions.isElementDisplayed(User_AddBtn);
     }
     this.click_AddBtn = function () {
         buttonActions.click(User_AddBtn);
         waitActions.wait(4000)
         return this;
     };
     this.verifyVisibility_AddUserTitle = function(){
         verifyActions.isElementDisplayed(AddUserPopup_title);
     }
     
     this.click_CrossBtn = function () {
         buttonActions.click(AddUserPopup_crossBtn);
         waitActions.wait(3000);
         return this;
     };
     this.WaiTillPresenceOf = function () {
         var until = protractor.ExpectedConditions;
         return browser.wait(until.presenceOf(User_AddBtn), 100000);
     };
     this.enter_UserEmail = function (value) {
         inputBoxActions.type(User_email, value);
         waitActions.wait(4000);
         return this;
     };
     this.enter_FirstName = function (value) {
         inputBoxActions.type(User_FirstName, value);
         return this;
     };
     this.enter_LastName = function (value) {
         inputBoxActions.type(User_LastName, value);
         waitActions.wait(2000)
         return this;
     };
     this.enter_Password = function (value) {
         inputBoxActions.type(User_Password, value);
         return this;
     };
     this.enter_ConfirmPsw = function (value) {
         inputBoxActions.type(User_ConfirmPwd, value);
         return this;
     };
     this.click_DD_SelectCustomer = function () {
         buttonActions.click(Select_customer);
     };
     this.Select_FirstCustomer= function(){
     All_customers.first().click();
     hotkeys.trigger('esc');
    }
     this.VerfiyButtonDisabled =  function (){
         expect(Save_Btn.getAttribute('ng-reflect-disabled')).toEqual(['true']);
     } 
    /////////////////////////////////////////////////////////////////////////////////////
   this.validate_Notifcationmsg = function (){
      expect(Notification_Msg.getText()).toEqual(['Must be at least 6 characters']);
   }
   this.click_SaveBtn = function () {
      buttonActions.click(Save_Btn);
      waitActions.wait(5000)
      return this;
   };
   this.click_PageBtn = function () {
      buttonActions.click(Page);
      buttonActions.click(All_Pages);
      waitActions.wait(5000)
   };
   this.SetPagesValue_5 = function () {
      buttonActions.click(Page);
      buttonActions.click(All_Pages_5);
      waitActions.wait(6000)
   };
    this.Validate_UserAdded =  function (user){
      element.all(by.xpath("//mat-cell//parent::mat-row/mat-cell[4]")).getText().then(function(itemList) {
      expect(itemList).toContain(user);
    });
   }
    this.clickNext_Arrow =  function(){
        try{
           if(Next_Arrow.isEnabled()){
                buttonActions.click(Next_Arrow);
                browser.sleep(4000)
                verifyActions.isElementDisplayed(Name_Header);
                for(var i =0; i<=AllNames.length; i++)
                 {
                    verifyActions.isElementDisplayed(AllNames[i]);
                 }
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
                browser.sleep(4000)
                verifyActions.isElementDisplayed(Name_Header);
                for(var i =0; i<=AllNames.length; i++)
                 {
                    verifyActions.isElementDisplayed(AllNames[i]);
                 }
             }
        }
       catch (err) {
          console.log('Pre Button is disabled');
        }
    }
    this.Validate_UserRolesInList =  function (Users){
       element.all(by.xpath("//div[@class='cdk-overlay-pane']/descendant::mat-option")).each(function(itemList) {
        itemList.getText().then(function(text){
         expect(Users).toContain(text)
        })
     });
    }
    this.SendValues_intoSearch =  function(value){
     verifyActions.isElementDisplayed(User_SearchBar);
     inputBoxActions.type(User_SearchBar, value);
     waitActions.wait(4000)
    }
    this.Verify_searchValue =  function (text){
       element.all(by.xpath("//mat-row//mat-cell")).getText().then(function(itemList)
        {
       expect(itemList).toContain(text);
     });
    }
    /////////////////////////////////////////////////////////////////////////////////
    this.VerfiyNextButtonDisabled =  function (){
        expect(Next_Button.getAttribute('ng-reflect-disabled')).toEqual('true');
    }
    this.click_UberUser_checkbox = function () {
        buttonActions.click(isUberUser);
        waitActions.wait(3000)
        return this;
    };
    this.ClickNext_Btn = function(){
        buttonActions.click(Next_Button);
        waitActions.wait(7000)
    }
    this.verifyVisibility_UserTypeUberUser = function(){
        verifyActions.isElementDisplayed(isUberUser);
    }
    this.Click_UserRole =  function(){
         buttonActions.click(SelectRole_User)
         waitActions.wait(3000)
    }
    this.Validate_UserRolesUnderListing =  function (Users)
        {
            AllUserRoles_UnderListing.each(function(itemList) {
            itemList.getText().then(function(text){
            })
         });
    }
     this.VerifySearch_Users =  function(value)
    {
        AllNames.first().getText().then(function(text){
            User_SearchBar.sendKeys(text);
            waitActions.wait(4000)
            AllNames.getText().then(function(itemList)
            {
                expect(itemList).toContain(text);
              });
        })
    }
}