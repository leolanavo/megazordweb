function DocumentService($http, BaseService) {

    var _factory = {};

    angular.extend(_factory, BaseService.BaseServiceInstance('/customer/'));

    _factory.get = function(id_customer, params) {
        return this.httpRequest("get", _factory.urlBackOfficeBase + '/customer/' + id_customer + '/document', {params: params});
    };

    _factory.create = function(id_customer, document) {
        return this.httpRequest("post", _factory.urlBackOfficeBase + '/customer/' + id_customer + '/document', document);
    };

    _factory.delete = function(id_customer, id_document) {
        return this.httpRequest("delete", _factory.urlBackOfficeBase + '/customer/' + id_customer + '/document/' + id_document);
    };

    _factory.getDocumentType = function(params) {
        return $http.get(BaseService.urlBase + '/document_type', {params: params});
    };

    return _factory;
}

angular.module("megazord").factory("DocumentService", DocumentService);
