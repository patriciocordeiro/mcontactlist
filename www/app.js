'use strict';
angular.module('mcontactListApp', ['ngMaterial', 'ui.router', 'ui.utils.masks'])


.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('app', {
        abstract: true,
        url: '^',
        template: '<ui-view/>',
    })

    .state('app.contactsAll', {
            url: '/contactsAll',
            templateUrl: 'components/contacts/listAll/contactsAll.html',
            controller: 'ContactListAllCtrl as vm',
        })
        .state('app.contactDetails', {
            url: '/contactsAll/:id',
            templateUrl: 'components/contacts/details/contactsDetails.html',
            controller: 'ContactDetailsCtrl as vm',
        })

    $urlRouterProvider.otherwise('/contactsAll');

}]);