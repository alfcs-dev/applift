(function() {
'use strict';

    angular
        .module('applift')
        .controller('loginController', LoginController);


    function LoginController(usersPromise) {
        var vm = this;
        console.log('we are in login');

        activate();

        ////////////////

        function activate() { 
            
        }
    }
})();