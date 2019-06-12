myApp.filter('welcomeUser', function () {
    return function (input, message, data) {
        return message + input + (!data == true ? '' : data);
    }
});
