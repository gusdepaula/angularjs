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
    $scope.people = [
    {
        name: 'John Doe',
        address: '555, Main St.',
        city: 'New York',
        state: 'NY',
        zip: '1111'
    },
    {
        name: 'Jane Doe',
        address: '333, Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
    },
    {
        name: 'George Doe',
        address: '111, Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
    }];

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
        },
        transclude: true
    }
});