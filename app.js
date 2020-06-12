var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/second', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

weatherApp.controller('homeController', ['$scope', function($scope){

}]);

weatherApp.controller('forecastController', ['$scope', function($scope){

}]);