myApp.controller('RoleListController',
    function ($scope, roleFactory, $state) {
        $scope.addButton = 'ADD';

        $scope.GetRoles = function () {
            roleFactory.getRolesList()
                .then(function (response) {
                    if (response.data.length > 0) {
                        $scope.myData = response.data;
                    }
                });
        }

        $scope.addRole = function () {
            $state.go('Master.Role');
        }
        //        $scope.add = function (event) {
        //            let item = {
        //                Role_ID: $scope.id,
        //                Name: $scope.name,
        //                Description: $scope.description
        //            }
        //            if ($scope.addButton == 'ADD') {
        //                roleFactory.addRole(item)
        //                    .then(function (response) {
        //                        if (response) {
        //                            alert('Record ' + $scope.addButton + ' Successfully!');
        //                            $scope.reset();
        //                        }
        //                    });
        //            } else {
        //                roleFactory.updateRole(item)
        //                    .then(function (response) {
        //                        if (response) {
        //                            alert('Record ' + $scope.addButton + ' Successfully!');
        //                            $scope.reset();
        //                        }
        //                    });
        //            }
        //
        //        }

        $scope.reset = function () {
            $scope.id = '';
            $scope.name = '';
            $scope.description = '';
            $scope.addButton = 'ADD';
            $scope.GetRoles();
        }

        $scope.edit = function (id) {
            for (var i = 0; i < $scope.myData.length; i++) {
                if ($scope.myData[i].Role_ID == id) {
                    $scope.id = $scope.myData[i].Role_ID;
                    $scope.name = $scope.myData[i].Name;
                    $scope.description = $scope.myData[i].Description;
                    $scope.addButton = 'UPDATE';
                    let item = {
                        Role_ID: $scope.id,
                        Name: $scope.name,
                        Description: $scope.description
                    }
                    $state.go('Master.Role', {
                        data: item
                    });
                    break;
                }
            }
        }

        $scope.delete = function (item) {
            var delconfirm = confirm('Are you sure you want to delete Role (' + item.Name + ')?');
            if (delconfirm) {
                roleFactory.deleteRole(item.Role_ID)
                    .then(function (response) {
                        if (response) {
                            var index = $scope.myData.indexOf(item);
                            $scope.myData.splice(index, 1);
                            alert('Record Deleted Successfully!');
                            $scope.reset();
                        }
                    });
            }
        }

    });
