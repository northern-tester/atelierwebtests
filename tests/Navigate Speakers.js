module.exports = {
	'Navigate to Homepage and Review Speaker Content' : function (browser) {
	//Index page object
	var atelierIndex = browser.page.atelierIndex();
	//navigate to index
	atelierIndex.navigate();
	//check for nav bar
	atelierIndex.expect.section('@navBar').to.be.visible.after(1000);
	//Kill test
	browser.end();
  }
};

