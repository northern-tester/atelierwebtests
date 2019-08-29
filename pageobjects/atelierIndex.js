var indexCommands = {
    navigateToFromIndex : function(pageToNav) {
        switch(pageToNav) {
            case 'home':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(1) > a', 1000)
                .click('#navbar-brand > ul > div > div > ul > li:nth-child(1) > a');
                break;
            case 'sponsorUs':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(2) > a', 1000)
                .click('#navbar-brand > ul > div > div > ul > li:nth-child(2) > a');
                break;
            case 'callForPapers':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(3) > a', 1000)
                .click('#navbar-brand > ul > div > div > ul > li:nth-child(3) > a');
                break;
            case 'previousAteliers':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(4) > a', 1000)
                .click('#navbar-brand > ul > div > div > ul > li:nth-child(4) > a');
                break;
            default:
                console.log('Sorry, this nav type is not valid');
                throw new Error();
        }
    },
};

module.exports = {
  commands: [indexCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        navBar: {
            selector : 'body > nav > div > div.navbar-header',
            elements: {
                home: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(1) > a'
                },
                sponsorUs: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(2) > a'
                },
                callForPapers: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(3) > a'
                },
                previousAteliers: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(4) > a'
                }
            }
         }
      }        
  };
