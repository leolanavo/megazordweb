'use strict';

function CustomerCtrl(toaster, CustomerService, focus) {
    var vm = this;

    vm.entity = {};

    vm.total_items = 0;
    vm.page_size = 40;
    vm.page = 1;

    focus('search');


    var detailsLinkCell = '<div class="ngCellText" ng-class="col.colIndex()">' +
        '  <a ui-sref="index.newCustomer({ id: grid.getCellValue(row,col)})">Detalhes</a>' +
        '</div>';

    vm.gridOptions = {
        enableColumnResizing: true,
        paginationPageSize: 40,
        columnDefs: [
            {name: 'Detalhes', field: 'id', cellTemplate: detailsLinkCell},
            {name: 'Nome', field: 'name'},
            {name: 'CPF ou CNPJ', field: 'cpf_cnpj'},
            {name: 'Email', field: 'email'},
            {name: 'Data de Cadastro', field: 'created_at', cellFilter: 'date:\'dd/MM/yyyy HH:mm\''}
        ]
    };

    vm.getAll = function () {
        getAll();
    };

    function getAll() {
        CustomerService.getAll({
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
}


angular.module('megazord').controller('CustomerCtrl', CustomerCtrl);
