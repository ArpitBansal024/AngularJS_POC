myApp.factory('employeeFactory', function ($http, apiPoint) {
    return {
        getEmployeesList: function () {
            url = apiPoint.baseAddress + "employee/GetEmployeesList";
            return $http.get(url);
        },
        getEmployee: function (employee) {
            url = apiPoint.baseAddress + "employee/GetEmployee/" + employee.EmployeeID;
            return $http.get(url);
        },
        addEmployee: function (employee) {
            url = apiPoint.baseAddress + "employee/SaveEmployee";
            return $http.post(url, employee);
        },
        deleteEmployee: function (id) {
            url = apiPoint.baseAddress + "employee/DeleteEmployee/" + id;
            return $http.delete(url);
        },
        updateEmployee: function (employee) {
            url = apiPoint.baseAddress + "employee/ModifyEmployee/" + employee.EmployeeID;
            return $http.put(url, employee);
        }
    };
});
