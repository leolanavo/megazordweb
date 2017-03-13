'use strict';

function BugReportCtrl(UserService, BugReportServiceCategories, BugReportService, toaster, $scope, $rootScope, $stateParams) {

    $scope.bugReport = {};

    $scope.bugReport.id = $stateParams.id;
    console.log($scope.bugReport.id);

    $scope.bugReport.submit = function() {
        $scope.bugReport = $rootScope.user;
        BugReportService.create($scope.bugReport).then(function(data) {

            $scope.bugReport = data;
            toaster.success("Sucesso", "Seu report foi realizado com sucesso, Muito obrigado!!!");
            console.log(data);

        }, function(error) {
            toaster.info("Atenção", error);

        });
    };

    function getCategories() {
        BugReportServiceCategories.getAll().then(function(data) {
            $scope.categorias = data;
        }, function(error) {
            toaster.info("Atenção", error);
        });
    }

    $scope.categories = function() {
        getCategories();
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


    getCategories();

    function getUser() {
        UserService.getAll()
            .then(function(data) {
                $rootScope.user = data;
                console.log(data);
            }, function(error) {
                toaster.info("Atenção", error);
            });
    }

    getUser();

}

angular.module('megazord').controller('BugReportCtrl', BugReportCtrl);
