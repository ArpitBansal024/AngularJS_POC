var myApp = angular.module('AngJSApp', ['ui.router', 'ui.bootstrap','ui.grid']);

myApp.factory("flash", function ($rootScope) {

    return {
        pop: function (message) {
            switch (message.type) {
                case 'success':
                    toastr.success(message.body, message.title);
                    break;
                case 'info':
                    toastr.info(message.body, message.title);
                    break;
                case 'warning':
                    toastr.warning(message.body, message.title);
                    break;
                case 'error':
                    toastr.error(message.body, message.title);
                    break;
            }
        }
    };
});

myApp.constant("apiPoint", {
    // baseAddress: 'http://localhost:64494/api/'
    baseAddress: 'http://nodltp52028910/WebAPITest/api/'
});

myApp.config(
    //    function ($routeProvider) {
    //        $routeProvider.
    //            when('/', {
    //                templateUrl: '/controllers/login/login.html'
    //            })
    //            .when('/home', {
    //                templateUrl: '/controllers/home/home.html',
    //            controller: 'HomeController'
    //            })
    //            .when('/login', {
    //                templateUrl: '/controllers/login/login.html'
    //            })
    //            .when('/user', {
    //                templateUrl: '/controllers/user/user.html'
    //            })
    //            .otherwise({
    //                redirectTo: '/'
    //            });
    //    }]);

    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider

            .state('Master', {
                // url: '/header',

                templateUrl: '/controllers/master/master.html',
                abstract: true,
                controller: 'MasterController',
                // stateParams: {myData: null}
            })
            .state('Master.DashBoard', {
                url: '/DashBoard',
                templateUrl: '/controllers/master/dashboard/dashboard.html',
                controller: 'DashBoardController',

            })
            .state('Master.User', {
                url: '/User',
                templateUrl: '/controllers/master/user/user.html',
                controller: 'UserController',

            })
            .state('Master.Employee', {
                url: '/Employee',
                templateUrl: '/controllers/master/employee/employee.html',
                controller: 'EmployeeController',

            })
            .state('Master.RoleList', {
                url: '/RoleList',
                templateUrl: '/controllers/master/role/roleList.html',
                controller: 'RoleListController',

            })
            .state('Master.Role', {
                url: '/Role',
                templateUrl: '/controllers/master/role/role.html',
                controller: 'RoleController',
                params: {
                    data: null,
                }

            })
            .state('Login', {
                url: '/login',
                templateUrl: '/controllers/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'

            });
    });
