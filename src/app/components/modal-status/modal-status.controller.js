function ModalStatusCtrl($modalInstance, message, okButtonText, cancelButtonText) {

    var vm = this;

    vm.message = message;
    vm.okButtonText = okButtonText;
    vm.cancelButtonText = cancelButtonText;

    vm.ok = function () {
        $modalInstance.close();
    };

    vm.cancel = function () {
        $modalInstance.dismiss();
    };
}

angular.module("megazord").controller("ModalStatusCtrl", ModalStatusCtrl);
