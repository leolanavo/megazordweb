function ModalService($modal) {

    var _factory = {};
    var statusModalInstance = null;

    _factory.dismissModal = function () {
        if (statusModalInstance)
            statusModalInstance.close();
    };

    _factory.showStatusModal = function (msg, cancelButtonText, okButtonText, callback) {
        _factory.dismissModal();

        statusModalInstance = $modal.open({
            templateUrl: 'components/modal-status/modal-status.html',
            controller: 'ModalStatusCtrl',
            controllerAs: 'vm',
            size: 'md',
            backdrop: 'static',
            keyboard: false,
            resolve: {
                message: function () {
                    return msg;
                },
                okButtonText : function () {
                    return okButtonText;
                },
                cancelButtonText : function () {
                    return cancelButtonText;
                }
            }
        });

        statusModalInstance.result.then(function (obj) {
            callback(obj);
        });

        return statusModalInstance;
    };

    return _factory;
}

angular.module("megazord").factory("ModalService", ModalService);
