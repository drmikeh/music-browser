'use strict';

angular.module('uiRouterApp')
.controller('AlbumCtrl', function ($scope, $stateParams, ArtistService) {

  ArtistService.getArtists().success(function() {
    $scope.artist = ArtistService.getArtistById($stateParams.artistId);
    $scope.album  = ArtistService.getAlbumById($stateParams.albumId);
  });

});
