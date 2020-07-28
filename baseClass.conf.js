module.exports = {
     
    directConnect: true,
    allScriptsTimeout: 60000,
    getPageTimeout: 70000,
    maxSessions: 1,
  
    baseUrl: '',
  
    
    jasmineNodeOpts: {

      onPrepare: null,
      onComplete: null,
      
      isVerbose: false,
       
      showColors: true,
       
      includeStackTrace: true,
      
      defaultTimeoutInterval: 120000
    }
  };
  