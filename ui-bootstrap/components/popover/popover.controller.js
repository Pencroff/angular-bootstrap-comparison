/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('PopoverCtrl', PopoverCtrl);

    PopoverCtrl.$inject = ['$scope'];

    function PopoverCtrl($scope) {
        $scope.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl: 'myPopoverTemplate.html',
            title: 'Title'
        };
    }

})(angular);