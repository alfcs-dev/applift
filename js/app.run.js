(function(){
    angular.module('applift').run(runFn);
    runFn.$inject = ['authHandler', '$state', '$location', '$rootScope']
    function runFn(authHandler, $state, $location, $rootScope){
        var userLogged = authHandler.loggedIn();
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
            if (toState.name !== 'login') { //Create a function in case we were going to log users in for this app is an automatic process
                if (!userLogged) {
                    event.preventDefault();
                    $state.transitionTo('login');
                }
            } else {
                if (userLogged) {
                    event.preventDefault();
                    $state.transitionTo('home');
                }
            }
        });
    }

})();