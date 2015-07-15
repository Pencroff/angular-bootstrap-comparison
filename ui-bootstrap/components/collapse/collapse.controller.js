/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('CollapseCtrl', CollapseCtrl);

    CollapseCtrl.$inject = ['$scope'];

    function CollapseCtrl($scope) {
        var vm = this;
        vm.isCollapsed = false;
        vm.toggleCollapsed = function () {
            vm.isCollapsed = !vm.isCollapsed;
        }
    }
})(angular);