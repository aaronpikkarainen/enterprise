/* eslint-disable */
const basePath = __dirname;
const { SpecReporter } = require('jasmine-spec-reporter');
const browserstack = require('browserstack-local');
const protractorImageComparison = require('protractor-image-comparison');

const getSpecs = (listSpec) => {
  if (listSpec) {
    return listSpec.split(',');
  }

  return ['components/**/*.e2e-spec.js', 'kitchen-sink.e2e-spec.js'];
};

const theme = process.env.ENTERPRISE_THEME || 'light'

exports.config = {
  params: {
    theme
  },
  allScriptsTimeout: 12000,
  getPageTimeout: 10000,
  logLevel: 'DEBUG',
  troubleshoot: true,
  specs: getSpecs(process.env.PROTRACTOR_SPECS),
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4000',
  jasmineNodeOpt: {
    defaultTimeoutInterval: 10000,
    showColors: true,
    random: false
  },
  commonCapabilities: {
    'browserstack.user': process.env.BROWSER_STACK_USERNAME,
    'browserstack.key': process.env.BROWSER_STACK_ACCESS_KEY,
    'browserstack.debug': true,
    'browserstack.local': true,
    'browserstack.networkLogs' : true,
    build: `${theme} theme: local tunnel e2e`,
    name: `${theme} theme local tunnel e2e tests`
  },
  multiCapabilities: [
    {
      browserName: 'Chrome',
      browser_version: '66.0',
      resolution: '1280x800',
      os_version: '10',
      os: 'Windows'
    },
    {
      browserName: 'Firefox',
      browser_version: '59.0',
      resolution: '1280x800',
      os_version: '10',
      os: 'Windows'
    },
    {
      browserName: 'Edge',
      resolution: '1280x800',
      browser_version: '16.0',
      os_version: '10',
      os: 'Windows'
    },
    {
      browserName: 'IE',
      browser_version: '11.0',
      resolution: '1280x800',
      os_version: '10',
      os: 'Windows'
    }
  ],
  beforeLaunch: () => {
    return new Promise((resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ key: exports.config.commonCapabilities['browserstack.key'] }, (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
  },
  onPrepare: () => {
    global.requireHelper = (filename) => require(`${basePath}/helpers/${filename}.js`);
    browser.ignoreSynchronization = true;
    browser.protractorImageComparison = new protractorImageComparison({
      baselineFolder: `${basePath}/baseline`,
      screenshotPath: `${basePath}/.tmp/`,
      autoSaveBaseline: false,
      ignoreAntialiasing: true,
      debug: true
    });

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: { displayStacktrace: true }
    }));

    return browser.getProcessedConfig().then((cap) => {
      browser.browserName = cap.capabilities.browserName.toLowerCase();
      if (browser.browserName === 'chrome') {
        return browser.driver.manage().window().setSize(1200, 800);
      }
    });
  },
  afterLaunch: () => {
    return new Promise((resolve) => {
      exports.bs_local.stop(resolve);
    });
  }
};

exports.config.multiCapabilities.forEach((caps) => {
  for (const i in exports.config.commonCapabilities) {
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
  }
});
