angular.module('app')
.directive('navPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/nav-panel.html',
		controller: function($scope, $location){
			//stores site links
			$scope.navlinks = [
				{title: 'About', icon: 'face', path: '/about'},
				{title: 'Education', icon: 'school', path: '/education'},
				{title: 'Skills', icon: 'build', path: '/skills'},
				{title: 'Contact', icon: 'email', path: '/contact'}
			];

			//check if link is for the active page, and if so returns true
			$scope.isActive = function(navlink){
				if (navlink.path == $location.path()){
					return true;
				}
				return false;
			};
		},
		controllerAs: 'navpanel'
	};
});
