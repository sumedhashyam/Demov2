app.controller('dashboardctrl', function ($scope, $rootScope, $location, $window, $sce, $state) {
    $scope.showLoader = false;
    $('.create_dropdown > li > a').click(function () {
        console.log("aa");
        $('.create_dropdown').find('ul').toggle();
    });

    $('.panel-body .filter_txt').click(function () {
        //$('.panel-body').find('.sub_filtes').toggle();

        if ($(".filter").find(".fa").hasClass("fa-plus-circle")) {

            $(".filter").find(".fa").removeClass("fa-plus-circle");

            $(".filter").find(".fa").addClass("fa-minus-circle");

            $('.panel-body').find('.sub_filtes').slideDown(1000);

        } else {
            $(".filter").find(".fa").removeClass("fa-minus-circle");

            $(".filter").find(".fa").addClass("fa-plus-circle");

            $('.panel-body').find('.sub_filtes').slideUp(1000);
        }
    });
});