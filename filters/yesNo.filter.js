myApp.filter('yesNo', function () {
    return function (input) {
        return input === true ? 'Yes' : 'No';
    }
});
