var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http', function($scope, $timeout, $filter, $http){

    $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', '$timeout', '$filter', '$http', function($scope, $timeout, $filter, $http){

    $scope.name = 'Second';
}]);