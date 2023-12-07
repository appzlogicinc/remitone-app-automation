# RemitONE Automation Test Suite

Welcome to the RemitONE Automation Test Suite repository! This project showcases RemitONE's innovative technology for the remittance industry. Our solutions empower organizations to flexibly send and receive money through various channels, ensuring a seamless and compliant financial ecosystem.

## About RemitONE

RemitONE is a leading technology and business services firm revolutionizing the remittance world for banks, money transfer operators, micro-finance institutions, telecom firms, and start-ups. With a global presence spanning over 100 countries, RemitONE is recognized as a trusted brand and the foremost provider of fully hosted, end-to-end multi-agent, multi-channel, multi-currency, and multi-region money transfer software solutions.

Through innovative technology, we enable the industry to better serve customers, manage business network relationships, and stay compliant with financial regulations. Our experienced management team has developed RemitONE CONNECTIONS, a worldwide network of send and payout partners, offering an instant business network for remittance firms.

## Setting Up the Automation Test Suite

Follow these steps to set up the project and run tests on various platforms using BrowserStack.

### Prerequisites

1. **VS Code**: Install Visual Studio Code, a lightweight and powerful code editor.
2. **Node.js**: Install Node.js to manage dependencies. [Download Node.js](https://nodejs.org/)
3. **WebdriverIO**: Install WebdriverIO, the automation testing framework, globally:

```bash
npm install -g webdriverio
```

4. **Node Modules**: Install the necessary Node.js modules:

```bash
npm install
```

5. **MochaJS (Chai Framework)**: Install MochaJS with Chai Assertion Library:

```bash
npm install mochajs chai
```

6. **BrowserStack Account**: Obtain a BrowserStack account and retrieve your username and access key.

### Connecting with BrowserStack

1. Set your BrowserStack credentials in `wdio.conf.js`:

```javascript
user: process.env.BROWSERSTACK_USERNAME,
key: process.env.BROWSERSTACK_ACCESS_KEY,
app: 'bs://bd8317b0e42c064f51c82385c60b11bdbe0530da',
```

2. Update capabilities for local browser web tests in `wdio.conf.js`:

```javascript
capabilities: [{
  'bstack:options': {
    deviceName: 'Google Pixel 3',
    platformVersion: '9.0',
    platformName: 'android',
  }
}],
```

### Running Tests

#### For Android:

```bash
npm run test:android
```

#### For iOS:

```bash
npm run test:ios
```

Feel free to explore and contribute to the RemitONE Automation Test Suite! Happy testing!
