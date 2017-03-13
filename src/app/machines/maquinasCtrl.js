'use strict';

function maquinasCtrl($http, $scope, toaster) {

    $scope.maquinasLinuxime = 
         [
            { "id": "1","nameId":"megaman" ,"name": "Megaman", "status": "Livre", "url": "../assets/maquinas/megaman.png" },
            { "id": "2","nameId":"yoshi", "name": "Yoshi", "status": "Livre", "url": "../assets/maquinas/yoshi.png" },
            { "id": "3","nameId":"link" ,"name": "Link", "status": "Livre", "url": "../assets/maquinas/link.jpg" },
            { "id": "4","nameId":"alexkid", "name": "Alex Kid", "status": "Livre", "url": "../assets/maquinas/alex.png" },
            { "id": "5","nameId":"bomberman", "name": "Bomberman", "status": "Livre", "url": "../assets/maquinas/bomberman.jpg" },
            { "id": "6","nameId":"conker", "name": "Conker", "status": "Livre", "url": "../assets/maquinas/conker.png" },
            { "id": "7","nameId":"crash", "name": "Crash", "status": "Livre", "url": "../assets/maquinas/crash.jpg" },
            { "id": "8","nameId":"crono", "name": "Crono", "status": "Livre", "url": "../assets/maquinas/crono.jpg" },
            { "id": "9","nameId":"fox", "name": "Fox", "status": "Livre", "url": "../assets/maquinas/fox.jpg" },
            { "id": "10","nameId":"kirby", "name": "Kirby", "status": "Livre", "url": "../assets/maquinas/kirby.png" },
            { "id": "11","nameId":"donkeykong", "name": "Donkey Kong", "status": "Livre", "url": "../assets/maquinas/kong.png" },
            { "id": "12","nameId":"pacman", "name": "Pacman", "status": "Livre", "url": "../assets/maquinas/pacman.jpeg" },
            { "id": "14", "nameId":"rayman","name": "Rayman", "status": "Livre", "url": "../assets/maquinas/rayman.jpg" },
            { "id": "15", "nameId":"spyro", "name": "Spyro", "status": "Livre", "url": "../assets/maquinas/spyro.gif" },
            { "id": "16", "nameId":"samus", "name": "Samus", "status": "Livre", "url": "../assets/maquinas/samus.jpg" },
            { "id": "17", "nameId":"sonic", "name": "Sonic", "status": "Livre", "url": "../assets/maquinas/sonic.gif" },
            { "id": "18", "nameId":"tails", "name": "Tails", "status": "Livre", "url": "../assets/maquinas/tails.png" },
            { "id": "19", "nameId":"zero", "name": "Zero", "status": "Livre", "url": "../assets/maquinas/zero.png" },
            { "id": "20", "nameId":"bigdaddy", "name": "Big Daddy", "status": "Livre", "url": "../assets/maquinas/bigdaddy.png" },
            { "id": "21", "nameId":"klonoa", "name": "Klonoa", "status": "Livre", "url": "../assets/maquinas/klonoa.jpg" },
            { "id": "22", "nameId":"cloud", "name": "Cloud", "status": "Livre", "url": "../assets/maquinas/cloud.jpg" },
            { "id": "23", "nameId":"laracroft", "name": "Lara Croft", "status": "Livre", "url": "../assets/maquinas/lara.jpg" },
            { "id": "24", "nameId":"masterchief", "name": "Master Chief", "status": "Livre", "url": "../assets/maquinas/masterchief.jpg" },
            { "id": "25", "nameId":"snake", "name": "Snake", "status": "Livre", "url": "../assets/maquinas/snake.png" },
            { "id": "26", "nameId":"alucard", "name": "Alucard", "status": "Livre", "url": "../assets/maquinas/alucard.jpg" },
            { "id": "27", "nameId":"jill", "name": "Jill", "status": "Livre", "url": "../assets/maquinas/jill.png" },
            { "id": "28", "nameId":"dante", "name": "Dante", "status": "Livre", "url": "../assets/maquinas/dante.png" },
            { "id": "29", "nameId":"kratos", "name": "Kratos", "status": "Livre", "url": "../assets/maquinas/kratos.jpg" },
            { "id": "29", "nameId":"blackmage", "name": "Black Mage", "status": "Livre", "url": "../assets/maquinas/blackmage.jpg" },
            { "id": "29", "nameId":"glados", "name": "Glados", "status": "Livre", "url": "../assets/maquinas/glados.jpg" },
            { "id": "29", "nameId":"guybrush", "name": "Guy Brush", "status": "Livre", "url": "../assets/maquinas/guybrush.png" },
            { "id": "29", "nameId":"gordon", "name": "Gordon", "status": "Livre", "url": "../assets/maquinas/gordon.jpg" }
        ];

    $scope.maquinasBcc =  [
            { "id": "1","nameId":"ruby", "name": "Ruby", "status": "Livre", "url": "../assets/maquinas/ruby-original.svg" },
            { "id": "2","nameId":"php", "name": "Php", "status": "Livre", "url": "../assets/maquinas/php-plain.svg" },
            { "id": "3","nameId":"python", "name": "Python", "status": "Livre", "url": "../assets/maquinas/python-original.svg" },
            { "id": "4","nameId":"java", "name": "Java", "status": "Livre", "url": "../assets/maquinas/java-plain.svg" },
            { "id": "5","nameId":"c", "name": "C", "status": "Livre", "url": "../assets/maquinas/c-plain.svg" },
            { "id": "6","nameId":"lisp", "name": "Lisp", "status": "Livre", "url": "../assets/maquinas/lisp.png" },
            { "id": "7","nameId":"assembly", "name": "Assembly", "status": "Livre", "url": "../assets/maquinas/assembly.png" },
            { "id": "8","nameId":"fortran", "name": "Fortran", "status": "Livre", "url": "../assets/maquinas/fortran.png" },
            { "id": "9","nameId":"haskell", "name": "Haskell", "status": "Livre", "url": "../assets/maquinas/haskell.png" },
            { "id": "10","nameId":"prolog", "name": "Prolog", "status": "Livre", "url": "../assets/maquinas/prolog.png" },
            { "id": "11","nameId":"lua", "name": "Lua", "status": "Livre", "url": "../assets/maquinas/lua.png" },
            { "id": "12","nameId":"scheme", "name": "Scheme", "status": "Livre", "url": "../assets/maquinas/scheme.jpg" },
            { "id": "13", "nameId":"pascal", "name": "Pascal", "status": "Livre", "url": "../assets/maquinas/logopascal.gif" },
            { "id": "14", "nameId":"perl", "name": "Perl", "status": "Livre", "url": "../assets/maquinas/perl.jpg" }
        ];
    

    $http.get("https://polux-dev.linux.ime.usp.br:3000/api/v1/user/maquinas")
        .then(function(response) {
            if(response!=null){
                for (var i = $scope.maquinasBcc.length - 1; i >= 0; i--) {
                    for (var maquina in response.data) {
                        if($scope.maquinasBcc[i].nameId == maquina){
                            $scope.maquinasBcc[i].status = "Ocupada";
                            /*$scope.maquinasBcc[i].user = maquina.maquina;*/
                            break;
                        }
                    }
                }

                for (var i = $scope.maquinasLinuxime.length - 1; i >= 0; i--) {
                    for (var maquina in response.data) {
                        if($scope.maquinasLinuxime[i].nameId == maquina){
                            $scope.maquinasLinuxime[i].status = "Ocupada";
                            /*$scope.maquinasLinuxime[i].user = maquina.maquina;*/
                            break;
                        }
                    }
                }
            }
        },function(error){
            toaster.info("Atenção:", error);
        });
}


angular.module('megazord').controller('maquinasCtrl', maquinasCtrl);
