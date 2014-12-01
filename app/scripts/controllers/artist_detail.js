'use strict';

angular.module('uiRouterApp')
.controller('ArtistDetailCtrl', function ($scope, $state, $stateParams, ArtistService) {

  ArtistService.getArtists().success(function() {
    $scope.artist = ArtistService.getArtistById($stateParams.id);
  });

  $scope.goAlbum = function(album) {
    $state.go( 'artists.detail.albumDetails', { id2 : album.id } );
  };

});
