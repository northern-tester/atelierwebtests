module.exports = {
	'Navigate to Homepage and Review Speaker Content' : function (browser) {
	//Index page object
	var atelierIndex = browser.page.atelierIndex();
	//navigate to index
	atelierIndex.navigate();
	//check for nav bar
	atelierIndex.expect.section('@navBar').to.be.visible.after(1000);
	//check for carousel
	atelierIndex.expect.section('@speakerCarousel').to.be.visible.after(1000);
	//Manipulate the carousel
	var carousel = atelierIndex.section.speakerCarousel;
	carousel.getText('@activeCarouselNameEntry', function(initialResult) {
		//Move the carousel right and get a different speaker
		atelierIndex.spinCarousel('right');
		carousel.expect.element('@activeCarouselNameEntry').text.to.not.equal(initialResult.value);
		//Move the carousel left and get the original speaker
		atelierIndex.spinCarousel('left');
		carousel.expect.element('@activeCarouselNameEntry').text.to.equal(initialResult.value);
	});
	//Kill test
	browser.end();
  }
};

