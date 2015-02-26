angular.module('app')
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/about', {
			templateUrl: '/templates/about.html',
			controller: 'AboutCtrl'
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
