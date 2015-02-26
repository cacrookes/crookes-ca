angular.module('app')
.directive('navPanel', function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/nav-panel.html',
		controller: function($scope, $location){
			//stores site links
			$scope.navlinks = [
				{title: 'Home',	path: '/'},
				{title: 'About', path: '/about'},
				{title: 'Education', path: '/education'},
				{title: 'Skills', path: '/skills'},
				{title: 'Contact', path: '/contact'}
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
