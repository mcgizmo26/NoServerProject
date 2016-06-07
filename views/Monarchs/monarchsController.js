angular.module('noServerApp')
.controller('monarchsController', function($scope, teamService){
  $scope.teamData = function()
{
  $scope.results = teamService.getData('monarchs');
}
$scope.teamData();

$scope.changePicture= function(image){
  $scope.picture=image;
}
$scope.picture="No-Server-images/stadiumshot.png";

$scope.hidden= true;
})
