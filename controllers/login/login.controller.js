myApp.controller('LoginController',
    function (userInformationService, $scope, $rootScope, $location, $state, $uibModal, $http, apiPoint) {
        localStorage.removeItem('userName');
        $rootScope.user = '';
        $scope.title = 'My Login';
        $scope.username = '';
        $scope.password = '';
        userInformationService.setUserName('');
        console.log('Login Page');

        $scope.login = function () {
            $http.get(apiPoint.baseAddress + 'login/CheckUserNew?user=' + $scope.username + '&pwd=' + $scope.password)
                .then(function (response) {
                    if (response.data != null && response.data.IsActive == true) {
                        localStorage.setItem('userName', response.data.Name);
                        userInformationService.setUserName(response.data.Name);
                        $state.go('Master.DashBoard');
                    } else if (response.data != null && response.data.IsActive == false) {
                        alert(response.data.Message);
                    } else {
                        alert('Enter Valid Credentials');
                    }
                });
        }

        $scope.$watch('username', function () {
            console.log('username Watcher Run : ' + $scope.username);
        });

        $scope.openPopUp = function () {
            debugger;
            $uibModal.open({
                templateUrl: '../controllers/login/changePassword.html',
                size: 'lg',
                controller: function ($scope, $uibModalInstance) {
                    console.log('PopUp Page');
                    $scope.ok = function () {
                        $uibModalInstance.close();
                    };

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            })
        };
    });
