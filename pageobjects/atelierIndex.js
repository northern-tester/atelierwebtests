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
    spinCarousel : function(direction) {
        switch(direction) {
            case 'left':
                return this.api.waitForElementVisible('#carousel-a > a.left.carousel-control', 1000)
                .click('#carousel-a > a.left.carousel-control');
                break;
            case 'right':
                return this.api.waitForElementVisible('#carousel-a > a.right.carousel-control', 1000)
                .click('#carousel-a > a.right.carousel-control');
                break;
            default:
                console.log('Sorry, the carousel does not move in this direction');
                throw new Error();
        }
    }
};

module.exports = {
  commands: [indexCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        speakerCarousel: {
            selector: '#speakers',
            elements: {
                carouselRight: {
                    selector: '#carousel-a > a.right.carousel-control'  
                },
                carouselLeft: { 
                    selector: '#carousel-a > a.left.carousel-control'
                },
                carouselInner: {
                    selector: '#carousel-a > div'  
                },
                activeCarouselNameEntry: {
                    selector: '#carousel-a > div > div.item.active > table > tbody > tr > td > h4'
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
