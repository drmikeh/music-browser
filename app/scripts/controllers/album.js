'use strict';

angular.module('uiRouterApp')
.controller('AlbumCtrl', function ($scope, $stateParams, ArtistService) {

  ArtistService.getArtists().success(function() {
    $scope.artist = ArtistService.getArtistById($stateParams.id);
    $scope.album  = ArtistService.getAlbumById($stateParams.id2);
  });

});
