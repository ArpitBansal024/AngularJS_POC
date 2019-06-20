myApp.service('dashBoardService', function ($http, apiPoint) {

    this.getAllCountList = function () {
        url = apiPoint.baseAddress + "dashBoard/GetAllCounts";
        return $http.get(url);
    }
});
