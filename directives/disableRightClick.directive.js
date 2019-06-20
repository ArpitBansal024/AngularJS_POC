myApp.directive('disableRightClick', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            // if (attr.check != "false") { Pass Check Parameter
            if (attr.disableRightClick != "false") { // Pass Single Parameter By Default
                element.bind('contextmenu', function (e) {
                    e.preventDefault();
                })
            }
        }
    }
});
