var callForPapersCommands = {
    navigateToFromCallForPapers : function(pageToNav) {
        switch(pageToNav) {
            case 'home':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(1) > a', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(1)');
                break;
            case 'sponsorUs':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(2) > a', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(2)');
                break;
            case 'previousAteliers':
                return this.api.waitForElementVisible('#navbar-brand > ul > div > div > ul > li:nth-child(3) > a', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(3)');
                break;
            default:
                console.log('Sorry, this nav type is not valid');
                throw new Error();
        }
    },
    completeForm : function(form, browser) {
        //Must pass a form object in from the test
        //For now, lets use static data
        //Complete form
        form
            .setValue('@name', browser.globals.callForPapersData.name)
            .setValue('@email', browser.globals.callForPapersData.email)
            .setValue('@twitter', browser.globals.callForPapersData.twitter)
            .setValue('@title', browser.globals.callForPapersData.title)
            .setValue('@abstract', browser.globals.callForPapersData.abstract)
            .setValue('@aboutYou', browser.globals.callForPapersData.bio)
    }
};

module.exports = {
  commands: [callForPapersCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        callForPapersForm: {
            selector: 'body > section > div > div > div:nth-child(2) > form',
            elements: {
                    name: {
                        selector: '#name'  
                    },
                    email: { 
                        selector: '#email'
                    },
                    twitter: {
                        selector: '#twitter'  
                    },
                    title: {
                        selector: '#title'
                    },
                    abstract : {
                        selector: '#abstract'
                    },
                    aboutYou : {
                        selector: '#bio'
                    },
                    submitButton : {
                        selector: 'body > section > div > div > div:nth-child(2) > form > div:nth-child(7) > input[type="submit"]' 
                    }
                }
        },
        navBar: {
            selector : 'body > nav > div > div.navbar-header',
            elements: {
                home: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(1) > a'
                },
                sponsorUs: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(2) > a'
                },
                previousAteliers: {
                    selector: '#navbar-brand > ul > div > div > ul > li:nth-child(3) > a'
                }
            }
         }
      }        
  };
