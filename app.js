
/* APP */
angular.module("DarthController", []);
angular.module("DarthServices", []);


var app = angular.module('darth', [
  'ngRoute',
  'DarthController',
  'DarthServices']);

app.config(function($routeProvider){

  $routeProvider.when('/',
      {
        templateUrl:'/html/partials/files.tpl.html',
      });

 $routeProvider.otherwise({redirectTo:'/404'});
});
