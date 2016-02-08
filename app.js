angular.module('spreddit', [])
.factory('posts', [function() {

	var p = {
		posts: []
	};
	return p;

}]);

angular.module('spreddit', [])
.controller('MainCtrl', [

'$scope',
'posts',
function($scope, posts) {
	$scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 8},
		{title: 'post 3', upvotes: 12},
		{title: 'post 4', upvotes: 2}
	];

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