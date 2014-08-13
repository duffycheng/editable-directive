describe('test the editable directive',function(){
	var scope,
		element,
		compiled,
		html,
		editText;
	beforeEach(module("ediableDirective"));
	beforeEach(module("template.html"));
	beforeEach(inject(function($rootScope, $compile){
		
		editText= "this is the text to be edited";
		html = "<div class=container' make-editable><p tabindex='0'>"+editText+"</p></div>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();


	}));

	it('should render the editable container',function(){
		expect(element.find('p').text()).toContain(editText);
		expect(element.find('a').attr('ng-click')).toBeTruthy();
	})
});