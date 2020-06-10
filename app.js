var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter){

    $scope.handle = '';

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;

    $scope.rules = [
        {rulename: "Must be 5 characters" },
        {rulename: "Must be used elsewhere" },
        {rulename: "Must be cool" }
    ];

    console.log($scope.rules);

    $scope.alertClick = function(){
        alert('click');
    };

    $scope.name = 'John Doe';

}]);