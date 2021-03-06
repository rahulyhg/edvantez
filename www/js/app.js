// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular-flexslider'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        cache: false,
        templateUrl: 'templates/tabs.html',
        controller: 'TabsCtrl'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        cache: false,
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'

          }
        }
      })

      .state('tab.chats', {


        url: '/chats',
        cache: false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        cache: false,
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        cache: false,
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })
      .state('tab.noaccount', {
        url: '/noaccount',
        cache: false,
        views: {
          'tab-accounts': {
            templateUrl: 'templates/tab-accounts.html',
            controller: 'AccountsCtrl'
          }
        }
      })

      //started by ruchira
      .state('mobile', {
        url: '/mobile',
        cache: false,
        templateUrl: 'templates/mobile.html',
        controller: 'MobileCtrl'

      })


      .state('laststep', {
        url: '/laststep',
        cache: false,
        templateUrl: 'templates/laststep.html',
        controller: 'LastStepCtrl'

      })

      .state('tab.profile', {
        url: '/profile',
        cache: false,
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab-profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })



      .state('testreg', {
        cache: false,

        url: '/testreg/:id',
        templateUrl: 'templates/testreg.html',
        controller: 'RegisteringCtrl',


        /*params:{
          id: {value: null}
              }*/

      })
      .state('test', {
        url: '/test/:id',
        cache: false,
        templateUrl: 'templates/test.html',
        controller: 'TestCtrl',
        params: { //for sending question to test page
          allquest: null

        },
        resolve: {
          check: function ($location) {
            var status = $.jStorage.get("login");
            if (status != true) {
              $location.path('/tab/dash');
            }
          }
        }

      })

      .state('questionare', {
        url: '/questionare/:tests',
        cache: false,
        templateUrl: 'templates/questionare.html',
        controller: 'QuestionareCtrl',
        /*params:{
          tests: null
        }*/
        resolve: {
          check: function ($location) {
            var status = $.jStorage.get("login");
            if (status != true) {
              $location.path('/tab/dash');
            }
          }
        }
      })

      .state('otp', {
        url: '/otp',
        cache: false,
        templateUrl: 'templates/otp.html',
        controller: 'OtpCtrl'

      })



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/mobile');

  })
  .directive("limitTo", [function () {
    return {
      restrict: "A",
      link: function (scope, elem, attrs) {
        var limit = parseInt(attrs.limitTo);
        angular.element(elem).on("keypress", function (e) {
          if (this.value.length == limit) e.preventDefault();
        });
      }
    }
  }]);
