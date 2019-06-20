myApp.controller('EmployeeController',
    function (guidService, $scope, employeeFactory, $filter) {
        $scope.addButton = 'ADD';
        $scope.genders = [{
            "genderId": "Male",
            "name": "Male"
}, {
            "genderId": "Female",
            "name": "Female"
}, {
            "genderId": "Trangender",
            "name": "Trangender"
}];

        $scope.GetEmployees = function () {
            employeeFactory.getEmployeesList()
                .then(function (response) {
                        if (response.data.length > 0) {
                            $scope.myData = response.data;
                        }
                    },
                    function (err) {

                    }
                );
        }

        $scope.add = function (event) {
            if ($scope.gender === "") {
                alert('Gender Required');
                return;
                //event.preventDefault();
            }

            let item = {
                EmployeeID: $scope.id,
                Name: $scope.name,
                Age: $scope.age,
                Email: $scope.email,
                Gender: $scope.gender,
                Salary: $scope.salary,
                DOB: $scope.dob
            };
            if ($scope.addButton == 'ADD') {
                employeeFactory.addEmployee(item)
                    .then(function (response) {
                        if (response) {
                            alert('Record ' + $scope.addButton + ' Successfully!');
                            $scope.reset();
                        }
                    });
            } else {
                employeeFactory.updateEmployee(item)
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
            $scope.age = '';
            $scope.email = '';
            $scope.gender = '';
            $scope.salary = '';
            // $scope.dob = '';
            $scope.addButton = 'ADD';
            $scope.GetEmployees();
        }

        $scope.edit = function (id) {
            for (var i = 0; i < $scope.myData.length; i++) {
                if ($scope.myData[i].EmployeeID == id) {
                    $scope.id = $scope.myData[i].EmployeeID;
                    $scope.name = $scope.myData[i].Name;
                    $scope.age = $scope.myData[i].Age;
                    $scope.email = $scope.myData[i].Email;
                    $scope.gender = $scope.myData[i].Gender;
                    $scope.salary = $scope.myData[i].Salary;
                    $scope.dob = new Date($scope.myData[i].DOB);
                    $scope.addButton = 'UPDATE';
                    break;
                }
            }
        }

        $scope.delete = function (item) {
            var delconfirm = confirm('Are you sure you want to delete?');
            if (delconfirm) {
                employeeFactory.deleteEmployee(item.EmployeeID)
                    //$http.get(apiPoint.url + 'User/DeleteUser?id=' + item.EmployeeID).
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
