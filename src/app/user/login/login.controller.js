'use strict';

function LoginCtrl($rootScope, $state, AuthService, toaster) {
    vm.submit = function (isValid) {
        vm.submitted = true;

        if (isValid) {

            AuthService.login(vm.user,
                function (res) {
                    $state.go("index.main");
                    toaster.success("Bem vindo!");
                },
                function (err) {
                    toaster.info("Erro ao efetuar o login.", err.error.description);
                });

        }
    };

}


angular.module('megazord').controller('LoginCtrl', LoginCtrl);
