function AuthService($http, $state, $window, BaseService, FlowService) {

    var _factory = {};

    var baseService = BaseService.BaseServiceInstance('');

    _factory.login = function (user, success, error) {
        $http.post(baseService.urlBackOfficeBase + '/login', user).success(function (data) {
            onLogin(data.result);
            success(data.result);
        }).error(function (data) {
            error(data);
        });
    };

    _factory.partnerLogin = function (user, success, error) {
        $http.post(baseService.urlPartnerBase + '/login', user).success(function (data) {
            onLogin(data.result);
            success(data.result);
        }).error(function (data) {
            error(data);
        });
    };

    _factory.signup = function (user, success, error) {
        $http.post(baseService.urlBackOfficeBase + '/signup', user).success(function (data) {
            onLogin(data.result);
            success(data.result);
        }).error(function (data) {
            error(data);
        });
    };

    _factory.logout = function () {
        var user = FlowService.getUser();
        $window.localStorage.removeItem("token");
        var state = '';
        if (user.role == 'partner') {
            state = 'loginPartner';
        } else {
            state = 'login';
        }
        FlowService.clear();
        $state.go(state);
    };

    _factory.isLoggedIn = function () {
        return !!$window.localStorage.token;
    };

    function onLogin(result) {
        $window.localStorage.token = result.token;
        FlowService.setUser(result.customer);
    }

    _factory.authorize = function (levels, role) {
        var user = FlowService.getUser();

        if (user.role != null && _.contains(levels, "logged")) {
            return true;
        }

        if (role === undefined) {
            role = user.role || "public";
        }

        if (_.isArray(levels)) {
            return _.contains(levels, role);
        }
        else {
            return levels == role;
        }
    };


    return _factory;
}

angular.module("megazord").factory("AuthService", AuthService);
