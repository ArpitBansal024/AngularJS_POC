myApp.service('userInformationService', function () {
    var userName = '';

    this.getUserName = function () {
        return this.userName;
    };

    this.setUserName = function (name) {
        this.userName = name;
    };
});
