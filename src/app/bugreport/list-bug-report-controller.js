'use strict';

function ListBugReportCtrl(toaster, BugReportService, $scope, BugReportServiceList, $stateParams) {

    $scope.status = {
        "tipo": [
            { "categoria": "Finalizada" },
            { "categoria": "Andamento" },
            { "categoria": "À fazer" }
        ]
    };


    $scope.changeStatus  = function (status,id){
        console.log(status);

        if (status == 'Finalizada') {
            status = 'finalizada';
        }
        if (status == 'Andamento') {
            status = 'andamento';
        }
        if (status == 'À fazer') {
            status = 'nao-processada';
        }

        if (status != undefined) {
        $scope.listaReports.report[id].status = status;
        }
    };

  function getAll() {
    BugReportServiceList.getAll({
    }).then(function (data) {
      $scope.listaReports = {
        "report": data
      };
      console.log($scope.listaReports);
    }, function (error) {
      toaster.info("Atenção", error);
    })
  }
  getAll();
}

angular.module('megazord').controller('ListBugReportCtrl', ListBugReportCtrl);
