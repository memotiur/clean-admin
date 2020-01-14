$(document).ready(function () {
    console.log("ready!");


    $(".main-content").slimScroll({
        size: '1px',
        width: '100%',
        height: '110vh',
        color: '#3285EF',
        bottom:"0",
        allowPageScroll: true,
        alwaysVisible: false
    });
    $(".side-nav").slimScroll({
        size: '1px',
        width: '250px',
        height: '110vh',
        color: '#3285EF',
        bottom:"0",
        allowPageScroll: true,
        alwaysVisible: false
    });

    $("#metismenu").metisMenu({
        toggle: false,
        preventDefault: false,

    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    feather.replace();
});