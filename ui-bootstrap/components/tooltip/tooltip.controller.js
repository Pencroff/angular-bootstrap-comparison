/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('TooltipCtrl', TooltipCtrl);

    TooltipCtrl.$inject = ['$scope', '$sce'];

    function TooltipCtrl($scope, $sce) {
        $scope.dynamicTooltip = 'Hello, World!';
        $scope.dynamicTooltipText = 'dynamic';
        $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
    }

})(angular);