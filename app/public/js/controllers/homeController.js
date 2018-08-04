

/* Controllers */

const cdcApp = angular.module('cdcApp', []);

cdcApp.controller('HomeController', ($scope, $http) => {
  $http.get('/produtos').success((data) => {
    $scope.livrosDestaque = data.slice(0, 3);
    $scope.outrosLivros = data;
  });
});
