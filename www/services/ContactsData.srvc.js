(function () {
    'use strict';


    angular.module('mcontactListApp').factory('ContactDataSrcv', [ContactDataSrcv]);


    function ContactDataSrcv() {


        var contacts = [{
            "_id": "599266e3a1fa2cd0e0f84e2d",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "name": "Tammie Glass",
            "company": "RECRITUBE",
            "email": "tammieglass@recritube.com",
            "phone": "+1 (982) 505-2244",
            "address": "884 Micieli Place, Enetai, Indiana, 2324",
            "about": "Laboris est est fugiat velit excepteur aliqua culpa consectetur ad dolore. Cillum sint amet aute consectetur ullamco. Duis enim esse nostrud eu nisi dolore. Minim eiusmod ad dolor id ad dolor ullamco sit laboris incididunt cupidatat velit ut id. Mollit qui dolor consectetur deserunt duis incididunt pariatur veniam esse sint ipsum. Do culpa cupidatat fugiat consectetur laboris enim quis labore eu laboris pariatur. Magna ipsum mollit eiusmod laboris excepteur aliqua incididunt.\r\n",
            "avatarColor": "indigo-400"
}, {
            "_id": "599266e33a524df085d47719",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "name": "Carlene Wilder",
            "company": "QIMONK",
            "email": "carlenewilder@qimonk.com",
            "phone": "+1 (929) 598-2969",
            "address": "397 Amersfort Place, Morgandale, Louisiana, 9440",
            "about": "Laboris deserunt amet minim exercitation do elit irure magna proident aliqua dolore. Veniam dolore dolore sint eiusmod occaecat ea et adipisicing quis minim enim anim et voluptate. Dolor elit enim Lorem velit culpa irure quis officia mollit cillum voluptate amet.\r\n",
            "avatarColor": "teal-500"
}, {
            "_id": "599266e34fd291c123af1405",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "name": "Cathy Manning",
            "company": "KIGGLE",
            "email": "cathymanning@kiggle.com",
            "phone": "+1 (837) 465-3358",
            "address": "887 Reeve Place, Coloma, Illinois, 7435",
            "about": "Do magna dolore et irure sint elit id cupidatat excepteur excepteur irure. Laboris Lorem id velit laboris fugiat et nulla laborum laboris amet. Sint et ex in dolor magna eu laboris Lorem ut elit sit dolore. Et ad Lorem laborum qui elit aute sit aute cupidatat tempor amet excepteur. Voluptate eiusmod do enim irure. Et occaecat do ut do.\r\n",
            "avatarColor": "pink-700"
}, {
            "_id": "599266e3689143d70f64baa5",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "name": "Campos Copeland",
            "company": "DATAGENE",
            "email": "camposcopeland@datagene.com",
            "phone": "+1 (988) 423-2497",
            "address": "730 King Street, Galesville, Pennsylvania, 8840",
            "about": "Deserunt eiusmod occaecat laboris reprehenderit. Adipisicing mollit cupidatat do proident cupidatat adipisicing consectetur reprehenderit cupidatat reprehenderit duis esse. In dolor pariatur officia elit fugiat esse sit eu aute consequat velit ad nostrud duis. Duis exercitation quis excepteur dolore eu fugiat aliquip laborum voluptate qui. Sunt veniam ad reprehenderit dolor non ad sunt anim magna et quis et. Ea ea mollit reprehenderit consectetur cillum irure laboris dolor mollit ipsum. Eiusmod elit ea ea cupidatat eiusmod non minim ex ipsum amet sint.\r\n",
            "avatarColor": "orange-500"
}, {
            "_id": "599266e3b7b12d498894632b",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "name": "Bright Walters",
            "company": "HOPELI",
            "email": "brightwalters@hopeli.com",
            "phone": "+1 (849) 534-2469",
            "address": "151 Commerce Street, Bendon, North Dakota, 8006",
            "about": "Irure ea fugiat est voluptate nulla ipsum proident. Commodo in voluptate do pariatur quis id nulla. Ad ea minim mollit cillum commodo minim ut.\r\n",
            "avatarColor": "pink-700"
}, {
            "_id": "599266e3cf02ce6aee8521fd",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "name": "Calderon Simon",
            "company": "GEEKNET",
            "email": "calderonsimon@geeknet.com",
            "phone": "+1 (831) 569-2399",
            "address": "948 Waldorf Court, Knowlton, New Hampshire, 8686",
            "about": "Irure cupidatat irure pariatur duis fugiat ipsum exercitation id ad. Incididunt Lorem fugiat occaecat nisi culpa quis eiusmod. Deserunt ullamco veniam incididunt magna proident consectetur pariatur esse do eu est ipsum. Ex laborum aliqua anim adipisicing ex sit ut veniam. Sint dolore dolor id sint dolor occaecat enim.\r\n",
            "avatarColor": "green-600"
}, {
            "_id": "599266e30e7064ef9026fce8",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "name": "Michele Pittman",
            "company": "ZOUNDS",
            "email": "michelepittman@zounds.com",
            "phone": "+1 (896) 439-3040",
            "address": "431 Alice Court, Summerfield, Oklahoma, 5611",
            "about": "Adipisicing duis magna sunt ipsum. Est ut est veniam proident laborum est velit esse ex fugiat excepteur laborum amet velit. Laborum voluptate officia sunt aliquip aliqua labore ullamco proident id non eiusmod cupidatat. Cupidatat excepteur sint et enim id Lorem ipsum dolore.\r\n",
            "avatarColor": "yellow-700"
}, {
            "_id": "599266e374e517e5d6b9d1f6",
            "picture": "http://placehold.it/32x32",
            "age": 30,
            "name": "Gay Burgess",
            "company": "MITROC",
            "email": "gayburgess@mitroc.com",
            "phone": "+1 (812) 488-3499",
            "address": "784 Preston Court, Fingerville, Montana, 9053",
            "about": "Sint duis incididunt duis sint occaecat proident quis voluptate quis dolor. Dolor ad nulla duis Lorem non dolore culpa cillum. Sit nulla ut sint anim dolor elit consectetur culpa aliqua anim minim excepteur. Deserunt dolore proident eiusmod labore cupidatat anim culpa reprehenderit eu ea occaecat velit ea. Aliquip ullamco sunt do cillum sit magna non fugiat. Sunt aute tempor veniam commodo eu ipsum est excepteur minim. Voluptate sunt laboris id sunt esse qui reprehenderit ullamco.\r\n",
            "avatarColor": "indigo-700"
}, {
            "_id": "599266e3859ef11a9bbcaafd",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "name": "Corine Cole",
            "company": "BYTREX",
            "email": "corinecole@bytrex.com",
            "phone": "+1 (993) 582-3970",
            "address": "984 Maple Street, Williston, Colorado, 480",
            "about": "Qui fugiat enim labore minim Lorem cillum est velit. Commodo sint ut commodo sint mollit do proident magna incididunt. Nostrud culpa eu duis cupidatat veniam proident minim ut veniam nostrud ea et aliqua officia. Consectetur reprehenderit mollit in voluptate consequat officia laborum deserunt cupidatat officia fugiat aliqua proident. Mollit duis nisi voluptate labore mollit.\r\n",
            "avatarColor": "teal-700"
}, {
            "_id": "599266e3658d91565730f162",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "name": "Baxter Valdez",
            "company": "VANTAGE",
            "email": "baxtervaldez@vantage.com",
            "phone": "+1 (952) 434-3827",
            "address": "245 Cornelia Street, Clarence, Wisconsin, 1723",
            "about": "Laborum incididunt ut anim laboris non sint officia ex. Anim fugiat ipsum aliquip anim ex id consectetur ad minim excepteur ipsum occaecat reprehenderit. Deserunt id sit consequat fugiat mollit adipisicing.\r\n",
            "avatarColor": "green-500"
}, {
            "_id": "599266e3a2d5e46dde5a490d",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "name": "Vonda Kidd",
            "company": "PYRAMIS",
            "email": "vondakidd@pyramis.com",
            "phone": "+1 (890) 553-3780",
            "address": "914 Knapp Street, Grahamtown, Maine, 6864",
            "about": "Veniam irure pariatur enim cupidatat laborum pariatur officia non. Ex exercitation veniam duis fugiat magna. Reprehenderit non enim Lorem cillum. Dolore voluptate esse do nisi ad laborum sunt ea duis aliquip.\r\n",
            "avatarColor": "yellow-800"
}, {
            "_id": "599266e3d5a7f0c558b57154",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "name": "Wendi York",
            "company": "COMBOGEN",
            "email": "wendiyork@combogen.com",
            "phone": "+1 (827) 409-3874",
            "address": "613 Bridgewater Street, Alfarata, Mississippi, 5856",
            "about": "Excepteur mollit reprehenderit reprehenderit amet labore. Culpa fugiat exercitation duis eu nisi duis ex Lorem nisi et est consectetur cillum. Esse anim deserunt consectetur do consequat aliqua anim dolore. Aliquip magna exercitation ullamco aliqua nisi.\r\n",
            "avatarColor": "light-blue-900"
}, {
            "_id": "599266e396edd7e1f441b904",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "name": "June Aguilar",
            "company": "SYBIXTEX",
            "email": "juneaguilar@sybixtex.com",
            "phone": "+1 (981) 462-3298",
            "address": "205 Beayer Place, Edgar, Hawaii, 8951",
            "about": "Culpa Lorem et culpa aliqua pariatur quis ullamco enim nostrud ea adipisicing ullamco cupidatat. Non duis consectetur excepteur duis et. Proident qui dolor voluptate quis anim amet culpa excepteur cillum sint id amet cillum incididunt. Nisi deserunt reprehenderit sunt eiusmod culpa consequat. Tempor irure ipsum Lorem deserunt sit enim.\r\n",
            "avatarColor": "deep-orange-700"
}, {
            "_id": "599266e3677ae09d64dcb136",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "name": "Mildred Mendoza",
            "company": "YURTURE",
            "email": "mildredmendoza@yurture.com",
            "phone": "+1 (874) 487-2453",
            "address": "264 Vanderbilt Avenue, Hardyville, Arkansas, 957",
            "about": "Laboris consectetur id pariatur amet duis nisi minim aliquip reprehenderit ea minim deserunt excepteur laborum. Consequat adipisicing minim cillum quis veniam aute. Velit incididunt enim ad cillum aliquip tempor dolor commodo.\r\n",
            "avatarColor": "green-500"
}, {
            "_id": "599266e3ed5373e93eea3c77",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "name": "Glass Doyle",
            "company": "GYNK",
            "email": "glassdoyle@gynk.com",
            "phone": "+1 (958) 542-3484",
            "address": "234 Schenck Place, Monument, Oregon, 3580",
            "about": "Aliqua enim labore ad adipisicing ut nulla adipisicing consequat proident tempor. Labore consequat occaecat quis aliqua cillum sit. Aliquip deserunt quis ea magna incididunt occaecat irure Lorem deserunt proident.\r\n",
            "avatarColor": "red-600"
}, {
            "_id": "599266e3dcc45f72c95fe6ab",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "name": "Bridget Calhoun",
            "company": "MIXERS",
            "email": "bridgetcalhoun@mixers.com",
            "phone": "+1 (852) 432-2154",
            "address": "127 Brightwater Avenue, Dawn, New Mexico, 8510",
            "about": "Voluptate tempor duis sunt aute est aliqua nulla eiusmod quis. Reprehenderit proident qui velit deserunt ad adipisicing et. Est fugiat ipsum tempor ad incididunt et deserunt.\r\n",
            "avatarColor": "cyan-400"
}, {
            "_id": "599266e332ad5cc1de85e065",
            "picture": "http://placehold.it/32x32",
            "age": 29,
            "name": "Neva Marquez",
            "company": "ERSUM",
            "email": "nevamarquez@ersum.com",
            "phone": "+1 (997) 414-3071",
            "address": "793 Hanover Place, Haena, Idaho, 4956",
            "about": "Non eu velit exercitation quis veniam ut proident anim ullamco et exercitation magna mollit reprehenderit. Aliquip elit minim in adipisicing elit. Cillum irure dolore elit deserunt consectetur aute ut incididunt voluptate sit do non aute elit. Occaecat laborum labore consectetur dolor ullamco adipisicing ullamco cillum ex duis exercitation laboris est tempor. Est enim exercitation eiusmod sunt sint commodo. Dolore dolore cupidatat eu tempor excepteur nisi.\r\n",
            "avatarColor": "yellow-400"
}, {
            "_id": "599266e38aa899eefc00f253",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "name": "Tracey Woodard",
            "company": "NEWCUBE",
            "email": "traceywoodard@newcube.com",
            "phone": "+1 (809) 433-2211",
            "address": "998 Gunnison Court, Rose, California, 7988",
            "about": "Duis sit reprehenderit duis cillum labore et anim. Et nostrud labore quis est sint eu consequat ex sit commodo adipisicing nulla. Ad aliqua ea duis officia adipisicing incididunt excepteur laborum sint occaecat. Lorem quis laborum do sunt nisi culpa quis. Magna eu pariatur voluptate proident dolore irure id adipisicing occaecat laboris labore ipsum magna. Id sint incididunt veniam aute id ad qui veniam ex enim sunt pariatur. Mollit eu tempor adipisicing incididunt id consectetur nostrud occaecat commodo anim ipsum culpa esse.\r\n",
            "avatarColor": "light-blue-500"
}, {
            "_id": "599266e39f1d7e69411752cc",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "name": "Ronda Cooper",
            "company": "ENTOGROK",
            "email": "rondacooper@entogrok.com",
            "phone": "+1 (952) 427-2951",
            "address": "665 Arion Place, Levant, Minnesota, 9379",
            "about": "Adipisicing nisi sint commodo culpa veniam tempor elit ullamco est eiusmod. Sit incididunt culpa minim esse et do nulla occaecat labore exercitation ut. Ad ea consequat aliquip ullamco proident laborum ea qui enim anim qui laborum labore.\r\n",
            "avatarColor": "cyan-500"
}, {
            "_id": "599266e3cf0d6e531ffd8722",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "name": "Le Bell",
            "company": "POLARIUM",
            "email": "lebell@polarium.com",
            "phone": "+1 (849) 511-2878",
            "address": "753 Taaffe Place, Maybell, Marshall Islands, 9055",
            "about": "Nulla dolore ullamco culpa excepteur labore non. Irure nostrud est tempor ex. Duis velit amet sint enim.\r\n",
            "avatarColor": "deep-purple-500"
}];



        return {
            contacts: contacts
        }


    }
})();