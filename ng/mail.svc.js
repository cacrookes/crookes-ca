angular.module('app')
.service('MailSvc', function ($http){
	this.send = function(formData){
		return $http.post('/api/sendmail', formData);
	};
});
