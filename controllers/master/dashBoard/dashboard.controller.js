myApp.controller('DashBoardController',
    function ($scope, dashBoardFactory, dashBoardService) {

        $scope.Counts = function () {
            // dashBoardFactory.getAllCountList()
            dashBoardService.getAllCountList()
                .then(function (response) {
                    if (response.data.length > 0) {
                        $scope.myData = response.data;
                    }
                });
        }
    });
