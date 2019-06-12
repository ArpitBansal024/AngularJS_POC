myApp.controller('UserController',
    function (guidService, $scope, userFactory) {
        $scope.addButton = 'ADD';
       
//        $scope.gridOptions = {
//            data: 'myData'
//        };

        $scope.GetUsers = function () {
            userFactory.getUsersList()
                .then(function (response) {
                    if (response.data.length > 0) {
                        $scope.myData = response.data;
                    }
                });
        }

        $scope.add = function (event) {

            let item = {
                UserID: $scope.id,
                Name: $scope.name,
                Password: $scope.password,
                IsActive: $scope.isActive
            };
            if ($scope.addButton == 'ADD') {
                userFactory.addUser(item)
                    .then(function (response) {
                        if (response) {
                            alert('Record ' + $scope.addButton + ' Successfully!');
                            $scope.reset();
                        }
                    });
            } else {
                userFactory.updateUser(item)
                    .then(function (response) {
                        if (response) {
                            alert('Record ' + $scope.addButton + ' Successfully!');
                            $scope.reset();
                        }
                    });
            }
        }

        $scope.reset = function () {
            $scope.id = '';
            $scope.name = '';
            $scope.password = '';
            $scope.isActive = false;
            $scope.addButton = 'ADD';
            $scope.GetUsers();
        }

        $scope.edit = function (id) {
            for (var i = 0; i < $scope.myData.length; i++) {
                if ($scope.myData[i].UserID == id) {
                    $scope.id = $scope.myData[i].UserID;
                    $scope.name = $scope.myData[i].Name;
                    $scope.password = $scope.myData[i].Password;
                    $scope.isActive = $scope.myData[i].IsActive;
                    $scope.addButton = 'UPDATE';
                    break;
                }
            }
        }

        $scope.delete = function (item) {
            var delconfirm = confirm('Are you sure you want to delete?');
            if (delconfirm) {
                userFactory.deleteUser(item.UserID)
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
