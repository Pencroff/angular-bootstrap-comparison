/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(anular) {
    'use strict';
    angular
        .module('app')
        .controller('ButtonCtrl', ButtonCtrl);

    ButtonCtrl.$inject = ['$scope'];

    function ButtonCtrl($scope) {
        var vm = this;
        vm.singleModel = 1;

        vm.radioModel = 'Middle';

        vm.checkModel = {
            left: false,
            middle: true,
            right: false
        };
    }
})(angular);