'use strict';

/**
 * @ngdoc function
 * @name uiRouterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiRouterApp
 */
angular.module('uiRouterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
