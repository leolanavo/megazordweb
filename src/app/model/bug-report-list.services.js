function BugReportServiceList(BaseService) {

  var _factory = {};

  angular.extend(_factory, BaseService.BaseServiceInstance('/bug_report/all'));

  return _factory;
}

angular.module("megazord").factory("BugReportServiceList", BugReportServiceList);

