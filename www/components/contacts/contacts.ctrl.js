(function () {
    'use strict';


    angular.module('mcontactListApp').controller('ContactListAllCtrl', ['ContactDataSrcv', ContactListAllCtrl]);


    function ContactListAllCtrl(ContactDataSrcv) {

        /*bind this controller to a vm*/
        var vm = this;

        console.log(ContactDataSrcv.contacts);



    }



})();