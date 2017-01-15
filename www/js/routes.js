angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('menu.hostieList', {
    url: '/hostie-list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hostieList.html',
        controller: 'hostieListCtrl'
      }
    }
  })

  .state('menu.botieList', {
    url: '/botie-list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/botieList.html',
        controller: 'botieListCtrl'
      }
    }
  })

  .state('menu.status', {
    url: '/status',
    views: {
      'side-menu21': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('menu.setting', {
    url: '/setting',
    views: {
      'side-menu21': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu.feedback', {
    url: '/feedback',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

  .state('menu.help', {
    url: '/help',
    views: {
      'side-menu21': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.hostieDetail', {
    url: '/hostie',
	params: {
		id: ""
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/hostie-detail.html',
        controller: 'hostieDetailCtrl'
      }
    }
  })

  .state('menu.botie', {
    url: '/botie',
	params: {
		id: ""
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/botie.html',
        controller: 'botieCtrl'
      }
    }
  })

  .state('menu.newHostie', {
    url: '/new-hostie',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newHostie.html',
        controller: 'newHostieCtrl'
      }
    }
  })

  .state('menu.newBotie', {
    url: '/new-botie',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newBotie.html',
        controller: 'newBotieCtrl'
      }
    }
  })

  .state('menu.giftieList', {
    url: '/giftie-list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/giftieList.html',
        controller: 'giftieListCtrl'
      }
    }
  })

  .state('menu.unlockProFeatures', {
    url: '/unlock-pro-features',
    views: {
      'side-menu21': {
        templateUrl: 'templates/unlockProFeatures.html',
        controller: 'unlockProFeaturesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/welcome')



});
