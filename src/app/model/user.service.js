function UserService(BaseService) {
  var _factory = {};

  angular.extend(_factory, BaseService.BaseServiceInstance('/user'));

  return _factory;
}

angular.module("megazord").factory("UserService", UserService);
