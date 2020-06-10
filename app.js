var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter){

    $scope.handle = '';

    $scope.lowerCaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue){
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
    });

    $timeout(function(){
            $scope.handle = 'newtwitterhandle';
            console.log('Scope Changed!');
    }, 3000);

}]);