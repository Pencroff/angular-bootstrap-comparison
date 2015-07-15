/**
 * Created by sergii.danilov on 14/07/2015.
 */
(function(angular) {
    'use strict';
    angular
        .module('app')
        .controller('CarouselCtrl', CarouselCtrl);

    CarouselCtrl.$inject = ['$scope'];

    function CarouselCtrl($scope) {
        var vm = this;
        vm.myInterval = 5000;
        vm.slides = [];
        vm.addSlide = function() {
            var len = vm.slides.length,
                newWidth = 600 + len + 1;
            vm.slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][len % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][len % 4]
            });
        };
        for (var i=0; i<4; i++) {
            vm.addSlide();
        }
    }
})(angular);