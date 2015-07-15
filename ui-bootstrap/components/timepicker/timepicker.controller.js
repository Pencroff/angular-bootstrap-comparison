/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('TimepickerCtrl', TimepickerCtrl);

    TimepickerCtrl.$inject = ['$scope', '$log'];

    function TimepickerCtrl($scope, $log) {
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = ! $scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.mytime = d;
        };

        $scope.changed = function () {
            $log.log('Time changed to: ' + $scope.mytime);
        };

        $scope.clear = function() {
            $scope.mytime = null;
        };
    }

})(angular);