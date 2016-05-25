app.controller('sideBarCtrl', function ($scope, $rootScope, $location, $window, $sce, $state, $localStorage) {
    $scope.showLoader = false;
    $scope.sidebarOpen = true;
    $scope.showsidebar = false;
    //$localStorage.loggedInUser = undefined;

    if ($localStorage.loggedInUser == undefined || $localStorage.loggedInUser.length == 0) {
        window.location.href = "/index.html";
    }
});