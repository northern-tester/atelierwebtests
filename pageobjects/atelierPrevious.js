var previousCommands = {
    navigateToFromPrevious : function(pageToNav) {
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
            default:
                console.log('Sorry, this nav type is not valid');
                throw new Error();
        }
    },
    spinCarousel : function(direction, carouselNumber) {
        if(carouselNumber == 1) {
            switch(direction) {
                case 'left':
                    return this.api.click('#carousel-AtelierOne > a.left.carousel-control').pause(1000);
                    break;
                case 'right':
                    return this.api.click('#carousel-AtelierOne > a.right.carousel-control').pause(1000);
                    break;
                default:
                    console.log('Sorry, the carousel does not move in this direction');
                    throw new Error();
            }   
        }
        if(carouselNumber == 2) {
            switch(direction) {
                case 'left':
                    return this.api.click('#carousel-AtelierTwo > a.left.carousel-control').pause(1000);
                    break;
                case 'right':
                    return this.api.click('#carousel-AtelierTwo > a.right.carousel-control').pause(1000);
                    break;
                default:
                    console.log('Sorry, the carousel does not move in this direction');
                    throw new Error();
            }
        }
        if(carouselNumber == 3) {
            switch(direction) {
                case 'left':
                    return this.api.click('#carousel-AtelierThree > a.left.carousel-control').pause(1000);
                    break;
                case 'right':
                    return this.api.click('#carousel-AtelierThree > a.right.carousel-control').pause(1000);
                    break;
                default:
                    console.log('Sorry, the carousel does not move in this direction');
                    throw new Error();
            }
        }
    }
};

module.exports = {
  commands: [previousCommands],
  url: function() { 
        return this.api.launchUrl; 
       },
  sections: {
        AtelierOne: {
            selector: 'body > div > div:nth-child(17)',
            elements: {
                title: {
                    selector: 'body > div > div:nth-child(17) > h4'  
                },
                blurb: { 
                    selector: 'body > div > div:nth-child(17) > p'
                },
                carousel: {
                    selector: '#carousel-AtelierOne'  
                }
            }
        },
        AtelierTwo: {
            selector: 'body > div > div:nth-child(15)',
            elements: {
                title: {
                    selector: 'body > div > div:nth-child(15) > h4' 
                },
                blurb: { 
                    selector: 'body > div > div:nth-child(15) > p'
                },
                carousel: {
                    selector: '#carousel-AtelierTwo'  
                }
            }
        },
        AtelierThree: {
                selector: 'body > div > div:nth-child(13)',
                elements: {
                title: {
                    selector: 'body > div > div:nth-child(13) > h4'  
                },
                blurb: { 
                    selector: 'body > div > div:nth-child(13) > p'
                },
                carousel: {
                    selector: '#carousel-AtelierThree'  
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
                }
            }
         }
      }        
  };
