var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter){

    $scope.handle = '';

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };

}]);