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

  var Ubicquia_NodeSubNmae_Text = objLocator.findLocator(objRepo.Menu_Node.Node_name);
  var Node_SubTab = objLocator.findLocator(objRepo_n.Nodes.Node_SubTab);
  var NodeSubTab_Nodename = objLocator.findLocator(objRepo_n.Nodes.NodeSubTab_Nodename);
  var NodeSubTab_NodeID = objLocator.findLocator(objRepo_n.Nodes.NodeSubTab_NodeID);
  var Node_column = objLocator.findLocator(objRepo_n.Nodes.Node_column);
  var All_Nodes_ID = objLocator.findLocator_ElementAll(objRepo_n.Nodes.All_Nodes_ID);
  var All_Nodes_Name = objLocator.findLocator_ElementAll(objRepo_n.Nodes.All_Nodes_Name);

  var Search_bar = objLocator.findLocator(objRepo_n.Admin_Node.Search_bar);
  var Yes_Btn = objLocator.findLocator(objRepo_n.Admin_Node.Yes_Btn);
  var EditNode_cancel = objLocator.findLocator(objRepo_n.Admin_Node.EditNode_cancel);
  var Edit_Node = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.Edit_Node);
  var Add_Btn = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.Add_Btn);
  var AddNodePop_Name = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AddNodePop_Name);
  var Active_Header = objLocator.findLocator(objRepo_n.Admin_Node.Active_Header);
  var AllActive_checkbox = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllActive_checkbox);
  var AddNodePop_ID = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_ID);
  var AddNodePop_PoleType = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_PoleType);
  var AddNodePop_Save = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_Save);
  var AddNodePop_FID = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_FID);
  var AddNodePop_FT = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_FT);
  var AddNodePop_Latitude = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_Latitude);
  var AddNodePop_Longitude = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_Longitude);
  var AddNodePop_GPSCheckB = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_GPSCheckB);
  var AddNodePop_ActiveCheckB = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_ActiveCheckB);
  var AddNodePop_GPSpOP_Text = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_GPSpOP_Text);
  var AddNodePop_GPSpOP_MC = objLocator.findLocator(objRepo_n.Admin_Node.AddNodePop_GPSpOP_MC);
  var Page_dd = objLocator.findLocator(objRepo_n.Admin_Node.Page_dd);
  var PageValue_10 = objLocator.findLocator(objRepo_n.Admin_Node.PageValue_10);  
  var Next_Arrow = objLocator.findLocator(objRepo_n.Admin_Node.Next_Arrow);  
  var Pre_Arrow = objLocator.findLocator(objRepo_n.Admin_Node.Pre_Arrow);  
  var Popup_ActiveCheckbox = objLocator.findLocator(objRepo_n.Admin_Node.Popup_ActiveCheckbox);
  var Groub_Subtab12 = objLocator.findLocator(objRepo_n.Admin_Node.Groub_Subtab12);
  var Groub_AddBtn = objLocator.findLocator(objRepo_n.Admin_Node.Groub_AddBtn);
  var GroupPop_Name = objLocator.findLocator(objRepo_n.Admin_Node.GroupPop_Name);
  var GroupPop_Description = objLocator.findLocator(objRepo_n.Admin_Node.GroupPop_Description);
  var GroupPop_NextBtn = objLocator.findLocator(objRepo_n.Admin_Node.GroupPop_NextBtn);
  var Menu_Node = objLocator.findLocator(objRepo_n.Admin_Node.Menu_Node);
  var AllOTA_Btn = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllOTA_Btn);
  var AllEdit_Btn = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllEdit_Btn);
  var AllNode_list = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllNode_list);
  var AllNode_IDS = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllNode_IDS);
  var Active_checkbox_secondRow = objLocator.findLocator(objRepo_n.Admin_Node.Active_checkbox_secondRow);
  var AllNode_SecondRow_list = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.AllNode_SecondRow_list);
  var MenuNode_AllNode_list = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.MenuNode_AllNode_list);
 
  var firstcheckbox = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.firstcheckbox);
  var Firstcheckbox_1 = objLocator.findLocator_ElementAll(objRepo_n.Admin_Node.Firstcheckbox_1);
  var menu_Admin = objLocator.findLocator(objRepo_n.Admin_Node.Admin);
  var PageValue_50 = objLocator.findLocator(objRepo_n.Admin_Node.PageValue_50);

  var Admin_Node_Status = objLocator.findLocator(objRepo.Admin_Nodes.Admin_Node_Status);

  
  this.verify_Node_name = function (value) {
      expect(Ubicquia_NodeSubNmae_Text.getText()).toEqual(value);
      return this;
  };
  this.click_ToDeactivate_Node_Verify_Deactivation = function(){
    Admin_Node_Status.getAttribute('class').then(function(classText){
      if(classText === "mat-checkbox mat-primary ng-untouched ng-pristine ng-valid mat-checkbox-checked"){
        buttonActions.click(Admin_Node_Status);
      }
    })
    browser.sleep(5000);
    Admin_Node_Status.getAttribute('class').then(function(text){
      expect(text).toBe("mat-checkbox mat-primary ng-untouched ng-pristine ng-valid");
    })
  }
  ///////////////////////////////////////////
  this.wait_Till_Node_Subtab_visibility = function()
  {
      waitActions.waitForElementInPollingEvery(Node_SubTab);
  }
  this.click_Nodes_SubTab = function () {
      buttonActions.click(Node_SubTab)
      waitActions.wait(5000)
  };
  this.waittil_Node_Column_appears =function()
  {
   waitActions.waitForElementInPollingEvery(Node_column);
  }
  this.verify_NodeColumn_Availability  = function () {
      verifyActions.isElementDisplayed(NodeSubTab_Nodename);
      return this;
  };
  this.verify_NodeID_Availability  = function () {
      verifyActions.isElementDisplayed(NodeSubTab_NodeID);
      return this;
  };
  this.gettheAdded_NodesName = function(){
      All_Nodes_Name.getText().then(function(text){
      });
    };
    this.verifyVisibility_Nodes = function(){
        for(var i =0;i<=All_Nodes_Name.length;i++){
          verifyActions.isElementDisplayed(All_Nodes_Name[i])
        }
    }
    this.gettheAdded_Nodes_ID = function(){
      All_Nodes_ID.getText().then(function(text){
          console.log("Nodes id are "+text)
          
      });
    };
