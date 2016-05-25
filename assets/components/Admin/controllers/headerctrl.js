app.controller('headerctrl', function ($scope, $rootScope, $location, $window, $sce, $state, $localStorage) {
    if ($localStorage.loggedInUser != undefined) {
        $scope.name = $localStorage.loggedInUser.firstname;
    }

    //$scope.logout = function () {
    //    $localStorage.loggedInUser = undefined;
    //    $state.go("appLogin.login")
    //}
    $scope.showhideside = function () {

        if ($("#sidebar").hasClass("show_right")) {
           
            $(".right_sidebar").removeClass("marr50");

            $("#sidebar").removeClass("show_right").animate({
                right: "-=50"
            }, 500);
        } else {
            $(".right_sidebar").addClass("marr50");

            $("#sidebar").addClass("show_right").animate({
                right: "+=50"
            }, 500);
        }
    }
});