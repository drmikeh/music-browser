'use strict';

angular.module('uiRouterApp')
.service('ArtistService', function($http) {

  var that = this;

  that.artists = [];

  that.getArtists = function() {
    return $http.get('data/artists.json').success(function(data) {
      that.artists = data;
    });
  };

  that.getArtistById = function(id) {
    return _.find(that.artists, function(artist) {
      return artist.id === parseInt(id);
    });
  };

  var findAlbum = function(artist, albumId) {
    return _.find(artist.albums, function(album) {
      return album.id === parseInt(albumId);
    });
  };

  that.getAlbumById = function(albumId) {
    var result;
    _.each(that.artists, function(artist) {
      var album = findAlbum(artist, albumId);
      if (album) {
        result = album;
      }
    });
    return result;
  };

});
