'use strict';

function CategoryController( $scope, $modalInstance, BugReportServiceCategories, toaster) {

    $scope.entity = {};

    $scope.total_items = 0;
    $scope.page_size = 20;
    $scope.page = 1;


    var detailsLinkCell = '<div class="ngCellText" ng-class="col.colIndex()">' +
        '  <a ui-sref="index.bugReport({ id: grid.getCellValue(row,col)})">Detalhes</a>' +
        '</div>';

    $scope.gridOptions = {
        enableColumnResizing: true,
        paginationPageSize: 20,
        columnDefs: [
            {name: 'Detalhes', field: 'id', cellTemplate: detailsLinkCell},
            {name: 'Nome', field: 'name'}
        ]
    };

    $scope.getAll = function () {
        getAll();
    };

    function getAll() {
        BugReportServiceCategories.getAll({
            name: $scope.entity.name,
            page: $scope.page,
            page_size: $scope.page_size
        }).then(function (data) {
            $scope.gridOptions.data = data;
            $scope.total_items = data[0] ? data[0].total_items : 0;
        }, function (error) {
            toaster.info("Atenção", error);
        })
    }

    getAll();


    $scope.ok = function () {
        BugReportServiceCategories.create({"name": $scope.name}).then(function (data) {
                toaster.success("Sucesso", "Sua categoria foi criada com sucesso!!!");
                getAll();
            }, function (error) {
                toaster.info("Atenção", error);

            });
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

angular.module('megazord').controller('CategoryController', CategoryController);
