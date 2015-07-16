/**
 * Created by sergii.danilov on 07/07/2015.
 */


angular
    .module('app', [
        'ngSanitize',

        'ui.select',

        'ngTouch',
        'ui.grid',
        'ui.grid.cellNav',
        'ui.grid.edit',
        'ui.grid.resizeColumns',
        'ui.grid.pinning',
        'ui.grid.selection',
        'ui.grid.moveColumns',
        'ui.grid.exporter',
        'ui.grid.importer',
        'ui.grid.grouping',

        'uiGmapgoogle-maps'
    ])
    .config(AppConfig);

AppConfig.$inject= ['$locationProvider'];

function AppConfig ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}