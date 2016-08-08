

(function(angular) {
  'use strict';
angular.module('UrlDirect', [])
  .controller('Controller', ['$scope', '$compile', function($scope, $compile) {
 
   $scope.introduction = function(){
   $scope.templateURL = 'npm-introduction.html';
    };


    $scope.starternode = function(){
   $scope.templateURL = 'starter-node-angular.html';
    };


     $scope.learn = function(){
   $scope.templateURL = 'learn.html';
    };


    $scope.mongo = function(){
   $scope.templateURL = 'MongoStartup.html';
    };

   $scope.registration = function(){
   $scope.templateURL = 'Registration.html';
    };

    $scope.redischat = function(){
   $scope.templateURL = 'RedisChat.html';
    };

   $scope.ports = function(){
   $scope.templateURL = 'port-info.html';
    };

   $scope.here = function(){
   $scope.templateURL = 'here.html';
    };

   $scope.snippet = function(){
   $scope.templateURL = 'Snippet.html';
    };

    $scope.editor = function(){
   $scope.templateURL = 'edit.html';
    };

     $scope.flashfish= function(){
   $scope.templateURL = 'fish.html';
    };

     $scope.animate= function(){
   $scope.templateURL = 'animatefishlink.html';
    };

    $scope.screencapture= function(){
   $scope.templateURL = 'Ubuntu-video-screen.html';
    };


    $scope.miscCode= function(){
   $scope.templateURL = 'misc-code.html';
    };

    $scope.toys= function(){
   $scope.templateURL = 'angularjs-toys.html';
    };






  }]);
})(window.angular);

angular.module("module",[])
.controller("controller",function($scope){
 $scope.func =function(){
    console.log("d");
  }
  
})

