var previousCommands = {
    navigateToFromPrevious : function(pageToNav) {
        switch(pageToNav) {
            case 'home':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(1)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(1)');
                break;
            case 'sponsorUs':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(2)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(2)');
                break;
            case 'callForPapers':
                return this.api.waitForElementVisible('#navbar-brand > div > div > ul > li:nth-child(3)', 1000)
                .click('#navbar-brand > div > div > ul > li:nth-child(3)');
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
            selector: 'body > div:nth-child(12)',
            elements: {
                title: {
                    selector: 'body > div:nth-child(12) > h4'  
                },
                blurb: { 
                    selector: 'body > div:nth-child(12) > p'
                },
                carousel: {
                    selector: '#carousel-AtelierOne'  
                }
            }
        },
        AtelierTwo: {
            selector: 'body > div:nth-child(10)',
            elements: {
                title: {
                    selector: 'body > div:nth-child(10) > h4' 
                },
                blurb: { 
                    selector: 'body > div:nth-child(10) > p'
                },
                carousel: {
                    selector: '#carousel-AtelierTwo'  
                }
            }
        },
        AtelierThree: {
                selector: 'body > div:nth-child(8)',
                elements: {
                title: {
                    selector: 'body > div:nth-child(8) > h4'  
                },
                blurb: { 
                    selector: 'body > div:nth-child(8) > p'
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
                    selector: '#navbar-brand > div > div > ul > li:nth-child(1)'
                },
                sponsorUs: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(2)'
                },
                callForPapers: {
                    selector: '#navbar-brand > div > div > ul > li:nth-child(3)'
                }
            }
         }
      }        
  };
