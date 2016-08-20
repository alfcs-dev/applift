(function(){
    angular
        .module('applift')
        .config(stateConf);

    function stateConf($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider
            .state('site', {
                abstract: true,
                template: '<ui-view/>',
            })
            .state('home', {
                parent: 'site',
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController',
                controllerAs: 'vm',
            })
            .state('login', {
                parent: 'site',
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'loginController',
                controllerAs: 'vm',
                resolve: {
                    authHandler: "authHandler",
                    usersPromise: function(authHandler){
                        console.log('I am executing the service');
                        return authHandler.getUsers();
                    }
                }
            })

    }
})();