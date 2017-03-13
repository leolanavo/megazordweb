'use strict';

function finalizaPCCtrl(toaster, BugReportService, $scope, $timeout, $stateParams) {

var vm = this;

    vm.entity = {};

    vm.total_items = 0;
    vm.page_size = 10;
    vm.page = 1;

    $scope.categorias = {
        "tipo": [
            { "categoria": "virus" },
            { "categoria": "travando" },
            { "categoria": "não liga" }
        ]
    }

    $scope.status = {
        "tipo": [
            { "categoria": "Finalizada" },
            { "categoria": "Andamento" },
            { "categoria": "À fazer" }
        ]
    }

    $scope.listaReports = {
        "report": [
            { "id": "0", "name": "Duilio", "username": "duilioelias", "email": "duilio@usp.br", "status": "finalizada", "numero": "3" },
            { "id": "1", "name": "Duilio", "username": "duilio", "email": "duilio@usp.br", "status": "andamento", "numero": "2" },
            { "id": "2", "name": "Duilio", "username": "satan", "email": "duilio@usp.br", "status": "nao-processada", "numero": "1" }
        ]
    }

    $scope.user = {};
    $scope.user.id = $stateParams.id;
   

    /*
    vm.changeStatus = function (id) {

    };

    vm.getAll = function () {
        getAll();
    };


    function getAll() {
        BugReportService.getAll({
            name: vm.entity.name,
            page: vm.page,
            page_size: vm.page_size
        }).then(function (data) {
            vm.gridOptions.data = data;
            vm.total_items = data[0] ? data[0].total_items : 0;
        }, function (error) {
            toaster.info("Atenção", error);
        })
    }

    getAll();

    vm.newCategory = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/bugreport/categoryModal.html',
            controller: 'CategoryController',
            resolve: {
                customer: function () {
                    return vm.entity;
                }
            }
        });

    };
    */
}


angular.module('megazord').controller('finalizaPCCtrl', finalizaPCCtrl);