var config = require('./base.conf.js');

config.multiCapabilities = [
    {
  browserName: 'chrome',
  chromeOptions: {
          args: [
              //   '--headless',
                '--start-maximized',
              // "--disable-gpu", 
              // "--window-size=1382,744"
          ]
      }
}];

module.exports.config = config;