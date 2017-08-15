(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactListAllCtrl', ['ContactDataSrcv', ContactListAllCtrl]);


    function ContactListAllCtrl(ContactDataSrcv) {

        /*bind this controller to a vm*/
        var vm = this;

        //get contacts from service
        vm.contacts = ContactDataSrcv.contacts
        console.log(ContactDataSrcv.contacts);

    }



})();