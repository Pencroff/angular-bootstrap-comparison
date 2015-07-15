/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('RatingCtrl', RatingCtrl);

    RatingCtrl.$inject = ['$scope'];

    function RatingCtrl($scope) {
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
    }

})(angular);