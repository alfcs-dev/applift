(function() {
'use strict';

    angular
        .module('applift')
        .controller('newOrderCtrl', NewOrderCtrl);

    NewOrderCtrl.$inject = ['dataService', '$rootScope'];
    function NewOrderCtrl(dataService, $rootScope) {
        var vm = this;
        vm.showForm = showForm;
        vm.form = false;
        vm.saveForm = saveForm;
        vm.cancelForm = cancelForm;
        vm.order = {};

        activate();

        ////////////////

        function activate() {
            dataService.getData('clients')
            .then(function(data){
                vm.clients = data.clients;
            })
            .catch(function(error){console.log(error);});
        }
        function showForm(){
            vm.form = true;
        }

        function cancelForm(){
            vm.order.name =  "";
            vm.order.weight = "";
            vm.order.destination = "";
            vm.form = false;
        }
        function saveForm(){
            if(vm.appForm.$valid){
                dataService.postData('orders', vm.order).then(function(data){
                    $rootScope.$broadcast('neworder');
                }).catch(function(error){
                    console.log(error);
                });
            }else{
                alert('You have to submit valid data');
            }

        }
    }
})();