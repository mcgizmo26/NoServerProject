angular.module('noServerApp')
.controller('rslController', function($scope, teamService){
  $scope.teamData = function()
  {
    $scope.results = teamService.getData('rsl');
  }
  $scope.teamData();

  $scope.changePicture= function(image){
    $scope.picture=image;
  }
  $scope.picture="No-Server-images/stadiumshot.png";

  $scope.uslhidden= true;
})
