angular.module('app')
.controller('EducationCtrl', function($scope){
	//defines completed courses in continuing education section
	$scope.courses = [
		{
			name: 'BerkeleyX: CS188.1x Artificial Intelligence',
			course_link: 'https://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs188-1x-artificial-579#.U0HdDPldXng',
			certificate_link: '//s3.amazonaws.com/verify.edx.org/downloads/06060b8569da4de5a7ab58b13859188c/Certificate.pdf',
			school: 'edx',
      school_logo: '/img/edx.png'
		},
		{
			name: 'Algorithms: Design and Analysis, Part 1',
			course_link: 'https://www.coursera.org/course/algo',
			certificate_link: 'files/algo-certificate.pdf',
			school: 'coursera',
      school_logo: '/img/coursera.png'
		},
		{
			name: 'Genes and the Human Condition (From Behavior to Biotechnology)',
			course_link: 'https://www.coursera.org/course/genes',
			certificate_link: 'files/Coursera-genes.pdf',
			school: 'coursera',
      school_logo: '/img/coursera.png'
		},
		{
			name: 'HarvardX: PH201x: Health and Society',
			course_link: 'https://www.edx.org/course/harvardx/harvardx-ph201x-health-society-905#.U0HeGvldXng',
			certificate_link: 'https://s3.amazonaws.com/verify.edx.org/downloads/9d19bd661f5247e9816278159c972598/Certificate.pdf',
			school: 'edx',
      school_logo: '/img/edx.png'
		}

	];

});
