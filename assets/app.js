var app = angular.module('app', [
		'ngRoute'
]);

app.config(function($routeProvider){
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

app.controller('HomeCtrl', function(){

});

app.controller('AboutCtrl', function(){

});

app.controller('EducationCtrl', function(){

});

app.controller('SkillsCtrl', function(){

});


app.controller('ContactCtrl', function($scope, MailSvc){
	$scope.result = 'hidden';
	$scope.resultMessage = "";
	$scope.formData;
	$scope.submitButtonDisabled = false;
	$scope.submitted = false;
	$scope.submit = function(contactform){
		$scope.submitted = true;
		$scope.submitButtonDisabled = true;
		if (contactform.$valid) {
			console.log("posting mail");
			console.log($scope.formData);
			MailSvc.send($scope.formData)
			.success(function(data){
				console.log("Return data: " + data);
				$scope.submitButtonDisable = true;
				$scope.resultMessage = "Message sent!";
				$scope.result = 'bg-success';
			}).error(function(data, status){
				$scope.submitButtonDisabled = false;
				$scope.resultMessage = data.message;
				$scope.result='bg-danger';
			});
		}else{
			$scope.submitButtonDisabled = false;
			$scope.resultMessage = 'Failed: Please fill out all fields';
			$scope.result='bg-danger';
		}
	}
});

app.service('MailSvc', function ($http){
	this.send = function(formData){
		return $http.post('/api/sendmail', formData);
	}
});

app.directive('navPanel', function(){
	return {
		restrict: 'E',
		templateUrl: 'nav-panel.html',
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
