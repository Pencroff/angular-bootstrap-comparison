/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('DropdownCtrl', DropdownCtrl);

    DropdownCtrl.$inject = ['$scope', '$log'];

    function DropdownCtrl($scope, $log) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            $log.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }
})(angular);