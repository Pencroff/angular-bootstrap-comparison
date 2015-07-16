/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular){
    'use strict';
    angular
        .module('app')
        .controller('ScrollController', ScrollController);
    ScrollController.$inject=['$anchorScroll', '$timeout'];

    function ScrollController($anchorScroll, $timeout) {
        $timeout(function() {
            $anchorScroll();
        }, 250);
    }
})(angular);