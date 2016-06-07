angular.module('noServerApp')
.directive('home', function(){
  return{
    restrict:"E",
    templateUrl:"views/Home/home.html"
  }
})
