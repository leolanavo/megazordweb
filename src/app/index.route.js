(function() {
  'use strict';

  angular
    .module('megazord')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // localStorageServiceProvider.setPrefix('megazord');
    $stateProvider
      .state('index', {
        abstract: true,
        url: "/index",
        templateUrl: "app/components/common/content.html"
      })
        .state('index.main', {
          url: "/main",
          templateUrl: "app/main/main.html",
          controller: "MainCtrl",
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.bugReport', {
          url: "/bug-report/:id",
          templateUrl: "app/bugreport/bug-report.html",
          controller: "BugReportCtrl",
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.listBugReport', {
          url: "/list-bug-report",
          templateUrl: "app/bugreport/list-bug-report.html",
          controller: "ListBugReportCtrl",
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.detalheReport', {
          url: "/detalhe-bug-report/:id",
          templateUrl: "app/bugreport/detalhe-bug-report.html",
          controller: "detalheBugReportCtrl",
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.categorias', {
          url: "/categorias",
          templateUrl: "app/bugreport/categorias.html",
          controller: "categoriasCtrl",
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.machines', {
          url: "/machines",
          templateUrl: "app/machines/machines.html",
          controller: 'maquinasCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.customer', {
          url: "/customer",
          templateUrl: "app/customer/customer.html",
          data: {pageTitle: 'Usuários'},
          controller: 'CustomerCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.newCustomer', {
          url: "/new-customer?id&fromPartner",
          templateUrl: "app/customer/new-customer.html",
          data: {pageTitle: 'Usuários'},
          controller: 'NewCustomerCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.novoPC', {
          url: "/novoPC/:id",
          templateUrl: "app/novoPC/novoPC.html",
          data: {pageTitle: 'Novo Pré-cadastro'},
          controller: 'novoPCCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.finalizaPC', {
          url: "/finalizaPC",
          templateUrl: "app/finalizaPC/finalizaPC.html",
          data: {pageTitle: 'Finalizar Pré-cadastro'},
          controller: 'finalizaPCCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.userList', {
          url: "/userList",
          templateUrl: "app/userList/userList.html",
          data: {pageTitle: 'Lista de Usuários'},
          controller: 'userListCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('index.userDetalhes', {
          url: "/userDetalhes/:id",
          templateUrl: "app/userList/userDetalhes.html",
          data: {pageTitle: 'Detalhes do Usuário'},
          controller: 'userDetalhesCtrl',
          controllerAs: "vm",
          access: {
            requiredLogin: true
          }
        })
        .state('login', {
          url: "/login",
          templateUrl: "app/user/login/login.html",
          controller: "LoginCtrl",
          controllerAs: "vm"
        })
        .state('logout', {
          url: '/logout',
          controller: function (AuthService) {
            AuthService.logout();
          }
        });

    $urlRouterProvider.otherwise('/index/main');
  }

})();

