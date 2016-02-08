angular.module('spreddit', ['ui.router']);

angular.module('spreddit')
.factory('posts', [function() {

	var o = {
		posts: [
		{title: 'test post', upvotes: 2},
		{title: 'portfolio', link: 'http://justinhongj.github.io', upvotes: 3652}
		]
	};

	return o;

}]);

angular.module('spreddit')
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
			upvotes: 0,
			comments: [
				{author: 'Joe', body: 'Cool post!', upvotes: 0},
				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			]
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};

}]);

angular.module('spreddit')
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts) {

	$scope.posts = posts.posts[$stateParams.id];

	$scope.addComment = function() {
		if($scope.body === '') { return; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	};

}]);

angular.module('spreddit')
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

	$stateProvider
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

	$urlRouterProvider.otherwise('home');
}]);