/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(anular) {
    'use strict';
    angular
        .module('app')
        .config(AsideConfig)
        .controller('AsideCtrl', AsideCtrl);

    AsideConfig.$inject = ['$asideProvider'];
    function AsideConfig($asideProvider) {
        angular.extend($asideProvider.defaults, {
            container: 'body',
            html: true
        });
    }

    AsideCtrl.$inject = ['$scope', '$sce'];

    function AsideCtrl($scope, $sce) {
        $scope.aside = {title: 'Title', content: $sce.trustAsHtml('Hello Aside<br />This is a multiline message!')};
    }
})(angular);