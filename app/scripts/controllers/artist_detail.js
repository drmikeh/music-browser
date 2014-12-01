'use strict';

angular.module('uiRouterApp')
.controller('ArtistDetailCtrl', function ($scope, $state, $stateParams, ArtistService) {

  ArtistService.getArtists().success(function() {
    $scope.artist = ArtistService.getArtistById($stateParams.artistId);
  });

  $scope.goAlbum = function(album) {
    $state.go( 'artists.detail.albumDetails', { albumId : album.id } );
  };

});
