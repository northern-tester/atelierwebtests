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
	//Make sure the we've gone beyond the form - as this will be a captcha
	atelierCallForPapers.expect.section('@callForPapersForm').to.not.be.present.after(1000);
	//Kill test
	browser.end();
  }
};

