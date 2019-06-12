myApp.factory('userFactory', function ($http, apiPoint) {
    return {
        getUsersList: function () {
            url = apiPoint.baseAddress + "user/GetUsersList";
            return $http.get(url);
        },
        getUser: function (user) {
            url = apiPoint.baseAddress + "user/GetUser/" + user.UserID;
            return $http.get(url);
        },
        addUser: function (user) {
            url = apiPoint.baseAddress + "user/SaveUser";
            return $http.post(url, user);
        },
        deleteUser: function (id) {
            url = apiPoint.baseAddress + "user/DeleteUser/" + id;
            return $http.delete(url);
        },
        updateUser: function (user) {
            url = apiPoint.baseAddress + "user/ModifyUser/" + user.UserID;
            return $http.put(url, user);
        }
    };
});
