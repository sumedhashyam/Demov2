/// <reference path="../components/Login/views/login.html" />

app
    .run(
        [
            '$rootScope', '$state', '$stateParams', '$location',
            function ($rootScope, $state, $stateParams, $location) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on("$routeChangeSuccess", function (userInfo) {
                    console.log(userInfo);
                });

                $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
                    if (error && error.authenticated === false) {
                        $state.go("login");
                    }
                });
            }
        ]
    )
.config(
        [
            '$stateProvider', '$urlRouterProvider', '$translateProvider',
            function ($stateProvider, $urlRouterProvider, $translateProvider) {
                $urlRouterProvider
                   .otherwise('/login');
                $stateProvider
                   .state('login', {
                       url: '/login',
                       controller: 'loginCtrl',
                       templateUrl: 'assets/components/Login/views/login.html',
                   })
            }
        ]
    );