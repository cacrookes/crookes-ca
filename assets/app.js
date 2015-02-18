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
