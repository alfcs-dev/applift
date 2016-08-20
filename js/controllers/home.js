(function() {
'use strict';

    angular
        .module('applift')
        .controller('homeController', homeController);

    homeController.$inject = ['dataService', '$filter', '$scope'];
    function homeController(dataService, $filter, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.sortOrders = sortOrders;
        vm.sortOptions = {
            lastSort: '',
            desc: false,
        };
        activate();
         console.log('we are in home');
         vm.items = [{
             id: 1,
             name: "test"
         },{
             id:2,
             name: "test"
         }];
         $scope.$on('neworder', function(event){
             activate();
         });

        ////////////////

        function activate() { 
            dataService.getData('orders').then(function(data){
                vm.orders = data.orders;
            });
        }

        function sortOrders(sort){
            if(vm.sortOptions.lastSort !== sort){
                vm.sortOptions.lastSort = sort;
                vm.sortOptions.desc = false;
            }else{
                vm.sortOptions.desc =  !vm.sortOptions.desc;
            }

            vm.orders = $filter('orderBy')(vm.orders, vm.sortOptions.lastSort, vm.sortOptions.desc);

        }
    }
})();