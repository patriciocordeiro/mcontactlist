'use strict';
angular.module('mcontactListApp', ['ngMaterial', 'ui.router'])


.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('contactsAll', {
            url: '/contactsAll',
            templateUrl: 'components/contacts/contactsAll.html',
            //                    controller: 'PostoListctrl as vm',
        })

    $urlRouterProvider.otherwise('/contactsAll');

}]);