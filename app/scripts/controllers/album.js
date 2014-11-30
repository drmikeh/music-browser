'use strict';

angular.module('uiRouterApp')
.controller('AlbumCtrl', function ($scope, $stateParams, ArtistService) {

  $scope.artist = ArtistService.getArtistById($stateParams.id);
  $scope.album  = ArtistService.getAlbumById($stateParams.id2);

  console.log('$stateParams: ' + JSON.stringify($stateParams));
  console.log('artist: ' + $scope.artist.name);
  console.log('album:  ' + $scope.album.title);

});
