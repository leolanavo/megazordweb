function CustomerService(BaseService) {

    var _factory = {};

    angular.extend(_factory, BaseService.BaseServiceInstance('/customer/'));

    return _factory;
}

angular.module("megazord").factory("CustomerService", CustomerService);
