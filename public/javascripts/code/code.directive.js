(function() {
  'use strict';

    angular.module('app')
      .directive('orCode', appDirective);

      function appDirective() {
        return {
          restrict: 'E',
          scope: {},
          templateUrl: '/javascripts/code/code.html',
          controller: controller,
          controllerAs: 'vm'
        }
      }

      controller.$inject = [
        "$scope",
        "$log",
        "$state"
      ];

      function controller ($scope, $log, $state) {
        var vm = this;
        vm.sendMsg = sendMsg;
        vm.show = $state.$current.self.name;
        var socket = io();

        socket.emit('join', { showName: $state.$current.self.name });

        vm.messages = [];
        socket.on('message', function (data) {
          vm.messages.push(data);
          $scope.$apply();
        })

        function sendMsg () {
          socket.emit('msg', vm.codeRoom);
        }

      }
}());
