myApp.controller('RoleController',
    function ($scope, $stateParams, roleFactory, $state) {
        $scope.addButton = 'ADD';

        $scope.fillData = function () {
            $scope.reset();
            if ($stateParams.data != null) {
                $scope.id = $stateParams.data.Role_ID;
                $scope.name = $stateParams.data.Name;
                $scope.description = $stateParams.data.Description;
                $scope.addButton = 'UPDATE';
            }
        }

        $scope.backList = function () {
            $state.go('Master.RoleList');
        }

        $scope.add = function (event) {
            let item = {
                Role_ID: $scope.id,
                Name: $scope.name,
                Description: $scope.description
            }
            if ($scope.addButton == 'ADD') {
                roleFactory.addRole(item)
                    .then(function (response) {
                        if (response) {
                            alert('Record ' + $scope.addButton + ' Successfully!');
                            $scope.reset();
                            $state.go('Master.RoleList');
                        }
                    });
            } else {
                roleFactory.updateRole(item)
                    .then(function (response) {
                        if (response) {
                            alert('Record ' + $scope.addButton + ' Successfully!');
                            $scope.reset();
                            $state.go('Master.RoleList');
                        }
                    });
            }
        }

        $scope.reset = function () {
            $scope.id = '';
            $scope.name = '';
            $scope.description = '';
            $scope.addButton = 'ADD';
        }

    });
