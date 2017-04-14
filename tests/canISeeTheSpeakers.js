module.exports = {
	'Navigate to homepage and review speaker content' : function (browser) {
	//Index page object
	var atelierIndex = browser.page.atelierIndex();
	//navigate to index
	atelierIndex.navigate();
	//check for nav bar
	atelierIndex.expect.section('@navBar').to.be.visible.after(1000);
	//check for carousel
	atelierIndex.expect.section('@speakerCarousel').to.be.visible.after(1000);

	//Get carousel section
	var carousel = atelierIndex.section.speakerCarousel;

	//Manipulate the carousel
	browser.getText('#carousel-a > div > div.item.active > table > tbody > tr > td > h4', function(initialResult) {
		//Move the carousel right and get a different speaker
		atelierIndex.spinCarousel('right');
		browser.expect.element('#carousel-a > div > div.item.active > table > tbody > tr > td > h4').text.to.not.equal(initialResult.value);
		//Move the carousel left and get the original speaker
		atelierIndex.spinCarousel('left');
		browser.expect.element('#carousel-a > div > div.item.active > table > tbody > tr > td > h4').text.to.equal(initialResult.value);
	});
	//Kill test
	browser.end();
  }
};

