'use strict';

function NewUserCtrl($state, $stateParams, UserService, toaster) {

    var vm = this;

    vm.urlID = $stateParams.id;

    vm.entity = {is_active: true};

    if (vm.urlID) {
        UserService.get(vm.urlID).then(function (data) {
            vm.entity = data;
        }, function (error) {
            toaster.info("Atenção", error);
        })
    }

    vm.submit = function (isValid) {
        vm.submitted = true;

        if (isValid) {
            if (vm.urlID) {
                UserService.update(vm.entity).then(function (data) {
                    vm.entity = data;
                }, function (error) {
                    toaster.info("Atenção", error);
                });
            } else {
                UserService.create(vm.entity).then(function (data) {
                    vm.entity = data;
                }, function (error) {
                    toaster.info("Atenção", error);
                });
            }
        }
    };

    vm.delete = function () {
        UserService.delete(vm.entity).then(function (data) {
            $state.go($state.current, {}, {reload: true});
        }, function (error) {
            toaster.info("Atenção", error);
        });
    };
}

angular.module('megazord').controller('NewUserCtrl', NewUserCtrl);
