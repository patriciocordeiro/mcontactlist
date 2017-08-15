'use strict';
angular.module('mcontactListApp', ['ngMaterial', 'ui.router'])


.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('contactsAll', {
            url: '/contactsAll',
            templateUrl: 'components/contacts/contactsAll.html',
            controller: 'ContactListAllCtrl as vm',
        })

    $urlRouterProvider.otherwise('/contactsAll');

}]);