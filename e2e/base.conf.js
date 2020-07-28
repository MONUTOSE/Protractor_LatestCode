var config = require('../baseClass.conf.js');
var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var AllureReporter = require('jasmine-allure-reporter');
var fs = require('fs-extra');

waitTimeout = 70000;

// config.specs = [
// 	'global.js',
// 	'BuildStability_Specs/Functional_BuildStability_Test.js',
// 	'BuildStability_Specs/Functional_RestOfBuild_Test.js',
// 	'BuildStability_Specs/Functional_LogIn_Test.js',
// ];

config.suites = {
	smoke : ['global.js',
			 'specs/Functional_BuildStability_Test.js'
			],
	sanity: ['global.js',
			 'specs/Functional_BuildStability_Test.js',
			 'specs/Functional_RestOfBuild_Test.js'
		    ],
	regression : ['global.js',
	              'specs/Functional_BuildStability_Test.js',
	              'specs/Functional_RestOfBuild_Test.js'
                 ],
}

exports.config =
{
  baseUrl:'',	 
  params:
    {
		baseUrl: '',
		url: '',
		browserType: "",
		login: {
			email: 'default',
			password: 'default',
			company: 'default'
		  }
	},
};

config.onPrepare = function () 
{   
	// browser.driver.manage().window().maximize();
	// var width = 1000;
    // var height = 744;
	// browser.driver.manage().window().setSize(width, height);

	//browser.get(browser.baseUrl);
	browser.get(browser.params.baseUrl);
	// switch(browser.params.baseUrl){
	// 	  case 'dev':
	// 	  browser.get("https://dev6.ubicquia.com/#/login");   
	// 	  break;  
	// 	  case 'qa':
	// 	  browser.get("https://test6.ubicquia.com/#/login");   
	// 	  break; 
	// 	  case 'prod':
	// 	  browser.get("https://stage.ubicquia.com/#/login");   
	// 	  break; 
	// 	  default:
	// 	  browser.get("https://test5.ubicquia.com/#/login");
    // }
	 
	browser.getCapabilities().then(function (cap) 
	{
		browser.browserName = cap.get('browserName');
		console.log('browserName:', browser.browserName);
	});
	
	browser.manage().timeouts().implicitlyWait(60000);
	browser.ignoreSynchronization = true;

	fs.emptyDir('../reports/xml/', function (err) {
		console.log(err);
	});
	browser.getCapabilities().then(function (cap) {
		fs.emptyDir('../reports/' + cap.get('browserName') + '/screenshots', function (err) {
			console.log(err);
		});
	});
	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		consolidateAll: true,
		savePath: '../reports/xml/',
		filePrefix: 'xmlresults'
	}));
	jasmine.getEnv().addReporter({
		specDone: function (result) {
			browser.getCapabilities().then(function (caps) {
				var browserName = caps.get('browserName');

				browser.takeScreenshot().then(function (png) {
					var stream = fs.createWriteStream('../reports/' + browserName + '/screenshots/' + browserName + '-' + result.fullName + '.png');
					stream.write(new Buffer(png, 'base64'));
					stream.end();
				});
			});
		}
	});

	jasmine.getEnv().addReporter(new AllureReporter({
		resultsDir: 'allure-results'
	  }));
	  jasmine.getEnv().afterEach(function(done){
		browser.takeScreenshot().then(function (png) {
		  allure.createAttachment('Screenshot', function () {
			return new Buffer(png, 'base64')
		  }, 'image/png')();
		  done();
		})
	  });    
};
 
config.onComplete = function () 
{
	var browserName, browserVersion;
	var capsPromise = browser.getCapabilities();

	capsPromise.then(function (caps) {
		browserName = caps.get('browserName');
		browserVersion = caps.get('version');
		platform = caps.get('platform');
		testConfig = {
			reportTitle: 'Protractor Test Execution Report',
			outputPath: '../reports/',
			outputFilename: 'ProtractorTestReport',
			screenshotPath: browserName + '/screenshots',
			testBrowser: browserName,
			browserVersion: browserVersion,
			modifiedSuiteName: false,
			screenshotsOnlyOnFailure: false,
			testPlatform: platform
		};
		new htmlReporter().from('../reports/xml/xmlresults.xml', testConfig);
	});
};

module.exports = config;
