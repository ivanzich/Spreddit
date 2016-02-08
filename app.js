angular.module('spreddit', [])
.factory('posts', [function() {

	var p = {
		posts: [{title: 'post1', upvotes: 2}]
	};
	return p;

}]);

angular.module('spreddit', [])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts) {
	$scope.posts = posts.posts;

	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') {return;}
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};

}]);

angular.module('spreddit', ['ui.router'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

		$urlRouterProvider.otherwise('home');
	}]);