/**
 * Created by sergii.danilov on 07/07/2015.
 */


angular
    .module('app', ['ui.bootstrap'])
    .config(AppConfig);

AppConfig.$inject= ['$locationProvider'];

function AppConfig ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}