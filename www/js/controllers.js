angular.module('songhop.controllers',['ionic','songhop.services'])

.controller('DiscoverCtrl',function($scope,$timeout, User, Recommendations){

  Recommendations.getNextSongs()
    .then(function(){
      $scope.currentSong=Recommendations.queue[0];
    });

    $scope.sendFeedback=function(bool){
      if (bool) User.addSongToFavorites($scope.currentSong);
      $scope.currentSong.rated=bool; 
      $scope.currentSong.hide=true;
      
      Recommendations.nextSong();

      $timeout(function(){
        $scope.currentSong= Recommendations.queue[0];
      },250);
    }
    
})


.controller('FavoritesCtrl',function($scope, User){
  $scope.favorites=User.favorites;

  $scope.removeSongFromFavorites=function(song,index){
    User.removeSongFromFavorites(song,index);
  }
})


.controller('TabsCtrl',function($scope){

})