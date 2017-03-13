'use strict';

function detalheBugReportCtrl($scope, $stateParams) {

    $scope.herdaId = $stateParams.id;

    $scope.detalheReport = [];

    getId($scope.herdaId);

    function getId (id){
        $scope.detalheReport = $scope.listaReports.report[id - 1];
    }


}

angular.module('megazord').controller('detalheBugReportCtrl', detalheBugReportCtrl);
