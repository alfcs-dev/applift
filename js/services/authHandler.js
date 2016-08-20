(function() {
'use strict';

    angular
        .module('applift')
        .factory('authHandler', authHandler);

    authHandler.$inject = ['$http'];
    function authHandler($http) {
        var options = {
            access_token : "89a9511827421f024122ba0fb7cb7e64dace0c67d68c38eaa17df93cbaac0e9f",
        }
        var currentUser = {
            name: "Alfredo Castañeda",
            emai:  "alfcastaneda@gmail.com"
        }
        
        var service = {
            getUsers:getUsers,
            getUser: getUser,
            loggedIn: loggedIn
        };
        
        return service;

        ////////////////
        function loggedIn(){
            
            sessionStorage.setItem('user', JSON.stringify(currentUser));
            sessionStorage.setItem('accessToken', '89a9511827421f024122ba0fb7cb7e64dace0c67d68c38eaa17df93cbaac0e9f');

            if(sessionStorage.getItem('user') === null){
                return false;
            }else{
                return true;
            }
        }

        function getUser() { 
            var user = {};
            return user;
        }

        function getUsers(){
            var config = {
                params: {access_token: options.access_token}
            }
            return $http.get('https://angular-api-demo.herokuapp.com:443/api/v1/clients', config)
            .then(function(response){
                return response.data;
            });
        }
    }
})();