var myApp = angular.module('ediableDirective',[]);
myApp.directive('makeEditable', function(){
	return {
		scope: true, 
		restrict: 'AE',
		templateUrl: 'template.html',
		replace: true,
		transclude: true,
		link: function(scope,element,attrs) {
			scope.editableP = element.find('p');
		},
		controller:function($scope){
			$scope.editableState = false;
			$scope.buttonText = "Edit";
			$scope.switchEditState = function(){
				if(!$scope.editableState){
					$scope.editableState = true;
					$scope.buttonText = "Save";
					
					angular.element($scope.editableP[0]).attr('contenteditable',true);
					$scope.editableP[0].focus();

				}else{
					$scope.editableState = false;
					$scope.buttonText = "Edit";

					angular.element($scope.editableP[0]).attr('contenteditable',false);
					$scope.editableP[0].blur();
				}
			}
		}
	};
});