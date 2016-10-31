// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('songhop', ['ionic','songhop.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){

$stateProvider

.state('tab',{
  url:'/tab',
  abstract:true,
  templateUrl:'templates/tabs.html',
  controller:'TabsCtrl'
})

.state('tab.discover',{
  url:'/discover',
  views:{
    'tab-discover':{
      templateUrl:'templates/discover.html',
      controller:'DiscoverCtrl'
    }
  }
})

.state('tab.favorites',{
  url:'/favorites',
  views:{
    'tab-favorites':{
      templateUrl:'templates/favorites.html',
      controller:'FavoritesCtrl'
    }
  }
})

$urlRouterProvider.otherwise('/tab/discover');

})

.constant('SERVER', {
  // Local server
  //url: 'http://localhost:8100'

  // Public Heroku server
  url: 'https://ionic-songhop.herokuapp.com'
});