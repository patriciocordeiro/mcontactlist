(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactListAllCtrl', ['ContactDataSrcv', '$mdDialog', '$rootScope', ContactListAllCtrl]);


    function ContactListAllCtrl(ContactDataSrcv, $mdDialog, $rootScope) {


        /*bind this controller to a vm*/
        var vm = this;

        /*set the page title*/
        $rootScope.pageTitle = 'Lista de contatos';
        /*Set page header color according to contact avatar color*/
        $rootScope.pageHeaderColor = "primary";

        /*Material design colors*/
        var colorsNames = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"];

        /*Some material design colorsNumbers*/
        var colorsNumbers = ["400", "500", "600", "700", "800", "900"];

        //get contacts from service
        vm.contacts = ContactDataSrcv.contacts

        /************ Dialog for add new contact *************/

        vm.openAddContactDialg = function (ev) {

            vm.contactToEdit = angular.copy(vm.selectedContact);
            $mdDialog.show({
                    controller: ('DialogCtrl', function ($scope) {

                        $scope.newContact = {};
                        $scope.cancelDialg = function () {
                            $scope.newContact = {};
                            $mdDialog.cancel();
                        };

                        $scope.confirmDialg = function (answer) {
                            $mdDialog.hide(answer);
                        };

                    }),
                    templateUrl: 'components/contacts/listAll/contactAdd.dialg.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    fullscreen: true,
                    clickOutsideToClose: false,
                    locals: {
                        contact: vm.contactToEdit
                    }
                })
                .then(function (newContact) {
                    /*Dialog confirmed*/
                    console.log(newContact);

                    // add a avatar color to the contact
                    var colorsNamesIndex = Math.round(Math.random() * (colorsNames.length - 1));
                    var colorsNumbersIndex = Math.round(Math.random() * (colorsNumbers.length - 1));
                    newContact.avatarColor = colorsNames[colorsNamesIndex] + "-" + colorsNumbers[colorsNumbersIndex];

                    //Add an id
                    newContact._id = Date.now().toString();
                    //Add new  contact on service
                    vm.contacts.push(newContact);

                }, function () {

                    /*Dialog canceled*/
                });
        };

        /*Clear search text*/
        vm.clearSearchText = function () {
            vm.searchText = "";

        }



    }



})();