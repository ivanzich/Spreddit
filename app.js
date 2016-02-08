angular.module('spreddit', [])
.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello World!';
	}]);