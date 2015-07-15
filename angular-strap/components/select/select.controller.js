/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(anular) {
    'use strict';
    angular
        .module('app')
        .controller('SelectCtrl', SelectCtrl);

    SelectCtrl.$inject = ['$scope', '$sce'];

    function SelectCtrl($scope, $sce) {
        $scope.selectedIcon = '';
        $scope.selectedIcons = ['Cloud', 'Heart'];
        $scope.icons = [
            {value: 'Gear', label: $sce.trustAsHtml('<i class="glyphicon glyphicon-cog"></i> Gear')},
            {value: 'Cloud', label: $sce.trustAsHtml('<i class="glyphicon glyphicon-cloud"></i> Cloud')},
            {value: 'Heart', label: $sce.trustAsHtml('<i class="glyphicon glyphicon-heart"></i> Heart')},
            {value: 'Camera', label: $sce.trustAsHtml('<i class="glyphicon glyphicon-facetime-video"></i> Camera')}
        ];

        $scope.selectedMonth = 0;
        $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
})(angular);