myApp.factory('roleFactory', function ($http, apiPoint) {
    return {
        getRolesList: function () {
            url = apiPoint.baseAddress + "role/GetRolesList";
            return $http.get(url);
        },
        getRole: function (role) {
            url = apiPoint.baseAddress + "role/GetRole/" + role.Role_ID;
            return $http.get(url);
        },
        addRole: function (role) {
            url = apiPoint.baseAddress + "role/SaveRole";
            return $http.post(url, role);
        },
        deleteRole: function (id) {
            url = apiPoint.baseAddress + "role/DeleteRole/" + id;
            return $http.delete(url);
        },
        updateRole: function (role) {
            url = apiPoint.baseAddress + "role/ModifyRole/" + role.Role_ID;
            return $http.put(url, role);
        }
    };
});
