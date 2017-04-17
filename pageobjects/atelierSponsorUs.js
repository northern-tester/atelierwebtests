var sponsorCommands = {
    navigateToFromSponsors : function(pageToNav) {
        switch(pageToNav) {
            case 'home':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(1)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(1)');
                break;
            case 'callForPapers':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(2)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(2)');
                break;
            case 'previousAteliers':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(3)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(3)');
                break;
            default:
                console.log('Sorry, this nav type is not valid');
                throw new Error();
        }
    },
    spinCarousel : function(direction) {
        switch(direction) {
            case 'left':
                return this.api.click('#carousel-a > a.left.carousel-control').pause(1000);
                break;
            case 'right':
                return this.api.click('#carousel-a > a.right.carousel-control').pause(1000);
                break;
            default:
                console.log('Sorry, the carousel does not move in this direction');
                throw new Error();
        }
    }
};

module.exports = {
  commands: [sponsorCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        sponsorCarousel: {
            selector: '#sponsors',
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
                    selector: '#carousel-a > div > div.item.active > table > tbody > tr > td.blurb > h4'
                }
        }
    },
        sponsorInfo: {
            selector : '#sponsorus',
            elements: {
                whatAmIInFor: {
                    selector: '#sponsorus > h3:nth-child(1)'
                },
                emailContact: {
                    selector: '#sponsorus > p:nth-child(4) > a:nth-child(1)'
                },
                tweetContact: {
                    selector: '#sponsorus > p:nth-child(4) > a:nth-child(2)'
                },
                costTable: {
                    selector: '#sponsorus > div'
                },
                whatWillIGet: {
                    selector: '#sponsorus > h3:nth-child(7)'
                }
            }
         }
      }        
  };
