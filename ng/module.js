angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngMaterial',
  'ngMessages'
])
.config(function($mdThemingProvider){
  $mdThemingProvider.theme('aboutTheme')
    .primaryPalette('green');
  $mdThemingProvider.theme('educationTheme')
    .primaryPalette('indigo');
  $mdThemingProvider.theme('skillsTheme')
    .primaryPalette('deep-orange');
  $mdThemingProvider.theme('contactTheme')
    .primaryPalette('purple');
});
