/* This controller handles the contact form. If all of the fields pass validation,
the form data is sent to the mail service (mail.svc.js) which posts the form data
to the server */

angular.module('app')
.controller('ContactCtrl', function($scope, MailSvc, $timeout){
	$scope.pageId = 'contactPage';

	//define model for contact form
	$scope.emailData = {
		inputName: "",
		inputEmail: "",
		inputMessage: ""
	};
	//stores original form values. Handy for resetting the form.
	var oriEmailData = angular.copy($scope.emailData);

	// resets the form. Resets modal data, and sets the angular attributes: 'pristine'
	// and 'untouched' to the form inputs.
	var resetForm = function(){
		$scope.contactform.$setPristine();
		$scope.contactform.$setUntouched();
		$scope.emailData = angular.copy(oriEmailData);
	};

	// shows a confirmation message, indicating whether the mail was successfully
	// sent or not
	var showMessage = function(message){
		$scope.resultMessage = message;
		$scope.showResult = true;
		//hide message after 10 seconds
		$timeout(function(){
				$scope.showResult = false;
		}, 5000);
	};

	//resultMessage displays a success or failure message below the form
	$scope.resultMessage = "";
	$scope.showResult = false;
	//sendError is used for applying css styles to the confirmation message
	$scope.sendError = false;
	$scope.submit = function(contactform){
		//checks if form passes clientside validtation
		if (contactform.$valid) {
			MailSvc.send($scope.emailData)
			.success(function(data){
				//mail service returned the mail was successfully sent
				resetForm();
				$scope.sendError = false;
				//display confirmation message
				showMessage("Message sent!");
			}).error(function(data, status){
				//mail service returned an error
				$scope.sendError = true;
				showMessage("Error: " + data.message);
			});
		}else{
			//form did not pass clientside validation. Since the submit button
			//is not active if the form is invalid, this should never be reached.
			//$scope.resultMessage = 'Failed: Please fill out all fields';
			//alert("Please fill out all fields before sending");
		}
	};
});
