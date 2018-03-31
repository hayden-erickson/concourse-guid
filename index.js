angular.module("root", [])
.controller("index", ["$scope", $scope => {
  $scope.clicks = 0;

  $scope.inc_click = () => {
    $scope.clicks++;
  }
}]);
