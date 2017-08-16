'use strict';
angular.module('mcontactListApp', ['ngMaterial', 'ui.router', 'ui.utils.masks'])

.run(["$rootScope", function ($rootScope) {

    /*Sets the page header title dynamically*/
    $rootScope.pageTitle = 'Lista de contatos';
    /*show / hide back button on page header*/
    $rootScope.showBackButton = true;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (toState.name === 'app.contactDetails') {
            $rootScope.showBackButton = true;
        } else {
            $rootScope.showBackButton = false;
        }
    })

}])



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