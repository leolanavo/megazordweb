function BaseService ($http, EnvironmentConfig) {

    // gulp serve:local    // local
    // gulp serve:stage   // stage
    // gulp serve:dist    // production

    // gulp build:stage   // stage
    // gulp build:dist    // production

    function BaseServiceInstance(url) {
        this.appName = "megazord";
        this.urlBase = EnvironmentConfig.api;
        this.urlBackOfficeBase = EnvironmentConfig.api;

        this.httpRequest = function (type, url, params) {
            return $http[type](url, params).then(function (response) {
                return response.data;
            }, function (error) {
                throw error.data;
            });
        };

        this.serviceUrl = url;
        this.get = function (id) {
            return this.httpRequest("get", this.urlBackOfficeBase + this.serviceUrl + id);
        };

        this.getAll = function (data) {
            return this.httpRequest("get", this.urlBackOfficeBase + this.serviceUrl);
        };

        this.create = function (entity) {
            return this.httpRequest("post", this.urlBackOfficeBase + this.serviceUrl, entity);
        };

        this.update = function (entity) {
            return this.httpRequest("put", this.urlBackOfficeBase + this.serviceUrl + entity.id, entity);
        };

        this.delete = function (id) {
            return this.httpRequest("delete", this.urlBackOfficeBase + this.serviceUrl + id);
        };

        return this;
    }

    return {
        BaseServiceInstance: BaseServiceInstance
    }
}

angular.module('megazord').service('BaseService', BaseService);

