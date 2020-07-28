var config = require('./base.conf.js');

config.multiCapabilities = [{
  browserName: 'firefox',
  firefoxOptions: {
    args: [
        //   '--headless',
         // '--start-maximized',
        // "--disable-gpu", 
        // "--window-size=1382,744"
    ]
}
}];

module.exports.config = config;