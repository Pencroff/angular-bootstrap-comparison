/**
 * Created by sergii.danilov on 07/07/2015.
 */


angular
    .module('app', [
        'mgcrea.ngStrap'
        //'mgcrea.ngStrap.affix',
        //'mgcrea.ngStrap.aside',
        //'mgcrea.ngStrap.navbar',
        //'mgcrea.ngStrap.select',
        //'mgcrea.ngStrap.scrollspy'
    ])
    .config(AppConfig);

AppConfig.$inject= ['$locationProvider'];

function AppConfig ($locationProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
}