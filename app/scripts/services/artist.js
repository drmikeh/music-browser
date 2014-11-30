'use strict';

angular.module('uiRouterApp')
.service('ArtistService', function() {

  this.artists = [
    { id: 1,
      name: 'The Beatles',
      albums: [
        { id: 1,
          title: 'Revolver',
          songs: [
            { id: 1,  title: "Taxman",                      length: "2:39" },
            { id: 2,  title: "Eleanor Rigby",               length: "2:08" },
            { id: 3,  title: "I'm Only Sleeping",           length: "3:02" },
            { id: 4,  title: "Love You To",                 length: "3:01" },
            { id: 5,  title: "Here, There and Everywhere",  length: "2:26" },
            { id: 6,  title: "Yellow Submarine",            length: "2:40" },
            { id: 7,  title: "She Said She Said",           length: "2:37" },
            { id: 8,  title: "Good Day Sunshine",           length: "2:10" },
            { id: 9,  title: "And Your Bird Can Sing",      length: "2:02" },
            { id: 10, title: "For No One",                  length: "2:01" },
            { id: 11, title: "Doctor Robert",               length: "2:15" },
            { id: 12, title: "I Want to Tell You",          length: "2:30" },
            { id: 13, title: "Got to Get You into My Life", length: "2:31" },
            { id: 14, title: "Tomorrow Never Knows",        length: "2:57" }
          ]
        },
        {
          id: 2,
          title: "Sgt. Pepper's",
          songs: [
            { id: 1,  title: "Sgt. Pepper's",                       length: "2:02" },
            { id: 2,  title: "With a Little Help from My Friends",  length: "2:44" },
            { id: 3,  title: "Lucy in the Sky with Diamonds",       length: "3:28" },
            { id: 4,  title: "Getting Better",                      length: "2:48" },
            { id: 5,  title: "Fixing a Hole",                       length: "2:36" },
            { id: 6,  title: "She's Leaving Home",                  length: "3:35" },
            { id: 7,  title: "Being for the Benefit of Mr. Kite!",  length: "2:37" },
            { id: 8,  title: "Within You Without You",              length: "5:04" },
            { id: 9,  title: "When I'm Sixty-Four",                 length: "2:37" },
            { id: 10, title: "Lovely Rita",                         length: "2:42" },
            { id: 11, title: "Good Morning Good Morning",           length: "2:41" },
            { id: 12, title: "Sgt. Pepper's (Reprise)",             length: "1:19" },
            { id: 13, title: "A Day in the Life",                   length: "5:39" }
          ]
        }
      ]
    },
    { id: 2,
      name: 'Bob Dylan',

    },
    { id: 3,
      name: 'The Rolling Stones',

    }
  ];

  this.getArtistById = function(id) {
    return _.find(this.artists, function(artist) {
      return artist.id === parseInt(id);
    });
  };

  var findAlbum = function(artist, albumId) {
    return _.find(artist.albums, function(album) {
      return album.id === parseInt(albumId);
    });
  };

  this.getAlbumById = function(albumId) {
    var result;
    _.each(this.artists, function(artist) {
      var album = findAlbum(artist, albumId);
      if (album) {
        result = album;
      }
    });
    return result;
  };

});
