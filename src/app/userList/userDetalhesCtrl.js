'use strict';

function userDetalhesCtrl($http, toaster, BugReportService, $scope, $timeout, $stateParams) {

	$scope.aumentaQtd = function() {

		$scope.campo = document.getElementById("percentual")

		$scope.campo.value= Number($scope.campo.value) + 1;

	}

	$scope.diminuiQtd = function () {

		$scope.campo = document.getElementById("percentual")

		$scope.campo.value= $scope.campo.value - 1;

	}

	if($stateParams!=null){
	$http.get("https://polux-dev.linux.ime.usp.br:3000/api/v1/user?user="+$stateParams.id)
        .then(function(response) {
            if(response!=null){
               $scope.user = response.data;
               
            }
        },function(error){
            toaster.info("Atenção:", error);
        });
    }
	$scope.user = {};
	$scope.user.id = $stateParams.id;

}


angular.module('megazord').controller('userDetalhesCtrl', userDetalhesCtrl);