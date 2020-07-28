(  function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 30000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.dropDownActions = require('./commons/dropDownActions.js');
    global.commons.mouseActions = require('./commons/mouseActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.commons.verifyActions = require('./commons/verifyActions.js');
    global.commons.fatchingTextActions = require('./commons/fatchingTextActions.js');
    global.commons.popUpActions = require('./commons/popUpActions.js');
    global.commons.testingDisplayedActions = require('./commons/testingDisplayedActions.js');
 

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    global.utils.readingWritingExcel = require('./utils/readingWritingExcel.js');
    
    global.POMs = {};
    global.POMs.LogIn_Page = require('./POMs/LogIn_Page.js');
    global.POMs.Home_Page = require('./POMs/Home_Page.js');
    
    global.POMs.Menu_Node_Page = require('./POMs/Menu_Node_Page.js');
    global.POMs.Menu_Node_Summary_Page = require('./POMs/Menu_Node_Summary_Page.js');
    global.POMs.Menu_Node_Status_Page = require('./POMs/Menu_Node_Status_Page.js');
    global.POMs.Menu_Node_Settings_Page = require('./POMs/Menu_Node_Settings_Page.js');

    global.POMs.Menu_Group_Page = require('./POMs/Menu_Group_Page.js');
    global.POMs.Menu_Group_Settings_Page = require('./POMs/Menu_Group_Settings_Page.js');
    global.POMs.Menu_SetUp_MsgStream_Page = require('./POMs/Menu_SetUp_MsgStream_Page.js');

    global.POMs.Menu_Zone_Page = require('./POMs/Menu_Zone_Page.js');
    global.POMs.Menu_Zone_Settings_Page = require('./POMs/Menu_Zone_Settings_Page.js');

    global.POMs.Menu_FootFall_Page = require('./POMs/Menu_FootFall_Page.js');

    global.POMs.Menu_Admin_Page = require('./POMs/Menu_Admin_Page.js');

    global.POMs.Admin_User_Page = require('./POMs/Admin_User_Page.js');
    global.POMs.Admin_Nodes_Page = require('./POMs/Admin_Nodes_Page.js');
    global.POMs.Admin_Group_Page = require('./POMs/Admin_Group_Page.js');
    global.POMs.Admin_Zones_Page = require('./POMs/Admin_Zones_Page.js');
    global.POMs.Admin_Schedules_Page = require('./POMs/Admin_Schedules_Page.js');
    global.POMs.Admin_Thresholds_Page = require('./POMs/Admin_Thresholds_Page.js');

}
());
