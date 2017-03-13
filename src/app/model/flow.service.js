function FlowService(localStorageService) {

    var _factory = {};
    var _user = null;

    _factory.clear = function () {
        _factory.setUser(null);
    };

    _factory.getUser = function() {
        _user = _user || localStorageService.get('user') || {};
        return _user;
    };

    _factory.setUser = function(user) {
        _user = user;
        localStorageService.set('user', _user);
    };

    return _factory;
}

angular.module("megazord").factory("FlowService", FlowService);
