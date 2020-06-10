var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$http', function($scope, $timeout, $filter, $http){

    $scope.handle = '';

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;

    $http.get('/api')
        .success(function(result) {
            $scope.rules = result;
        })
        .error(function (data, status){
            console.log(data);
        });

    $scope.newRule = '';
    $scope.addRule = function(){
        $http.post('/api', { newRule: $scope.newRule })
        .success(function(result) {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error(function (data, status){
            console.log(data);
        });
    };
}]);