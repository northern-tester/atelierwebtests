module.exports = {
  'Demo test localhost' : function (browser) {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('body > img', 1000)
      .pause(1000)
      .click('#navbar-brand > div > div > ul > li:nth-child(2) > a')
      .pause(1000)
      .assert.containsText('#amazingsponsors > h2', 'Our sponsors totally rock! They pay for your learning, beer and swag!')
      .end();
  }
};