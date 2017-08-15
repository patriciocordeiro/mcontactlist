(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactDetailsCtrl', ['ContactDataSrcv', '$stateParams', '$filter', '$mdDialog', '$state', ContactDetailsCtrl]);


    function ContactDetailsCtrl(ContactDataSrcv, $stateParams, $filter, $mdDialog, $state) {

        /*bind this controller to a vm*/
        var vm = this;
        //get contacts from service
        vm.contacts = ContactDataSrcv.contacts;

        /*Get the selected contact using its id */
        var contactId = $stateParams.id;
        if (contactId === null) {
            vm.showErrorMsg = true;
            vm.errorMsg = 'Contacto não encontrado'
        } else {

            vm.showErrorMsg = false;

            vm.selectedContact = $filter('filter')(vm.contacts, {
                _id: contactId
            })[0];
        }


        /************ Dialog for contact edit *************/

        vm.openEditContactDialg = function (ev) {

            vm.contactToEdit = angular.copy(vm.selectedContact);
            $mdDialog.show({
                    controller: ('DialogCtrl', function (contact, $scope) {

                        $scope.selectedContact = contact;
                        $scope.cancelDialg = function () {
                            $mdDialog.cancel();
                        };

                        $scope.confirmDialg = function (answer) {
                            $mdDialog.hide(answer);
                        };

                    }),
                    templateUrl: 'components/contacts/details/contactEdit.dialg.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    locals: {
                        contact: vm.contactToEdit
                    }
                })
                .then(function (editedContact) {
                    /*Dialog confirmed*/
                    // update contact
                    vm.selectedContact = editedContact;

                    //update contact on service
                    var idx = 0;
                    /*loop trougth the all contacts */
                    angular.forEach(vm.contacts, function (val) {
                        if (val._id === editedContact._id) {
                            //                      replace the contact with new values
                            vm.contacts[idx] = angular.copy(editedContact);
                        }
                        idx++;
                    })

                }, function () {

                    /*Dialog canceled*/
                });
        };

        /************* Remove contact *************/
        vm.confirmRemoveContact = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Remover contato')
                .textContent('Tem certeza de que deseja remover este contato?')
                .ariaLabel('remove contact confirm')
                .targetEvent(ev)
                .ok('Sim')
                .cancel('Cancelar')
            $mdDialog.show(confirm).then(function () {
                /*operation confirmed*/
                var idx = 0;
                /*loop trougth the all contacts */
                angular.forEach(vm.contacts, function (val) {
                    if (val._id === vm.selectedContact._id) {
                        //                      replace the contact with new values
                        vm.contacts.splice(idx, 1);
                    }
                    idx++;
                })
                $state.go('app.contactsAll');

            }, function () {
                /*operation cancelled*/
            });
        };

    }



})();