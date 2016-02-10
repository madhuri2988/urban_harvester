var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
   
   
var refresh = function() {
  $http.get('/itemlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.itemlist = response;
    $scope.item = "";
  });
};
       $scope.addItem = function() {
  console.log($scope.item);
  $http.post('/itemlist', $scope.item).success(function(response) {
    console.log(response);
    refresh();
  });
};
  
     refresh();
    }]);