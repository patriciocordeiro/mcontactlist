(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactDetailsCtrl', ['ContactDataSrcv', '$stateParams', '$filter', ContactDetailsCtrl]);


    function ContactDetailsCtrl(ContactDataSrcv, $stateParams, $filter) {

        /*bind this controller to a vm*/
        var vm = this;

        //get contacts from service
        vm.contacts = ContactDataSrcv.contacts;

        var contactId = $stateParams.id;

        console.log(contactId);

        if (contactId == null) {

            vm.showErrorMsg = true;
            vm.errorMsg = 'Contacto não encontrado'
        } else {

            vm.showErrorMsg = false;

            vm.selectedContact = $filter('filter')(vm.contacts, {
                _id: contactId
            })[0];
        }

        console.log(vm.selectedContact);

    }



})();