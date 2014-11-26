'use strict';

/**
 * @ngdoc overview
 * @name uiRouterApp
 * @description
 * # uiRouterApp
 *
 * Main module of the application.
 */
angular
.module('uiRouterApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ui.router',
  'ui.router.stateHelper',
  // 'ct.ui.router.extras',
  'ngSanitize',
  'ngTouch'
])
.config(function ($stateProvider, $urlRouterProvider, stateHelperProvider) {

  console.log(stateHelperProvider);

  var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'views/home.html'
    },
    about = {
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.html'
    },
    red = {
        name: 'red',
        url: '/red',
        parent: home,
        templateUrl: 'views/home.red.html'
    },
    blue = {
        name: 'blue',
        url: '/blue',
        parent: home,
        templateUrl: 'views/home.blue.html'
    },
    green = {
        name: 'green',
        url: '/green',
        parent: home,
        templateUrl: 'views/home.green.html'
    };

    $stateProvider.state(home);
    $stateProvider.state(about);
    $stateProvider.state(red);
    $stateProvider.state(green);
    $stateProvider.state(blue);

    $urlRouterProvider.otherwise('/home');

})
.run(function ($rootScope, $state, $stateParams) {
   $state.transitionTo('home');

   // It's very handy to add references to $state and $stateParams to the $rootScope
   // so that you can access them from any scope within your applications.For example,
   // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
   // to active whenever 'contacts.list' or one of its decendents is active.
   $rootScope.$state = $state;
   $rootScope.$stateParams = $stateParams;
});