//////////////////////////////////////////////////////////////////////////////////////////////

    this.verifyVisibility_SearchBar = function()
    {
      verifyActions.isElementDisplayed(Search_bar);
    }
    this.click_on_OTABtn_1 = function(value){
      AllOTA_Btn.first().click();
      waitActions.wait(4000)
   } 
    this.verifyVisibility_PopupYesBtn = function()
    {
      verifyActions.isElementDisplayed(Yes_Btn);
    }
     this.click_on_EditBtn_1 = function(value){
      AllEdit_Btn.first().click();
      waitActions.wait(4000)
   } 
   this.CancelWithout_Saving = function(value){
    AllNode_list.first().getText().then(function(Nodename1){
    AllEdit_Btn.first().click();
    waitActions.wait(3000)
    verifyActions.isElementDisplayed(EditNode_cancel);
    inputBoxActions.type(AddNodePop_Name, value);
    waitActions.wait(3000)
    buttonActions.click(EditNode_cancel);
    waitActions.wait(3000)
    AllNode_list.first().getText().then(function(Nodename2){
    expect(Nodename1).toBe(Nodename2);
    })
    });
 } 
   this.Edit_NodeName = function(value){
    AllNode_list.first().getText().then(function(Nodename1){
    AllNode_list.first().click();
    waitActions.wait(3000)
    verifyActions.isElementDisplayed(EditNode_cancel);
    inputBoxActions.type(AddNodePop_Name, value);
    waitActions.wait(3000)
    AddNodePop_Name.getAttribute("ng-reflect-model").then(function(Nodename2){
    expect([value]).toEqual(Nodename2);
    })
    });
 }  
 this.Edit_Node_PoleType = function(poletype_before){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  verifyActions.isElementDisplayed(AddNodePop_PoleType);
  inputBoxActions.type(AddNodePop_PoleType, poletype_before);
  waitActions.wait(1000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  AllNode_list.first().click();
  AddNodePop_PoleType.getAttribute("ng-reflect-model").then(function(poletype_after){
  expect(poletype_after).toEqual(poletype_before);
  })
  });
}  
this.Edit_Node_FixtureID = function(FixtureID_before){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  verifyActions.isElementDisplayed(AddNodePop_FID);
  inputBoxActions.type(AddNodePop_FID, FixtureID_before);
  waitActions.wait(1000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  AllNode_list.first().click();
  AddNodePop_FID.getAttribute("ng-reflect-model").then(function(FixtureID_AFTER){
  expect(FixtureID_AFTER).toEqual(''+FixtureID_before+'');
  })
  });
}  
this.Edit_Node_FixtureType = function(FixtureType_before){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  verifyActions.isElementDisplayed(AddNodePop_FT);
  inputBoxActions.type(AddNodePop_FT, FixtureType_before);
  waitActions.wait(1000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  AllNode_list.first().click();
  AddNodePop_FT.getAttribute("ng-reflect-model").then(function(FixtureType_after){
  expect(FixtureType_after).toEqual(''+FixtureType_before+'');
  })
  });
}  
this.Edit_Node_Maintenance = function(Maintenance_before){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  inputBoxActions.type(AddNodePop_GPSpOP_MC, Maintenance_before);
  waitActions.wait(1000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  AllNode_list.first().click();
  AddNodePop_GPSpOP_MC.getAttribute("ng-reflect-model").then(function(Maintenance_after){
  expect(Maintenance_after).toEqual(''+Maintenance_before+'');
  })
  });
}  

