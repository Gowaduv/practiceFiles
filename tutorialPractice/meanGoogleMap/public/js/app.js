// Declares the initial Angular module 'meanMapApp'
var app = angular.module('meanMapApp', ['addCtrl', 'geolocation', 'gservice', 'ngRoute'])

  // Configure Angular routing - show view and controllers
  .config(function($routeProvider){

    // Join Team control panel
    $routeProvider.when('/join', {
      controller: 'addCtrl',
      templateUrl: 'partials/addForm.html',
    }).when('/find', {
        templateUrl: 'partials/queryForm.html',
    }).otherwise({redirectTo: '/join'})
  });