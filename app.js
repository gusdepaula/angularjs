var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $lo){

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParam){

}]);

myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, Jonh</h4><p class="list-group-item-text">555, Main St., New York, NY 1111</p></a>',
        replace:true
    }
});