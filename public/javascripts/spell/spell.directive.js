(function() {
  'use strict';

    angular.module('app')
      .directive('orSpell', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/javascripts/spell/spell.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = ["$log"]

      function controller ($log) {
        var vm = this;

      }
}());
