myApp.controller('MasterController',
    function (userInformationService, $scope, $location, $state, $rootScope, $uibModal) {
        $scope.userName = userInformationService.getUserName();
        // if (localStorage.getItem('userName')) {
        if ($scope.userName != '') {
            $scope.title = 'Home';
            $scope.userdata = 'Home Page';
            $scope.logout = function () {
                $state.go('Login');
            }

            $scope.dashboard = function () {
                $state.go('Master.DashBoard');
            }

            $scope.user = function () {
                $state.go('Master.User');
            }

            $scope.employee = function () {
                $state.go('Master.Employee');
            }

            $scope.role = function () {
                $state.go('Master.RoleList');
            }

            $scope.logout = function () {
                userInformationService.setUserName('');
                $state.go('Login');
            }

            $scope.openPopUp = function () {
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
                }).then(function (response) {
                    console.log(response);
                    //$scope.result = `${response} button hitted`;
                });
            };
        } else {
            $state.go('Login');
        }

    });
