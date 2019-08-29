module.exports = {
	'Navigate to Call for Papers and Submit' : function (browser) {
	//Index page object
	var atelierIndex = browser.page.atelierIndex();
	//CfP Page Object
	var atelierCallForPapers = browser.page.atelierCallForPapers();
	//navigate to index
	atelierIndex.navigate();
	//Navigate to Call for Papers
	atelierIndex.navigateToFromIndex('callForPapers');
	//Check for form existence
	atelierCallForPapers.expect.section('@callForPapersForm').to.be.visible.after(1000);
	//Get a form object from the CfP page object
	var form = atelierCallForPapers.section.callForPapersForm;
	//Pass that browser and form objects and complete the form
	atelierCallForPapers.completeForm(form, browser);
	//Kill test
	browser.end();
  }
};

