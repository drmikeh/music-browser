'use strict';

angular.module('uiRouterApp')
.controller('ArtistListCtrl', function ($scope, $state, ArtistService) {

  ArtistService.getArtists().success(function(data) {
    $scope.artists = data;
  });

  $scope.goArtist = function (artist) {
    $state.go( 'artists.detail', { artistId : artist.id } );
  };

});
