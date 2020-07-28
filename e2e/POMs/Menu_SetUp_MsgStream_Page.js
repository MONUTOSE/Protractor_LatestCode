module.exports = function () {
  'use strict';
   
  var objRepo = require('../resources/objectRepository.json');
  var objRepo_n = require('../resources/objectRepository_N.json');
  var hotkeys = require('protractor-hotkeys');
  var until = protractor.ExpectedConditions;
  var objLocator = new utils.objectLocator();
  var inputBoxActions = new commons.inputBoxActions();
  var mouseActions = new commons.mouseActions();
  var buttonActions = new commons.buttonActions();
  var waitActions = new commons.waitActions();
  var fatchingTextActions = new commons.fatchingTextActions();
  var verifyActions = new commons.verifyActions();
  var displayedAction = new commons.testingDisplayedActions();
  
  var Setupbtn = objLocator.findLocator(objRepo_n.Setup_Message.Setupbtn);
  var MessageStream_Tab = objLocator.findLocator(objRepo_n.Setup_Message.MessageStream_Tab);
  var Dev_eui = objLocator.findLocator(objRepo_n.Setup_Message.Dev_eui);
  var All__dev_eui = objLocator.findLocator_ElementAll(objRepo_n.Setup_Message.All__dev_eui);
  var V = objLocator.findLocator(objRepo_n.Setup_Message.V);
  var V1 = objLocator.findLocator(objRepo_n.Setup_Message.V1);
  var L = objLocator.findLocator(objRepo_n.Setup_Message.L);
  var RQ = objLocator.findLocator(objRepo_n.Setup_Message.RQ);
  var LD1 = objLocator.findLocator(objRepo_n.Setup_Message.LD1);
  var LP = objLocator.findLocator(objRepo_n.Setup_Message.LP);
  var All_LP = objLocator.findLocator_ElementAll(objRepo_n.Setup_Message.All_LP);
  var LT_ON = objLocator.findLocator(objRepo_n.Setup_Message.LT_ON);
  var LT_OFF = objLocator.findLocator(objRepo_n.Setup_Message.LT_OFF);
  var V_SAG = objLocator.findLocator(objRepo_n.Setup_Message.V_SAG);
  var V_SWELL = objLocator.findLocator(objRepo_n.Setup_Message.V_SWELL);
  var Version = objLocator.findLocator(objRepo_n.Setup_Message.Version);
  var Created_date = objLocator.findLocator(objRepo_n.Setup_Message.Created_date);
  var All_Created_date = objLocator.findLocator_ElementAll(objRepo_n.Setup_Message.All_Created_date);
  var search = objLocator.findLocator(objRepo_n.Setup_Message.Search);
  var Refresh_btn = objLocator.findLocator(objRepo_n.Setup_Message.Refresh_btn);
  var ItemPerPage = objLocator.findLocator(objRepo_n.Setup_Message.ItemPerPage);
  var NextPage_Arrow = objLocator.findLocator(objRepo_n.Setup_Message.NextPage_Arrow);
  var PrePage_Arrow = objLocator.findLocator(objRepo_n.Setup_Message.PrePage_Arrow);
  var ItemPerPagedd = objLocator.findLocator(objRepo_n.Setup_Message.ItemPerPagedd);
  var Page_5 = objLocator.findLocator(objRepo_n.Setup_Message.Page_5);
  var Node_SubTab = objLocator.findLocator(objRepo_n.Setup_Message.Node_SubTab);
  var Page_10 = objLocator.findLocator(objRepo_n.Setup_Message.Page_10);
  var Page_20 = objLocator.findLocator(objRepo_n.Setup_Message.Page_20);
  var Page_30 = objLocator.findLocator(objRepo_n.Setup_Message.Page_30);
  var Page_40 = objLocator.findLocator(objRepo_n.Setup_Message.Page_40);
  var Page_50 = objLocator.findLocator(objRepo_n.Setup_Message.Page_50);
  var VValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.VValue_1);
  var VValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.VValue_2);
  var VValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.VValue_3);
  var DevEuiValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.DevEuiValue_1);
  var DevEuiValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.DevEuiValue_2);
  var DevEuiValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.DevEuiValue_3);
  var V1Value_1 = objLocator.findLocator(objRepo_n.Setup_Message.V1Value_1);
  var V1Value_2 = objLocator.findLocator(objRepo_n.Setup_Message.V1Value_2);
  var V1Value_3 = objLocator.findLocator(objRepo_n.Setup_Message.V1Value_3);
  var LValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.LValue_1);
  var LValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.LValue_2);
  var LValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.LValue_3);
  var RQValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.RQValue_1);
  var RQValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.RQValue_2);
  var RQValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.RQValue_3);
  var LDValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.LDValue_1);
  var LDValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.LDValue_2);
  var LDValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.LDValue_3);
  var LPValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.LPValue_1);
  var LPValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.LPValue_2);
  var LPValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.LPValue_3);
  var LTONValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.LTONValue_1);
  var LTONValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.LTONValue_2);
  var LTONValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.LTONValue_3);
  var LTOFFValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.LTOFFValue_1);
  var LTOFFValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.LTOFFValue_2);
  var LTOFFValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.LTOFFValue_3);
  var VSagValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.VSagValue_1);
  var VSagValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.VSagValue_2);
  var VSagValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.VSagValue_3);
  var VSwellValue_1 = objLocator.findLocator(objRepo_n.Setup_Message.VSwellValue_1);
  var VSwellValue_2 = objLocator.findLocator(objRepo_n.Setup_Message.VSwellValue_2);
  var VSwellValue_3 = objLocator.findLocator(objRepo_n.Setup_Message.VSwellValue_3);
  var Version_1 = objLocator.findLocator(objRepo_n.Setup_Message.Version_1);
  var Version_2 = objLocator.findLocator(objRepo_n.Setup_Message.Version_2);
  var Version_3 = objLocator.findLocator(objRepo_n.Setup_Message.Version_3);
  var Date_1 = objLocator.findLocator(objRepo_n.Setup_Message.Date_1);
  var Date_2 = objLocator.findLocator(objRepo_n.Setup_Message.Date_2);
  var Date_3 = objLocator.findLocator(objRepo_n.Setup_Message.Date_3);
  this.click_Menu_SetupBtn = function () {
      buttonActions.click(Setupbtn);
      waitActions.wait(2000)
  };
  this.Presenceof_MessageTab = function () 
  {
      verifyActions.isElementDisplayed(MessageStream_Tab);
      buttonActions.click(MessageStream_Tab);
      waitActions.wait(3000)   
  };
  this.Validate_msgScreeenAppears = function (){
      verifyActions.isElementDisplayed(Dev_eui);
  };
  this.Click_Dev_eui = function (){
      buttonActions.click(Dev_eui);
      waitActions.wait(2000)
  };
  this.Click_V = function (){
      buttonActions.click(V);
      waitActions.wait(1000)
  };
  this.Verify_DevEui_Appears =  function(){
   verifyActions.isElementDisplayed(Dev_eui);
  }
  this.Verify_V_Appears =  function(){
   verifyActions.isElementDisplayed(V);
  }
  this.Verify_V1_Appears =  function(){
   verifyActions.isElementDisplayed(V1);
  }
  this.Verify_L_Appears =  function(){
   verifyActions.isElementDisplayed(L);
  }
  this.Verify_RQ_Appears =  function(){
   verifyActions.isElementDisplayed(RQ);
  }
  this.Verify_LD1_Appears =  function(){
   verifyActions.isElementDisplayed(LD1);
  }
  this.Verify_LP_Appears =  function(){
   verifyActions.isElementDisplayed(LP);
  }
  this.Verify_LT_ON_Appears =  function(){
   verifyActions.isElementDisplayed(LT_ON);
  }
  this.Verify_LT_OFF_Appears =  function(){
   verifyActions.isElementDisplayed(LT_OFF);
  }
  this.Verify_V_SAG_Appears =  function(){
   verifyActions.isElementDisplayed(V_SAG);
  }
  this.Verify_V_SWELL_Appears =  function(){
   verifyActions.isElementDisplayed(V_SWELL);
  }
  this.Verify_Version_Appears =  function(){
   verifyActions.isElementDisplayed(Version);
  }
 this.CreatedDate_appers =  function(){
      verifyActions.isElementDisplayed(Created_date);
   }
