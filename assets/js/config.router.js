/// <reference path="../components/Dashboard/views/home.html" />
/// <reference path="../components/Dashboard/views/home.html" />
/// <reference path="../components/Admin/views/main.html" />

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
                    console.log(error);
                    if (error && error.authenticated === false) {
                        window.location.href = "/index.html";
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
                    .otherwise('/home');
                $stateProvider
                   .state('home', {
                       //abstract: true,
                       url: '/home',
                       controller: 'dashboardctrl',
                       templateUrl: 'assets/components/Dashboard/views/home.html'
                   })
            }
        ]
    );