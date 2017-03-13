'use strict';

function userListCtrl($http, toaster, BugReportService, $scope, $timeout, $stateParams) {


    $scope.userList = [];
    $http.get("https://polux-dev.linux.ime.usp.br:3000/api/v1/user/all")
        .then(function(response) {
            if(response!=null){
               $scope.userList = response.data;
               
            }
        },function(error){
            toaster.info("Atenção:", error);
        });
}


angular.module('megazord').controller('userListCtrl', userListCtrl);