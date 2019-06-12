myApp.factory('dashBoardFactory', function ($http, apiPoint) {
    return {
        getAllCountList: function () {
            url = apiPoint.baseAddress + "dashBoard/GetAllCounts";
            return $http.get(url);
        }
    };
});
