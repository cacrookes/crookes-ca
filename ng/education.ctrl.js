angular.module('app')
.controller('EducationCtrl', function($scope){
	$scope.pageId = 'educationPage'
	// defines completed courses in continuing education section
	$scope.courses = [
		{
			name: 'Udacity: Fullstack Web Developer Nanodegree',
			course_link: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
			certificate_link: 'files/fsd-nanodegree-certificate.pdf',
			school: 'udacity'
		},
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
		},
		{
			name: 'HTML5 Game Development',
			course_link: 'https://www.udacity.com/course/cs255',
			certificate_link: 'files/html5-game-dev-certificate.pdf',
			school: 'udacity'
		},
		{
			name: 'M101JS: MongoDB For NODE.JS Developers',
			course_link: 'https://university.mongodb.com/courses/M101JS/about',
			certificate_link: 'files/Nodejs-mongodb.pdf',
			school: 'mongodb'
		}
	];

});
