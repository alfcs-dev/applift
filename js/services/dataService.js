(function() {
'use strict';

    angular
        .module('applift')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];
    function dataService($http) {

        var service = {
            getData:getData,
            postData: postData
        };
        
        return service;

        ////////////////
        function getData(endpoint, data) { 
            var config = {
                params: {access_token: sessionStorage.getItem('accessToken')}
            };
            var url = "https://angular-api-demo.herokuapp.com:443/api/v1/" + endpoint;
            return $http.get(url, config).then(function(response){
                return response.data;
            });
         }

         function postData(endpoint, data){
            var url = "https://angular-api-demo.herokuapp.com:443/api/v1/" + endpoint; 
            var header = { 
                'Authorization': "Bearer " + sessionStorage.getItem('accessToken')
            };
            var config = {
                headers: header
            };
             return $http.post(url, data).then(function(response){
                 return  response.data;
             });
         }
    }
})();