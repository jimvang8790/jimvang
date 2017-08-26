var myApp = angular.module('myApp', ['ngRoute']);
// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: 'views/index.html'
  }).when('/agentave', {
    templateUrl: 'views/agentave.html',
    controller: 'AgentController as ac'
  }).when('/bouncetribe', {
    templateUrl: 'views/bouncetribe.html',
    controller: 'BounceController as bc'
  }).when('/stepup', {
    templateUrl: 'views/stepup.html',
    controller: 'StepController as sc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});// end config
