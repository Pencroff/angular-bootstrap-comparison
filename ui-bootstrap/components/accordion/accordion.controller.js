/**
 * Created by sergii.danilov on 13/07/2015.
 */
(function (angular) {
    'use strict';
    angular
        .module('app')
        .controller('AccordionCtrl', AccordionCtrl);

    AccordionCtrl.$inject = ['$scope'];

    function AccordionCtrl($scope) {
        var vm = this;
        vm.oneAtATime = true;

        vm.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            },
            {
                title: 'Dynamic Group Header - 3',
                content: 'Dynamic Group Body - 3'
            }
        ];

        vm.items = ['Item 1', 'Item 2', 'Item 3'];

        vm.addItem = function() {
            var newItemNo = vm.items.length + 1;
            vm.items.push('Item ' + newItemNo);
        };

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
})(angular);
