var app = angular.module('app', []);

app.controller('ContactController', function($scope, MailSvc){
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
