var indexCommands = {
    navigateTo : function(pageToNav) {
        this.api.pause(1000);
        return this.api.waitForElementVisible('.form-group.js-form-type.input-sm', 1000)
        .click('.form-group.js-form-type.input-sm')
        .pause(1000)
        .setValue('.form-group.js-form-type.input-sm', adType)
        .pause(1000);
    }
}

module.exports = {
  commands: [indexCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        carousel: {
            selector: '#speakers',
            elements: {
                carouselRight: {
                    selector: '#carousel-a > a.right.carousel-control'  
                },
                carouselLeft: { 
                    selector: '#carousel-a > a.left.carousel-control'
                },
                ss3TabSelector: {
                    selector: 'a[href="#ss3-tab"]>strong'  
                },
                ss4TabSelector: {
                    selector: 'a[href="#ss4-tab"]>strong'  
                },
                ss5TabSelector: {
                    selector: 'a[href="#ss5-tab"]>strong'  
                },
                ssp1to4TabSelector: {
                    selector: 'a[href="#pub1-tab"]>strong'  
                },
                ssp5TabSelector: {
                    selector: 'a[href="#pub1-tab"]>strong'  
                },
                channelHeader: { 
                    selector: '/html/body/div[1]/div[2]/div[1]/form/fieldset/div[1]/h2',
                    locateStrategy: 'xpath'
                }
        }
    },
        navBar: {
            selector : 'body > nav > div > div.navbar-header',
            elements: {
                home: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(1)'
                },
                sponsorUs: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(2)'
                },
                callForPapers: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(3)'
                },
                previousAteliers: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(4)'
                }
            }
         }
      }        
  }
};
