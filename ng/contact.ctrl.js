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


	//resultMessage displays a success or failure message below the form
	$scope.resultMessage = "";
	$scope.showResult = false;
	$scope.submit = function(contactform){
		//checks if form passes clientside validtation
		if (contactform.$valid) {
			resetForm();
			//display confirmation message
			$scope.resultMessage = "Message sent!";
			$scope.showResult = true;
			//hide message after 10 seconds
			$timeout(function(){
					$scope.showResult = false;
			}, 5000);

/*			MailSvc.send($scope.emailData)
			.success(function(data){
				//mail service returned the mail was successfully sent
				$scope.resultMessage = "Message sent!";
				alert("Message Sent! Thank you!");
				//clear the form
				$scope.contactform.$setPristine();
				$scope.contactform.$setUntouched();
				$scope.contactform.emailData={
					inputName: "",
					inputEmail: "",
					inputMessage: ""
				};
			}).error(function(data, status){
				//mail service returned an error
				$scope.resultMessage = data.message;
				alert("Error in sending message: " + data.message);
			});*/
		}else{
			//form did not pass clientside validation. Since the submit button
			//is not active if the form is invalid, this should never be reached.
			//$scope.resultMessage = 'Failed: Please fill out all fields';
			//alert("Please fill out all fields before sending");
		}
	};
});