// this.Edit_Node_Name = function(NodeName_before){
//   AllNode_list.first().getText().then(function(Nodename1){
//   AllNode_list.first().click();
//   waitActions.wait(3000)
//   verifyActions.isElementDisplayed(EditNode_cancel);
//   inputBoxActions.type(AddNodePop_Name, NodeName_before);
//   waitActions.wait(1000)
//   buttonActions.click(AddNodePop_Save);
//   waitActions.wait(7000)
//   AllNode_list.first().click();
//   AddNodePop_Name.getAttribute("ng-reflect-model").then(function(NodeName_after){
//   expect(NodeName_after).toEqual([''+NodeName_before+'']);
//   })
//   });
// }  
this.Edit_Node_Name = function(NodeName_before){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  inputBoxActions.type(AddNodePop_Name, NodeName_before);
  waitActions.wait(1000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  buttonActions.click(Page_dd);
  waitActions.wait(2000)
  buttonActions.click(PageValue_50);
  waitActions.wait(6000)
 // AllNode_list.first().click();
  AllNode_list.getText().then(function(itemList) {
    expect(itemList).toContain(NodeName_before);
         });
  });
}  
this.Inactive_not_GroupList_22 = function(Name,Description){
  AllNode_list.first().getText().then(function(Nodename1){
  AllNode_list.first().click();
  waitActions.wait(3000)
  verifyActions.isElementDisplayed(EditNode_cancel);
  buttonActions.click(Popup_ActiveCheckbox)
  waitActions.wait(3000)
  buttonActions.click(AddNodePop_Save);
  waitActions.wait(7000)
  buttonActions.click(Groub_Subtab12)
  waitActions.wait(5000)
  buttonActions.click(Groub_AddBtn)
  waitActions.wait(5000)
  inputBoxActions.type(GroupPop_Name, Name);
  inputBoxActions.type(GroupPop_Description, Description);
  waitActions.wait(2000)
  buttonActions.click(GroupPop_NextBtn)
  waitActions.wait(5000)
  AllNode_IDS.getText().then(function(itemList) {
  expect(itemList).not.toContain(Nodename1);
       });
  });
}  
this.Inactive_not_MenuNodeList_22 = function(){
   AllNode_SecondRow_list.first().getText().then(function(Nodename1){
   Active_checkbox_secondRow.click();
   waitActions.wait(3000)
   buttonActions.click(Menu_Node)
   waitActions.wait(5000)
   MenuNode_AllNode_list.getText().then(function(itemList) {
         expect(itemList).not.toContain(Nodename1);
       });
  });
}
     this.verifyVisibility_EditNodePop = function()
     {
       verifyActions.isElementDisplayed(EditNode_cancel);
     }

     this.verifyVisibility_AllEditBtn = function(){
        for(var i =0;i<=Edit_Node.length;i++){
          verifyActions.isElementDisplayed(Edit_Node[i])
        }
    }
    this.click_AddBtn = function () {
        buttonActions.click(Add_Btn);
        waitActions.wait(5000)
        return this;
    };
    this.verifyVisibility_AddButton = function()
     {
       verifyActions.isElementDisplayed(Add_Btn);
     }

     this.enter_NodeName = function (value) {
        inputBoxActions.type(AddNodePop_Name, value);
        return this;
    };                                                 
    this.validate_NOdeName = function (expected)
    {
      AddNodePop_Name.getAttribute("ng-reflect-model").then(function (actual) {
            console.log(actual);
            expect(actual).toEqual(expected);
    })
    } 
    this.click_CancelBtn = function () {
         buttonActions.click(EditNode_cancel);
        waitActions.wait(3000)
        return this;
    };
    this.verifyNodetext =  function (oldtext, updated)
    {
        element(by.xpath("//mat-cell[contains(text(),'"+ oldtext +"')]/parent::mat-row/mat-cell[1]")).getText().then( function(new_text){
        expect(updated).not.toBe(new_text);
    });
    }
    this.verifyVisibility_ActiveCheckBoxs = function (){
        verifyActions.isElementDisplayed(Active_Header);
        for(var i=0;i<=AllActive_checkbox.length;i++){
            verifyActions.isElementDisplayed(AllActive_checkbox[i]);
        }    
    }
    this.click_on_Node = function(value){
        element(By.xpath("//mat-cell[contains(text(),'"+ value +"')]/parent::mat-row/mat-cell[1]")).click();
        waitActions.wait(4000)
     } 
     this.click_on_Node_1 = function(value){
      AllNode_list.first().click();
      waitActions.wait(4000)
     } 
    this.validatetext = function (expected)
    {
        AddNodePop_Name.getAttribute("ng-reflect-value").then(function (actual) {
            expect(actual).toEqual(expected);
    })
    }
    this.verifyVisibility_PoleID = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_ID);
    }
    this.verifyVisibility_PoleType = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_PoleType);
    }
    this.enter_PoleType = function (value) {
        inputBoxActions.type(AddNodePop_PoleType, value);
        return this;
    };
    this.click_SaveBtn = function () {
        buttonActions.click(AddNodePop_Save);
        waitActions.wait(6000)
        return this;
   };
   this.validatePoleType = function (expected)
    {
        AddNodePop_PoleType.getAttribute("ng-reflect-model").then(function (actual) {
            console.log(actual);
            expect(actual).toEqual(expected);
    })
    } 
    this.verifyVisibility_FID = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_FID);
    }
    this.enter_FID = function (value) {
        inputBoxActions.type(AddNodePop_FID, value);
        return this;
    };
    this.validate_FID = function (expected)
    {
        AddNodePop_FID.getAttribute("ng-reflect-model").then(function (actual) {
            console.log(actual);
            expect(actual).toEqual(expected);
    })
    } 
    this.verifyVisibility_FT = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_FT);
    }
    this.enter_FT = function (value) {
        inputBoxActions.type(AddNodePop_FT, value);
        return this;
    };
    this.validate_FT = function (expected)
    {
        AddNodePop_FT.getAttribute("ng-reflect-model").then(function (actual) {
            console.log(actual);
            expect(actual).toEqual(expected);
    })
    } 
    this.verifyVisibility_Latitude = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_Latitude);
    }
    this.enter_Latitude = function (value) {
        inputBoxActions.type(AddNodePop_Latitude, value);
        return this;
    };
    this.verifyVisibility_Longitude = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_Longitude);
    }
    this.enter_Longitude = function (value) {
        inputBoxActions.type(AddNodePop_Longitude, value);
        return this;
    };    
    this.verifyVisibility_GPSCheckbox = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_GPSCheckB);
    }
    this.verifyVisibility_ActiveCheckbox = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_ActiveCheckB);
    }
    this.click_GPS = function () {
      buttonActions.click(AddNodePop_GPSCheckB);
      waitActions.wait(1000)
    };
    this.verifyVisibility_GPSPopup_appears = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_GPSpOP_Text);
    }
    this.clickGPS_ifunChecked= function(){
          AddNodePop_GPSCheckB.click();
    }
    this.click_GPS_Pop_YesBtn = function () {
      buttonActions.click(AddNodePop_GPSpOP_Text);
      waitActions.wait(1000)
    };
    this.LatitudeEnabled = function ()
    {
      verifyActions.isElementEnabled(AddNodePop_Latitude);
    }
    this.LongitudeEnabled = function ()
    {
      verifyActions.isElementEnabled(AddNodePop_Longitude);
    }
    this.verifyVisibility_MC = function()
    {
      verifyActions.isElementDisplayed(AddNodePop_GPSpOP_MC);
    }
    this.enter_MC = function (value) {
        inputBoxActions.type(AddNodePop_GPSpOP_MC, value);
        return this;
    };
    this.validate_MC = function (expected)
    {
      AddNodePop_GPSpOP_MC.getAttribute("ng-reflect-model").then(function (actual) {
            console.log(actual);
            expect(actual).toEqual(expected);
    })
    } 
    this.SetPagesValue_10 = function () 
    {
       buttonActions.click(Page_dd);
 
       buttonActions.click(PageValue_10);
       waitActions.wait(6000)
    };
    this.SendValues_intoSearch =  function(value)
    {
     verifyActions.isElementDisplayed(Search_bar);
     inputBoxActions.type(Search_bar, value);
     waitActions.wait(4000)
    }
    this.Verify_searchValue =  function (text)
    {
       element.all(by.xpath("//mat-row//mat-cell")).getText().then(function(itemList)
        {
       expect(itemList).toContain(text);
     });
    }
    this.VerifySearch_Nodes =  function()
    {
      AllNode_list.first().getText().then(function(text){
          Search_bar.sendKeys(text);
            waitActions.wait(4000)
            AllNode_list.getText().then(function(itemList)
            {
                expect(itemList).toContain(text);
              });
        })
    }
    this.clickNext_Arrow =  function()
    {
        try
        {
           if(Next_Arrow.isEnabled())
             {
                buttonActions.click(Next_Arrow);
                browser.sleep(3000)
            //    verifyActions.isElementDisplayed(Node_column);
                for(var i =0; i<=All_Nodes_Name.length; i++)
                 {
                    verifyActions.isElementDisplayed(All_Nodes_Name[i]);
                 }
             }
        }
       catch (err) 
        {
          console.log('Next Button is disabled');
        }
    }
    this.clickPre_Arrow =  function()
    {
        try
        {
           if(Pre_Arrow.isEnabled())
             {
                buttonActions.click(Pre_Arrow);
                browser.sleep(3000)
          //      verifyActions.isElementDisplayed(Node_column);
                for(var i =0; i<=All_Nodes_Name.length; i++)
                 {
                    verifyActions.isElementDisplayed(All_Nodes_Name[i]);
                 }
            }
        }
       catch (err) 
        {
          console.log('Pre Button is disabled');
        }
    }
    this.ClickonActiveCheckbox =  function()
    {
      buttonActions.click(Popup_ActiveCheckbox)
      waitActions.wait(2000)
    }
    this.ProceedToGroup = function(Name,Description)
    {
      buttonActions.click(Groub_Subtab12)
      waitActions.wait(5000)
      buttonActions.click(Groub_AddBtn)
      waitActions.wait(5000)
      inputBoxActions.type(GroupPop_Name, Name);
      inputBoxActions.type(GroupPop_Description, Description);
      waitActions.wait(2000)
      buttonActions.click(GroupPop_NextBtn)
      waitActions.wait(5000) 
    }
      this.Click_MenuNode =  function ()
      {
        buttonActions.click(Menu_Node)
        waitActions.wait(5000)
      }
 
      // this.ClickonFirstcheckbox = function ()
      // {
      //   firstcheckbox.isSelected().then(function(status){
      //     console.log(status)
      //     if(status){
      // //      firstcheckbox.first().click();
      //     }
      //     else{
      //    firstcheckbox.click();
      //     }
      //   })        
      // }
      this.Inactive_not_GroupList = function (Name,Description)
      {
        firstcheckbox.getAttribute('ng-reflect-model').then(function(status){
          const status1=""+status+""
          if(status1){
           firstcheckbox.click();
          }
          else{
          }
          AllNode_list.first().getText().then(function(Nodename1){
            waitActions.wait(3000)
            buttonActions.click(Groub_Subtab12)
            waitActions.wait(7000)
            buttonActions.click(Groub_AddBtn)
            waitActions.wait(5000)
            inputBoxActions.type(GroupPop_Name, Name);
            inputBoxActions.type(GroupPop_Description, Description);
            waitActions.wait(2000)
            buttonActions.click(GroupPop_NextBtn)
            waitActions.wait(5000)
            AllNode_IDS.getText().then(function(itemList){
            expect(itemList).not.toContain(Nodename1);
            waitActions.wait(2000)
            hotkeys.trigger('esc');
            waitActions.wait(2000)
            buttonActions.click(Node_SubTab)
            waitActions.wait(5000)
            Firstcheckbox_1.first().click();
            waitActions.wait(5000)
            })
          })
        })        
        
      }

      this.Inactive_not_MenuNodeList = function ()
      {
        firstcheckbox.getAttribute('ng-reflect-model').then(function(status){
          const status1=""+status+""
          if(status1){
           firstcheckbox.click();
          }
          else{
          }
          AllNode_list.first().getText().then(function(Nodename1){
            waitActions.wait(3000)
            buttonActions.click(Menu_Node)
            waitActions.wait(5000)
            MenuNode_AllNode_list.getText().then(function(itemList){
              expect(itemList).not.toContain(Nodename1);
              waitActions.wait(2000)
            buttonActions.click(menu_Admin)
            waitActions.wait(5000)
            buttonActions.click(Node_SubTab)
            waitActions.wait(5000)
            Firstcheckbox_1.first().click();
            waitActions.wait(5000)
            })
          })
        })        
      }

    //   this.Inactive_not_MenuNodeList = function(){
    //     AllNode_SecondRow_list.first().getText().then(function(Nodename1){
    //     Active_checkbox_secondRow.click();
    //     waitActions.wait(3000)
    //     buttonActions.click(Menu_Node)
    //     waitActions.wait(5000)
    //     MenuNode_AllNode_list.getText().then(function(itemList) {
    //           expect(itemList).not.toContain(Nodename1);
    //         });
    //    });
    //  }


}