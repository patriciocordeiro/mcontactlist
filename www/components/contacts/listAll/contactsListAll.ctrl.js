(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactListAllCtrl', ['ContactDataSrcv', '$mdDialog', ContactListAllCtrl]);


    function ContactListAllCtrl(ContactDataSrcv, $mdDialog) {

        /*bind this controller to a vm*/
        var vm = this;

        //get contacts from service
        vm.contacts = ContactDataSrcv.contacts
        console.log(ContactDataSrcv.contacts);


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
                    clickOutsideToClose: false,
                    locals: {
                        contact: vm.contactToEdit
                    }
                })
                .then(function (newContact) {
                    /*Dialog confirmed*/
                    console.log(newContact);
                    //update contact on service
                    vm.contacts.push(newContact);

                }, function () {

                    /*Dialog canceled*/
                });
        };



    }



})();