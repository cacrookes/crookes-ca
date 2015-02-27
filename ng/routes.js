angular.module('app')
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html'
		})
		.when('/about', {
			templateUrl: '/templates/about.html'
		})
		.when('/education', {
			templateUrl: '/templates/education.html',
			controller: 'EducationCtrl'
		})
		.when('/skills', {
			templateUrl: '/templates/skills.html',
			controller: 'SkillsCtrl'
		})
		.when('/contact', {
			templateUrl: '/templates/contact.html',
			controller: 'ContactCtrl'
		})
});