this.Validate_sorting_V =  function (){
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  VValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    VValue_2.getText().then(function(value){
    unSorted1.push(value);
    }).then(function(){
      VValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function(){
        buttonActions.click(V);
        waitActions.wait(4000)
        }).then(function(){
          VValue_1.getText().then(function(value){
          Sorted2.push(value)
          }).then(function(){
            VValue_2.getText().then(function(value){
            Sorted2.push(value)
            }).then(function(){
              VValue_3.getText().then(function(value){
              Sorted2.push(value)
              }).then(function(){
                buttonActions.click(V);
                waitActions.wait(4000)
                }).then(function(){
                  VValue_1.getText().then(function(value){
                  reverseSort.push(value)
                  }).then(function(){
                    VValue_2.getText().then(function(value){
                    reverseSort.push(value)
                    }).then(function(){
                      VValue_3.getText().then(function(value){
                      reverseSort.push(value)
                      }).then(function(){
                        var arr1=unSorted1
                        var arr2=Sorted2
                        var arr3=reverseSort
                        expect(arr1).not.toEqual(arr2);
                        expect(arr2).not.toEqual(arr3);
                })
              })
            })
          })
        })
      })
    })  
  })
})
}
this.Validate_sorting_Devui =  function ()
{
var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
DevEuiValue_1.getText().then(function(value){
  unSorted1.push(value);
}).then(function(){
  DevEuiValue_2.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    DevEuiValue_3.getText().then(function(value){
      unSorted1.push(value);
    }).then(function()
    {
      buttonActions.click(Dev_eui);
      waitActions.wait(4000)
    }).then(function(){
      DevEuiValue_1.getText().then(function(value){
        Sorted2.push(value)
      }).then(function(){
        DevEuiValue_2.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          DevEuiValue_3.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            buttonActions.click(Dev_eui);
            waitActions.wait(4000)
          }).then(function(){
            DevEuiValue_1.getText().then(function(value){
              reverseSort.push(value)
            }).then(function(){
              DevEuiValue_2.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                DevEuiValue_3.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  var arr1=unSorted1
                  var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_V1 =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  V1Value_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    V1Value_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      V1Value_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(V1);
        waitActions.wait(4000)
      }).then(function(){
        V1Value_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          V1Value_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            V1Value_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(V1);
              waitActions.wait(4000)
            }).then(function(){
              V1Value_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                V1Value_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  V1Value_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_LState =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  LValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    LValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      LValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(L);
        waitActions.wait(4000)
      }).then(function(){
        LValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          LValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            LValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(L);
              waitActions.wait(4000)
            }).then(function(){
              LValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                LValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  LValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_RQ_State =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  RQValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    RQValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      RQValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(RQ);
        waitActions.wait(4000)
      }).then(function(){
        RQValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          RQValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            RQValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(RQ);
              waitActions.wait(4000)
            }).then(function(){
              RQValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                RQValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  RQValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_LD1_State =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  LDValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    LDValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      LDValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(LD1);
        waitActions.wait(4000)
      }).then(function(){
        LDValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          LDValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            LDValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(LD1);
              waitActions.wait(4000)
            }).then(function(){
              LDValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                LDValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  LDValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_LP_State =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  LPValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    LPValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      LPValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(LP);
        waitActions.wait(4000)
      }).then(function(){
        LPValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          LPValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            LPValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(LP);
              waitActions.wait(4000)
            }).then(function(){
              LPValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                LPValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  LPValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                    expect(arr1).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_LT_ON =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  LTONValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    LTONValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      LTONValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(LT_ON);
        waitActions.wait(4000)
      }).then(function(){
        LTONValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          LTONValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            LTONValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(LT_ON);
              waitActions.wait(4000)
            }).then(function(){
              LTONValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                LTONValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  LTONValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr2).not.toEqual(arr3);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_LT_Off =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  LTOFFValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    LTOFFValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      LTOFFValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(LT_OFF);
        waitActions.wait(4000)
      }).then(function(){
        LTOFFValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          LTOFFValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            LTOFFValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(LT_OFF);
              waitActions.wait(4000)
            }).then(function(){
              LTOFFValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                LTOFFValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  LTOFFValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_V_sag =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  VSagValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    VSagValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      VSagValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(V_SAG);
        waitActions.wait(4000)
      }).then(function(){
        VSagValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          VSagValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            VSagValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(V_SAG);
              waitActions.wait(4000)
            }).then(function(){
              VSagValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                VSagValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  VSagValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_V_swell =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  VSwellValue_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    VSwellValue_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      VSwellValue_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(V_SWELL);
        waitActions.wait(4000)
      }).then(function(){
        VSwellValue_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          VSwellValue_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            VSwellValue_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(V_SWELL);
              waitActions.wait(4000)
            }).then(function(){
              VSwellValue_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                VSwellValue_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  VSwellValue_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_Version =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  Version_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    Version_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      Version_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(Version);
        waitActions.wait(4000)
      }).then(function(){
        Version_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          Version_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            Version_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(Version);
              waitActions.wait(4000)
            }).then(function(){
              Version_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                Version_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  Version_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
this.Validate_sorting_CreatedDate =  function ()
{
  var unSorted1 = [] , Sorted2 = [], reverseSort = [],i=0,j=0,k=0;
  Date_1.getText().then(function(value){
    unSorted1.push(value);
  }).then(function(){
    Date_2.getText().then(function(value){
      unSorted1.push(value);
    }).then(function(){
      Date_3.getText().then(function(value){
        unSorted1.push(value);
      }).then(function()
      {
        buttonActions.click(Created_date);
        waitActions.wait(4000)
      }).then(function(){
        Date_1.getText().then(function(value){
          Sorted2.push(value)
        }).then(function(){
          Date_2.getText().then(function(value){
            Sorted2.push(value)
          }).then(function(){
            Date_3.getText().then(function(value){
              Sorted2.push(value)
            }).then(function(){
              buttonActions.click(Created_date);
              waitActions.wait(4000)
            }).then(function(){
              Date_1.getText().then(function(value){
                reverseSort.push(value)
              }).then(function(){
                Date_2.getText().then(function(value){
                  reverseSort.push(value)
                }).then(function(){
                  Date_3.getText().then(function(value){
                    reverseSort.push(value)
                  }).then(function(){
                    var arr1=unSorted1
                    var arr2=Sorted2
                    var arr3=reverseSort
                   expect(arr1).not.toEqual(arr2);
                   expect(arr2).not.toEqual(arr3);
                  })
                })
              })
            })
          })
        })
      })  
    })
  })
}
    this.Verify_SearchAppears =  function()
    {
     verifyActions.isElementDisplayed(search);
     
    }
    
    this.Verify_RefreshBtnAppears =  function()
    {
     verifyActions.isElementDisplayed(Refresh_btn);
     buttonActions.click(Refresh_btn);
     
    }
    this.Verify_ItemPerPageAppears =  function()
    {
     verifyActions.isElementDisplayed(ItemPerPage);
     
    }
    
    this.clickNext_Arrow =  function()
    {
        try
        {
           if(NextPage_Arrow.isEnabled())
             {
                buttonActions.click(NextPage_Arrow);
                browser.sleep(5000)
                verifyActions.isElementDisplayed(Dev_eui);
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
           if(PrePage_Arrow.isEnabled())
             {
                buttonActions.click(PrePage_Arrow);
                browser.sleep(3000)
                verifyActions.isElementDisplayed(Dev_eui);
             }
        }
       catch (err) 
        {
          console.log('Pre Button is disabled');
        }
    }
    this.SetPagesValue_5 = function () 
   {
      buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_5);
      waitActions.wait(5000)
   };
   this.SendValues_intoSearch =  function(value)
   {
    verifyActions.isElementDisplayed(search);
    inputBoxActions.type(search, value);
    waitActions.wait(5000)
   }
   this.Verify_searchValue =  function (text)
   {
      element.all(by.xpath("//mat-row//mat-cell[7]")).getText().then(function(itemList)
       {
      expect(itemList).toContain(''+text+'');
    });
   }
   this.Verify_NewMessage_Appears =  function(nodeId)
   {
    All_Created_date.first().getText().then(function(lpvalue1){
         console.log(lpvalue1)
         waitActions.wait(3000)
         buttonActions.click(Node_SubTab)
         waitActions.wait(3000)
         element(by.xpath("//button[contains(text(),'STATUS')]")).click()
         waitActions.wait(4000)
         element(by.xpath("//button[contains(text(),'STATUS')]")).click()
         waitActions.wait(5000)
         element.all(by.xpath("//*[@class='example-container']/descendant::mat-slide-toggle")).first().click();
         waitActions.wait(30000)
         buttonActions.click(Setupbtn);
         waitActions.wait(3000)
         buttonActions.click(MessageStream_Tab);
         waitActions.wait(3000)
         All_Created_date.first().getText().then(function(lpvalue2){
         console.log(lpvalue2)
         expect(lpvalue1).not.toEqual(lpvalue2);
         })
        })
   }
   this.Verify_PageRefresh_15Seconds =  function(nodeId)
   {
    All_LP.first().getText().then(function(lpvalue1){
      console.log(lpvalue1)
      waitActions.wait(3000)
      buttonActions.click(Node_SubTab)
      waitActions.wait(3000)
      element(by.xpath("//button[contains(text(),'STATUS')]")).click()
      waitActions.wait(4000)
      element(by.xpath("//button[contains(text(),'STATUS')]")).click()
      waitActions.wait(5000)
      element.all(by.xpath("//*[@class='example-container']/descendant::mat-slide-toggle")).first().click();
      waitActions.wait(30000)
      element.all(by.xpath("//*[@class='example-container']/descendant::mat-slide-toggle")).first().click();
      waitActions.wait(30000)
      buttonActions.click(Setupbtn);
      waitActions.wait(3000)
      buttonActions.click(MessageStream_Tab);
      waitActions.wait(3000)
      All_LP.first().getText().then(function(lpvalue2){
      console.log(lpvalue2)
      expect(lpvalue1).toEqual(lpvalue2);
      })
     })
   }
   this.Checking_PagainationCount =  function()
   {
    buttonActions.click(ItemPerPagedd);
    buttonActions.click(Page_5);
    waitActions.wait(5000)
    All__dev_eui.count().then(function(count_5)
    {
      expect(''+count_5+'').toEqual("5");
    }).then(function(){
      buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_10);
      waitActions.wait(5000)
      All__dev_eui.count().then(function(count_10){
        expect(''+count_10+'').toEqual("10");
      }).then(function(){
        buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_20);
      waitActions.wait(5000)
      All__dev_eui.count().then(function(count_20){
        expect(''+count_20+'').toEqual("20");
      }).then(function(){
        buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_30);
      waitActions.wait(5000)
      All__dev_eui.count().then(function(count_30){
        expect(''+count_30+'').toEqual("30");
      }).then(function(){
        buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_40);
      waitActions.wait(5000)
      All__dev_eui.count().then(function(count_40){
        expect(''+count_40+'').toEqual("40");
      }).then(function(){
        buttonActions.click(ItemPerPagedd);
      buttonActions.click(Page_50);
      waitActions.wait(5000)
      All__dev_eui.count().then(function(count_50){
        expect(''+count_50+'').toEqual("50");
      })
    })
    })
    })
      })
    })
   }
   this.VerifySearch_Messages =  function(value)
   {
    All__dev_eui.first().getText().then(function(text){
      search.sendKeys(text);
           waitActions.wait(4000)
           All__dev_eui.getText().then(function(itemList)
           {
               expect(itemList).toContain(text);
             });
       })
   }
}