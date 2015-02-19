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

app.controller('EducationCtrl', function($scope){
	//defines completed courses in continuing education section
	$scope.courses = [
		{
			name: 'BerkeleyX: CS188.1x Artificial Intelligence',
			course_link: 'https://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs188-1x-artificial-579#.U0HdDPldXng',
			certificate_link: '//s3.amazonaws.com/verify.edx.org/downloads/06060b8569da4de5a7ab58b13859188c/Certificate.pdf',
			school: 'edx'
		},
		{
			name: 'Algorithms: Design and Analysis, Part 1',
			course_link: 'https://www.coursera.org/course/algo',
			certificate_link: 'files/algo-certificate.pdf',
			school: 'coursera'
		},
		{
			name: 'Genes and the Human Condition (From Behavior to Biotechnology)',
			course_link: 'https://www.coursera.org/course/genes',
			certificate_link: 'files/Coursera-genes.pdf',
			school: 'coursera'
		},
		{
			name: 'HarvardX: PH201x: Health and Society',
			course_link: 'https://www.edx.org/course/harvardx/harvardx-ph201x-health-society-905#.U0HeGvldXng',
			certificate_link: 'https://s3.amazonaws.com/verify.edx.org/downloads/9d19bd661f5247e9816278159c972598/Certificate.pdf',
			school: 'edx'
		}

	];
	
	//returns school logo
	$scope.getLogo = function(school){
		console.log('getting logo for ' + school);
		switch(school){
			case 'edx':
				return '/files/edx.png';
				break;
			case 'coursera':
				return '/files/coursera.png';
				break;
		}
	};
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
