/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(anular) {
    'use strict';
    angular
        .module('app')
        .controller('AlertController', AlertController);

    AlertController.$inject = ['$scope'];

    function AlertController($scope) {
        var vm = this;
        vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
        };

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };
    }
})(angular);