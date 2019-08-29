module.exports = {
    'Browse Potential Sponsor Benefits and Get in Touch' : function (browser) {
    //Index page object
    var atelierIndex = browser.page.atelierIndex();
    //Sponsors page object
    var atelierSponsorUs = browser.page.atelierSponsorUs();
    //navigate to index
    atelierIndex.navigate();
    //Navigate to sponsors page
    atelierIndex.navigateToFromIndex('sponsorUs');
    //Browse previous sponsors in carousel
    var carousel = atelierSponsorUs.section.sponsorCarousel;
    //Manipulate Carousel
    carousel.getText('@activeCarouselNameEntry', function(initialResult) {
    //Move the carousel right and get a different speaker
      atelierSponsorUs.spinCarousel('right');
      carousel.expect.element('@activeCarouselNameEntry').text.to.not.equal(initialResult.value);
      //Move the carousel left and get the original speaker
      atelierSponsorUs.spinCarousel('left');
      carousel.expect.element('@activeCarouselNameEntry').text.to.equal(initialResult.value);
    });
    //Consume sponsor information
    atelierSponsorUs.expect.section('@sponsorInfo').to.be.visible.after(1000);
    var sponsorInfo = atelierSponsorUs.section.sponsorInfo;
    sponsorInfo.expect.element('@whatAmIInFor').to.be.present;
    sponsorInfo.expect.element('@costTable').to.be.present;
    sponsorInfo.expect.element('@whatWillIGet').to.be.present;
    //Click twitter to get in touch
    sponsorInfo.click('@tweetContact');
    //Kill test
    browser.end();
  }
};