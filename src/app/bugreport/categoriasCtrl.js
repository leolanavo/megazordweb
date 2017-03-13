'use strict';

function categoriasCtrl($http, toaster, BugReportServiceCategories,$scope) {

    $scope.categorias = ["Mouse Quebrado", "Monitor Quebrado"];

    $scope.adicionaCategoria = function(name) {
      $scope.categorias.push(name);
    }

     $http.get("https://polux-dev.linux.ime.usp.br:3000/api/v1/bug_report_categories")
        .then(function(response) {
            if(response!=null){
               $scope.categorias = response.data;
               console.log($scope.categorias); 
               
            }
        },function(error){
            toaster.info("Atenção:", error);
        });

}


angular.module('megazord').controller('categoriasCtrl', categoriasCtrl);
