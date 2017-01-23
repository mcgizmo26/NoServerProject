angular.module('noServerApp', ['ui.router', 'ngAnimate'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('home', {
        url: '',
        template: "<home></home>"
      })
       .state('rsl', {
         url: '/rsl',
        templateUrl:"views/rsl/rsl.html",
        controller: 'rslController'
      })
       .state('monarchs', {
         url: '/monarchs',
         templateUrl:"views/monarchs/monarchs.html",
         controller: 'monarchsController'
      });
})
