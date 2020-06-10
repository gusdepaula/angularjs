var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){
    $log.info($scope);
}]);