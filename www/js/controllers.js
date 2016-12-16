angular.module('app.controllers', [])
  
.controller('dashboardCtrl', ['$scope', '$stateParams', 'BotieSvc', 'ChatieSvc', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BotieSvc, ChatieSvc) {

    $scope.chatieList = ChatieSvc.chatieList
    $scope.botieList = BotieSvc.botieList
    
    $scope.activeChatieNum = $scope.chatieList.filter(c => c.status).length

    $scope.activeBotieNum = $scope.botieList.filter(b => b.status).length
}])
   
.controller('hostieListCtrl', ['$scope', '$stateParams', 'ChatieSvc', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ChatieSvc) {

    $scope.chatieList = ChatieSvc.chatieList
    
    $scope.chatieList.forEach(c => {
        console.log(c)
    })
}])
   
.controller('botieListCtrl', ['$scope', '$stateParams', 'BotieSvc', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BotieSvc) {

    $scope.botieList = BotieSvc.botieList

    $scope.showDelete = false
    $scope.showReorder = false
    
    $scope.toggle = function(v) {
        $scope[v] = !$scope[v]
    }
    
    $scope.delete = function(item) {
        BotieSvc.del(item)
        $scope.showDelete = false
    }
    
    $scope.reorder = function(item, fromIndex, toIndex) {
        $scope.botieList.splice(fromIndex, 1)
        $scope.botieList.splice(toIndex, 0, item)
        $scope.showReorder = false
    }
    
    $scope.share = function(item) {
        alert('share: ' + item)
    }
}])
   
.controller('statusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser) {

    $scope.userData = $ionicUser.details

}])
   
.controller('welcomeCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
	$scope.error = ''

	if ($ionicAuth.isAuthenticated()) {
		$state.go('menu.dashboard')
	}

	$scope.login = function() {
		$scope.error = ''
		$ionicAuth.login('github')
		.then(() => $ionicUser.load())
		.then(() => $state.go('menu.dashboard'))
		.catch(e => {
		  $scope.error = 'Error logging in.'
		  console.log(e)
	    })
	}
}])
   
.controller('settingCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
	$scope.logout = function() {
		$ionicAuth.logout()
		$state.go('welcome')
	}
}])
   
.controller('feedbackCtrl', ['$scope', '$stateParams', '$ionicUser', '$wilddogArray', '$ionicAuth', '$state', function ($scope, $stateParams, $ionicUser, $wilddogArray, $ionicAuth, $state) {
    
    $scope.data = {
        message: ''
    }
    
    var config = {
      syncURL: "https://wechaty.wilddogio.com" //输入节点 URL
    }
    wilddog.initializeApp(config)
    
    // var ref = new Wilddog("https://wechaty.wilddogio.com/messages")
    var ref = wilddog.sync().ref().child('messages')
    $scope.messages = $wilddogArray(ref)
    
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
        
        if (!$ionicAuth.isAuthenticated()) {
            $state.go('welcome')
            return
        }

        // console.log($ionicUser.details)
        const newMessage = {
            text: $scope.data.message,
            email: $ionicUser.details.email,
            name: $ionicUser.details.name,
        }
        
        $scope.messages.$add(newMessage);
        $scope.data.message = '';
    };

}])
   
.controller('helpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
	$scope.data = {
		email: '',
		password: '',
	}
	$scope.error = ''

	if ($ionicAuth.isAuthenticated()) {
		$state.go('menu.dashboard')
	}

	$scope.login = function() {
		$scope.error = ''
		$ionicAuth.login('basic', $scope.data)
		.then(() => $ionicUser.load())
		.then(() => $state.go('menu.dashboard'))
		.catch(e => $scope.error = 'Error logging in.')
	}
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', function ($scope, $stateParams, $ionicAuth, $ionicUser, $state) {
	$scope.data = {
		name: '',
		email: '',
		password: '',
	}
	$scope.error = ''

	$scope.signup = function() {
		$scope.error = ''
		$ionicAuth.signup($scope.data)
		.then(() => {
			$ionicAuth.login('basic', $scope.data)
			.then(() => $state.go('menu.dashboard'))
		})
		.catch(e => {
			var error_lookup = {
				'required_email': 'Missing email field',
				'required_password': 'Missing password field',
				'conflict_email': 'A user has already signed up with that email',
				'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation',
			}
			$scope.error = error_lookup[e.details[0]]
		})
	}
}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('chatieNickCtrl', ['$scope', '$stateParams', 'ChatieSvc', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ChatieSvc) {

    const id = $stateParams.id

    chatie = ChatieSvc.list(id)
    
    $scope.chatie = chatie
    if (chatie.runtime) {
        $scope.icon = icon(chatie.runtime)
    }

    Object.assign($scope, chatie)
    
    // console.log($scope)
    return
    
    function icon(runtime) {
        switch (runtime) {
            case 'win32': return 'ion-social-windows-outline'
            case 'linux': return 'ion-social-tux'
            case 'darwin': return 'ion-social-apple-outline'
            case 'docker': return 'ion-ios-box-outline'
        }
    }
}])
   
.controller('botieCtrl', ['$scope', '$stateParams', 'ChatieSvc', 'BotieSvc', function ($scope, $stateParams, ChatieSvc, BotieSvc) {

    const id = $stateParams.id

    botie = BotieSvc.list(id)
    chatieList = ChatieSvc.list()
    
    $scope.chatieList = chatieList
    $scope.botie = botie

    $scope.eventList = makeEventList()    

    return
    
    function makeEventList() {
        return botie.eventList.map(e => {
            return {
                icon: typeIconColor(e.type)[0],
                color: typeIconColor(e.type)[1],
                text: e.type.replace(/^(\w)/, w => w.toUpperCase()),
                time: e.time,
                data: e.data,
            }
        })
    }
    
    function typeIconColor(type) {
        switch (type) {
            case 'scan': return ['ion-qr-scanner', 'balanced']
            case 'login': return ['ion-log-in', 'balanced']
            case 'logout': return ['ion-log-out', 'balanced']
            case 'message': return ['ion-chatbox-working', 'balanced']
            case 'error': return ['ion-alert', 'balanced']
            default: 
                return ['ion-help', 'balanced']
        }
    }
}])
   
.controller('newChatieCtrl', ['$scope', '$stateParams', 'ChatieSvc', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ChatieSvc, $state) {

    $scope.data = {
        token: '',
        nick: '',
    }
    
    $scope.create = function() {
        
        console.log($scope)
        
        const newChatie = {
            token: $scope.data.token,
            nick: $scope.data.nick,
            createTime: Date.now()
        }

        ChatieSvc.add(newChatie)
        
        $state.go('menu.chatieList')
    }
}])
   
.controller('newBotieCtrl', ['$scope', '$stateParams', 'BotieSvc', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BotieSvc, $state) {

    $scope.data = {
        nick: '',
        memo: '',
    }
    
    $scope.create = function() {
        const newBotie = {
            nick: $scope.data.nick,
            memo: $scope.data.memo,
        }
        BotieSvc.add(newBotie)
        
        $state.go('menu.botieList')
    }
    
    return

}])
   
.controller('giftieListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('unlockProFeaturesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 