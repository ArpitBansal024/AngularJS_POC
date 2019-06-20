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


        $scope.reset = function () {
            $scope.id = '';
            $scope.name = '';
            $scope.description = '';
            $scope.addButton = 'ADD';
            $scope.gridOptions = {
                enableRowSelection: false,
                columnDefs: [{
                        field: "Name"
                    },
                    {
                        field: "Description"
                    },
                    {
                        name: 'actions',
                        displayName: 'Actions',
                        cellTemplate: '<button type="button" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" ng-click="grid.appScope.edit(row.entity.Role_ID)" >Edit</button><button type="button" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm" ng-click="grid.appScope.delete(row.entity)" >Delete</button>'
                    }
    ],
                data: 'myData'
            };
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
