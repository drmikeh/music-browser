'use strict';

angular.module('uiRouterApp')
.controller('ArtistListCtrl', function ($scope, $state, ArtistService) {

  $scope.artists = ArtistService.artists;

  $scope.goArtist = function (artist) {
    $state.go( 'artists.detail', { id : artist.id } );
  };

});
