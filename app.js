var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

    $scope.city = cityService.city;

    $scope.$watch('city', function(){
        cityService.city = $scope.city
    })
    

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$resource', function($scope, cityService, $resource){

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource("https://openweathermap.org/data/2.5/forecast/daily", 
    {callback:"JSON_CALLBACK"}, 
    { get: {method: "JSONP"}}, "&appid=3ad1ebb14d51169352930f82aceea563");

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2, appid: 'ad1ebb14d51169352930f82aceea563'});

    console.log($scope.weatherResult);

}]);