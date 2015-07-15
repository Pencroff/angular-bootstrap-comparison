/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(anular) {
    'use strict';
    angular
        .module('app')
        .controller('NavbarCtrl', NavbarCtrl);

    NavbarCtrl.$inject = ['$scope', '$location'];

    function NavbarCtrl($scope, $location) {
        $scope.$location = $location;
    }
})(angular);