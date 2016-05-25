app
.controller('loginCtrl', function ($scope, $rootScope, $state, $localStorage, Authentication) {

    var url = window.location.hash;

    if (url.indexOf('id=') > 0 && url.indexOf('id=logout')) {
        $localStorage.loggedInUser = undefined
    }

    if ($localStorage.loggedInUser != undefined) {
        window.location.href = "/dashboard.html";
    }
    var vm = this;
    vm.loggingIn = false;
    vm.user = {};

    vm.forgottenEmail = {};

    vm.addData = function () {
        vm.loggingIn = true;
        $rootScope.ShowLoader = true;
        Authentication.login(vm.user.userName, vm.user.password).then(function (result) {
            console.log(result);
            if (result != null && result != undefined && result.id > 0) {
                window.location.href = "/dashboard.html";
                //$state.go("app.home");
            }
            else {
                vm.loggingIn = false;
                $rootScope.ShowLoader = false;
                $scope.errormsgs = true;
                $scope.errormsg = "Username or password is incorrect"
            }
        }, function (error) {
            vm.loggingIn = false;
            $rootScope.ShowLoader = false;
            $scope.errormsgs = true;
            $scope.errormsg = "Username or password is incorrect"
        });
    };
});
