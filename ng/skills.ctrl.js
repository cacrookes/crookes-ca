angular.module('app')
.controller('SkillsCtrl', function($scope){
  $scope.pageId = 'skillsPage';
  $scope.skills = [
    {
      name: 'JavaScript',
      activity: 'Current'
    },
    {
      name: 'AngularJS',
      activity: 'Current'
    },
    {
      name: 'HTML5',
      activity: 'Current'
    },
    {
      name: 'CSS',
      activity: 'Current'
    },
    {
      name: 'Node.js',
      activity: 'Current'
    },
    {
      name: 'MongoDB',
      activity: 'Current'
    },
    {
      name: 'PHP',
      activity: 'Recent',
    },
    {
      name: 'MySQL',
      activity: 'Recent'
    },
    {
      name: 'Drupal',
      activity: 'Recent'
    },
    {
      name: 'Wordpress',
      activity: 'Rusty'
    },
    {
      name: 'Java',
      activity: 'Rusty'
    },
    {
      name: 'C/C++',
      activity: 'Rusty'
    },
    {
      name: 'ASP.NET',
      activity: 'Rusty'
    },
    {
      name: 'C#',
      activity: 'Rusty'
    },
    {
      name: 'Visual Basic',
      activity: 'Rusty'
    },
    {
      name: 'Git',
      activity: 'Current'
    },
    {
      name: 'Python',
      activity: 'Current'
    },
    {
      name: 'MS SQL Server',
      activity: 'Rusty'
    }
  ];
});
