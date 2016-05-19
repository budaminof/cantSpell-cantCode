(function() {
  'use strict';

  var dependencies = [
    'ui.router'
  ];

  angular.module('app', dependencies)
  .config(setupStates)

  setupStates.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider'
  ];

  function setupStates($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
     .state('app', {
       templateUrl: '/javascripts/layout/layout.html',
       url: "/"
    })
    .state('spell',{
      template: '<or-spell></or-spell>',
      parent: 'app',
      url: "spell",
    })
    .state('code',{
      template: '<or-code></or-code>',
      parent: 'app',
      url: "code",
      })
  }

}());
