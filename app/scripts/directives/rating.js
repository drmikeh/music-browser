'use strict';

angular.module('uiRouterApp')
.directive('rating', function() {
  return {
    restrict : 'AE',
    template: '<span class="rating">' +
              '<a ng-repeat="star in stars" ng-click="setRating($index)">' +
              '<i class="fa" ng-class="starClass(star, $index)"></i></a></span>',
    scope : {
      score: '=',
      max:   '='
    },
    link: function(scope) {
      scope.updateStars = function() {
       var idx = 0;
        scope.stars = [ ];
        for (idx = 0; idx < scope.max; idx += 1) {
          scope.stars.push( { full: scope.score > idx } );
        }
      };
      scope.starClass = function(star) {
        var starClass = 'fa-star-o';
        if (star.full) {
          starClass = 'fa-star';
        }
        return starClass;
      };
      scope.$watch('score', function(newValue) {
        if (newValue !== null && newValue !== undefined) {
          scope.updateStars();
        }
      });
      scope.setRating = function(idx) {
        scope.score = idx + 1;
      };
    }
  };
});
