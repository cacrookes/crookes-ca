angular.module('app')
.controller('SkillsCtrl', function($scope){
  $scope.pageId = 'skillsPage';
  $scope.categories = [
    'Language', 'Framework', 'Database', 'Miscellaneous'
  ];
  $scope.skills = [
    {
      name: 'JavaScript',
      activity: 'Current',
      type: 'Language'
    },
    {
      name: 'AngularJS',
      activity: 'Current',
      type: 'Framework'
    },
    {
      name: 'HTML5',
      activity: 'Current',
      type: 'Language'
    },
    {
      name: 'CSS',
      activity: 'Current',
      type: 'Language'
    },
    {
      name: 'Express (Node.js)',
      activity: 'Current',
      type: 'Framework'
    },
    {
      name: 'MongoDB',
      activity: 'Current',
      type: 'Database'
    },
    {
      name: 'PHP',
      activity: 'Recent',
      type: 'Language'
    },
    {
      name: 'MySQL',
      activity: 'Recent',
      type: 'Database'
    },
    {
      name: 'Drupal',
      activity: 'Recent',
      type: 'Framework'
    },
    {
      name: 'Wordpress',
      activity: 'Rusty',
      type: 'Framework'
    },
    {
      name: 'Java',
      activity: 'Rusty',
      type: 'Language'
    },
    {
      name: 'C/C++',
      activity: 'Rusty',
      type: 'Language'
    },
    {
      name: 'ASP.NET',
      activity: 'Rusty',
      type: 'Framework'
    },
    {
      name: 'C#',
      activity: 'Rusty',
      type: 'Language'
    },
    {
      name: 'Visual Basic',
      activity: 'Rusty',
      type: 'Language'
    },
    {
      name: 'Git',
      activity: 'Current',
      type: 'Miscellaneous'
    },
    {
      name: 'Python',
      activity: 'Current',
      type: 'Language'
    },
    {
      name: 'MS SQL Server',
      activity: 'Rusty',
      type: 'Database'
    },
    {
      name: 'PostgreSQL',
      activity: 'Current',
      type: 'Database'
    },
    {
      name: 'Flask',
      activity: 'Recent',
      type: 'Framework'
    }
  ];
});
