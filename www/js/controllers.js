angular.module('songhop.controllers',['ionic','songhop.services'])

.controller('DiscoverCtrl',function($scope,$timeout, User, Recommendations){

  Recommendations.init()
    .then(function(){
      $scope.currentSong=Recommendations.queue[0];
      Recommendations.playCurrentSong();
    });

    $scope.sendFeedback=function(bool){
      if (bool) User.addSongToFavorites($scope.currentSong);
      $scope.currentSong.rated=bool; 
      $scope.currentSong.hide=true;
      
      Recommendations.nextSong();

      $timeout(function(){
        $scope.currentSong= Recommendations.queue[0];
      },250);

      Recommendations.playCurrentSong();
    }

    $scope.getNextAlbumImg= function(){
      if(Recommendations.queue.length>1)
        return Recommendations.queue[1].image_large;
      return '';
    }
    
})


.controller('FavoritesCtrl',function($scope, User){
  $scope.favorites=User.favorites;

  $scope.removeSongFromFavorites=function(song,index){
    User.removeSongFromFavorites(song,index);
  }
})


.controller('TabsCtrl',function($scope, Recommendations){
  $scope.enteringFavorites=function(){
    Recommendations.haltAudio();
  }

  $scope.leavingFavorites= function(){
    Recommendations.init();
  }
})