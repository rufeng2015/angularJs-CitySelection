/*
 * author rufeng
 * data 2017-10-18
 */
var myApp = angular.module('myApp', []);
myApp.controller('Ctrl', ['$scope', function($scope) {
    $scope.location = '';
    $scope.$watch('location', function(newValue) {
        console.log(newValue);
    });
}]);
