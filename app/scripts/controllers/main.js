'use strict';

/**
 * @ngdoc function
 * @name uiRouterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiRouterApp
 */
angular.module('uiRouterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
