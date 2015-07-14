/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular){
    'use strict';
    angular
        .module('app')
        .controller('ScrollController', ScrollController);
    ScrollController.$inject=['$anchorScroll', '$location', '$timeout'];

    function ScrollController($anchorScroll, $location, $timeout) {
        $timeout(function() {
            var hash = $location.hash();
            console.log(hash, $location);
            $anchorScroll(hash);
        }, 1500);
    }
})(angular);