function BugReportService(BaseService) {

    var _factory = {};

    angular.extend(_factory, BaseService.BaseServiceInstance('/bug_report'));

    return _factory;
}

angular.module("megazord").factory("BugReportService", BugReportService);
