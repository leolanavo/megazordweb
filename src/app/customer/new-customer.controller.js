'use strict';

function NewCustomerCtrl($modal, CustomerService, DocumentService, AddressService, UserService,
                         $scope, $state, $stateParams, toaster) {

    var vm = this;

    vm.entity = {is_active: true};
    vm.entity.id = $stateParams.id;

    vm.documents = [];
    vm.address = [];

    vm.total_items = 0;
    vm.page_size = 40;
    vm.page = 1;

    vm.gridOptions = {};


    vm.gridOptions.documents = {
        enableColumnResizing: true,
        paginationPageSize: 40,
        columnDefs: [
            {
                name: 'Nome',
                field: 'path',
                cellTemplate: "<a target='_blank' href='{{grid.getCellValue(row,col)}}'>Ver Documento</a>"
            },
            {
                name: 'Tipo',
                field: 'document_typeObj.name'
            },
            {
                name: 'X',
                field: 'id',
                cellTemplate: "<a class='btn primary' ng-click='grid.appScope.vm.deleteDocument(row.entity)'>Remover</a>"
            }
        ]
    };

    vm.gridOptions.documents.data = vm.documents;

    vm.gridOptions.address = {
        enableColumnResizing: true,
        paginationPageSize: 40,
        columnDefs: [
            {
                name: 'Detalhes',
                field: 'id',
                cellTemplate: "<a class='btn primary' ng-click='grid.appScope.vm.newAddress(row.entity)'>Editar</a>"
            },
            {name: 'Número', field: 'str_number'},
            {name: 'Rua, Av, ...', field: 'address'},
            {name: 'Complemento', field: 'complement'},
            {name: 'Estado', field: 'state'},
            {name: 'Cidade', field: 'city'},
            {name: 'CEP', field: 'zip'},
            {name: 'Bairro', field: 'neighbor'},
            {
                name: 'X',
                field: 'id',
                cellTemplate: "<a class='btn primary' ng-click='grid.appScope.vm.deleteAddress(row.entity)'>Remover</a>"
            },
        ]
    };

    vm.gridOptions.address.data = vm.address;

    vm.submit = function () {

        vm.isLoading = true;

        var entity = _.extend({}, vm.entity);
        if (vm.entity.birthday)
            entity.birthday = moment(vm.entity.birthday, "DD/MM/YYYY").toISOString();

        if (vm.entity.id) {
            CustomerService.update(entity).then(function (data) {
                toaster.success("Sucesso", "Cliente atualizado com sucesso.");
                vm.isLoading = false;
            }, function (error) {
                vm.isLoading = false;
                toaster.info("Atenção", error);
            });

        } else {
            CustomerService.create(entity).then(function (data) {
                vm.isLoading = false;
                vm.entity.id = data.id;
                toaster.success("Sucesso", "Cliente inserido com sucesso.");
            }, function (error) {
                vm.isLoading = false;
                toaster.info("Atenção", error);
            });
        }
    };

    vm.delete = function () {
        CustomerService.delete(vm.entity.id).then(function (data) {
            toaster.success("Sucesso", "Cliente removido com sucesso.");
            $state.go("index.customer");
        }, function (error) {
            toaster.info("Atenção", error);
        });
    };

    vm.deleteAddress = function (address) {
        if (!vm.entity || !vm.entity.id)
            return;

        AddressService.delete(vm.entity.id, address.id).then(function (data) {
            toaster.success("Sucesso", "Endereço removido com sucesso.");
            vm.address = _.reject(vm.address, function (addr) {
                return addr != address.id;
            });
            loadAddressList(vm.address);
        }, function (error) {
            toaster.info("Atenção", error);
        });
    };

    vm.getDocuments = function (id_customer) {
        DocumentService.get(
            id_customer, {
                page: vm.page,
                page_size: vm.page_size
            }
        ).then(function (data) {
                vm.total_items = data[0] ? data[0].total_items : 0;
                loadDocuments(data);
            }, function (error) {
                toaster.info("Atenção", error);
            });
    };

    vm.deleteDocument = function (document) {
        if (!vm.entity || !vm.entity.id)
            return;

        DocumentService.delete(vm.entity.id, document.id).then(function (data) {
            toaster.success("Sucesso", "Documento removido com sucesso.");
            vm.documents = _.reject(vm.documents, function (doc) {
                return doc.id == document.id;
            });
            loadDocuments(vm.documents);
        }, function (error) {
            toaster.info("Atenção", error);
        });
    };

    vm.newAddress = function (address) {
        var modalInstance = $modal.open({
            templateUrl: 'app/customer/addressModal.html',
            controller: 'ModalNewAddressController',
            resolve: {
                address: function () {
                    return address;
                },
                customer: function () {
                    return vm.entity;
                }
            }
        });

        modalInstance.result.then(function (addr, id) {
            if (addr) {
                if (addr.isUpdate) {
                    toaster.info("Sucesso", "Endereço atualizado com sucesso");
                } else {
                    vm.address.push(addr);
                    loadAddressList();
                    toaster.info("Sucesso", "Endereço inserido com sucesso");
                }

            } else {
                toaster.info("Atenção", "Não foi possível realizar a solicitação");
            }
        });

    };

    vm.newDocument = function () {
        var modalInstance = $modal.open({
            templateUrl: 'app/customer/categoryModal.html',
            controller: 'categoryController',
            resolve: {
                customer: function () {
                    return vm.entity;
                }
            }
        });

        modalInstance.result.then(function (uploaded) {
            if (uploaded) {
                vm.documents.push(uploaded);
                loadDocuments();
                toaster.info("Sucesso", "Documento inserido com sucesso");
            } else {
                toaster.info("Atenção", "Não foi possível realizar a solicitação");
            }
        });

    };

    vm.resetPassword = function(){
        if(!vm.entity.cpf_cnpj) {
            toaster.info("Atenção", "CPF ou CNPJ não informado.");
            return;
        }

        UserService.forgotPassword({identity: vm.entity.cpf_cnpj}).then(function(res){
            toaster.info("Sucesso", "E-mail para reset de senha enviado para o cliente.");
        }, function(err){
            toaster.info("Atenção", "Não foi possível realizar a solicitação");
        })
    };

    function loadDocuments(docs) {
        if (docs)
            vm.documents = docs;
        vm.gridOptions.documents.data = vm.documents;
    }

    function loadAddressList(addressList) {
        if (addressList)
            vm.address = addressList;
        vm.gridOptions.address.data = vm.address;
    }

    function init() {
        if (vm.entity.id) {
            CustomerService.get(vm.entity.id).then(function (data) {
                vm.entity = data;
                vm.entity.birthday = vm.entity.birthday ? moment(vm.entity.birthday).utc().format("DD/MM/YYYY") : null;
                loadAddressList(data.addressList);
            });

            vm.getDocuments(vm.entity.id);
        }
    }

    init();

}

angular.module('megazord').controller('NewCustomerCtrl', NewCustomerCtrl);
