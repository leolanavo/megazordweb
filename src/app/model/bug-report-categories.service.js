function BugReportServiceCategories(BaseService) {

    var _factory = {};

    angular.extend(_factory, BaseService.BaseServiceInstance('/bug_report_categories'));

    return _factory;
}

angular.module("megazord").factory("BugReportServiceCategories", BugReportServiceCategories);
