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

      controller.$inject = ["$log", "$state"]

      function controller ($log, $state) {
        var vm = this;

        vm.show = $state.$current.self.name;
        var socket = io();

        socket.emit('join', { showName: $state.$current.self.name });


      }
}());
