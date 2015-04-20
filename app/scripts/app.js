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

  var artists = {
    name: 'artists',
    url: '/artists',
    templateUrl: 'views/artist_list.html',
    controller: 'ArtistListCtrl'
  },
  artistDetail = {
    name: 'artists.detail',
    url: '/:artistId',
    templateUrl: 'views/artist.detail.html',
    controller: 'ArtistDetailCtrl'
  },
  albumDetail = {
    name: 'artists.detail.albumDetails',
    url: '/:albumId',
    templateUrl: 'views/album.html',
    controller: 'AlbumCtrl'
  },
  about = {
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.html'
  };

  $stateProvider.state(artists);
  $stateProvider.state(artistDetail);
  $stateProvider.state(albumDetail);
  $stateProvider.state(about);

  $urlRouterProvider.otherwise('artists');
})
.run(function ($rootScope, $state, $stateParams) {
   $state.go('artists');

   // It's very handy to add references to $state and $stateParams to the $rootScope
   // so that you can access them from any scope within your applications.For example,
   // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
   // to active whenever 'contacts.list' or one of its decendents is active.
   $rootScope.$state = $state;
   $rootScope.$stateParams = $stateParams;
});
