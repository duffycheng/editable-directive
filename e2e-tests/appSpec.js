describe("Test Pages", function() {

	var ROOT = "http://localhost:7777/";

	it("index page",function(){
		browser.get(ROOT);
		expect(element.all(by.css('.editable')).count()).toBe(2);
	});
	it("click Edit/Save button will switch editable state",function(){
		var editable = element(by.css('.editable p'));
		var button = element(by.css('.button'));
		expect(button.getText()).toBe('Edit');
		
		button.click();
		expect(editable.getAttribute('contenteditable')).toBe('true');
		expect(button.getText()).toBe('Save');

		button.click();
		expect(editable.getAttribute('contenteditable')).toBe('false');
		expect(button.getText()).toBe('Edit');
	});
});

