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

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log){
    $scope.person = {
        name: 'John Doe',
        address: '555, Main St.',
        city: 'New York',
        state: 'NY',
        zip: '1111'
    }

    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip; 
    };
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParam){

}]);

myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchResult.html',
        replace:true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        }
    }
});