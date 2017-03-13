(function() {
  'use strict';

  angular
    .module('megazord')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {
    $rootScope.$on('$viewContentLoaded', function(event, next) {
      componentHandler.upgradeAllRegistered();
    });
  }
})();
