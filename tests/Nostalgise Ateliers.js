module.exports = {
	'Navigate to Previous Ateliers and Get Inspired ' : function (browser) {
	//Index page object
	var atelierIndex = browser.page.atelierIndex();
	//Previous Ateliers page object
	var atelierPrevious = browser.page.atelierPrevious();
	//navigate to index
	atelierIndex.navigate();
	//Navigate to previous ateliers
	atelierIndex.navigateToFromIndex('previousAteliers');
	//Check for the previous ateliers
	atelierPrevious.expect.section('@AtelierOne').to.be.visible.after(1000);
	atelierPrevious.expect.section('@AtelierTwo').to.be.visible.after(1000);
	atelierPrevious.expect.section('@AtelierThree').to.be.visible.after(1000);
	//Spin each carousel
	atelierPrevious.spinCarousel('left', 1);
	atelierPrevious.spinCarousel('right', 2);
	atelierPrevious.spinCarousel('left', 3);
	//Be inspired and navigate to Call for Papers
	atelierPrevious.navigateToFromPrevious('callForPapers');
	//Assert we've arrived
	browser.assert.title("Testing Atelier - Call for Papers");
	//Kill test
	browser.end();
  }
};

