$(document).ready(function () {

    var responsiveMenuSettings = {
        doesBackgroundChange: true,
        doesPaddingChange: true,
        bgSelector: ".mega-menu-responsive > li > ul, .top-menu > li > .sublist-wrap",
        bgInitialColor: "rgba(34,34,34,1)",
        red: 20,
        green: 20,
        blue: 20,
        alpha: 0.05,
        paddingSelector: ".header-menu > ul > li",
        paddingValue: 20,
        themeBreakpoint: 980
    };

    initResponsiveTheme(responsiveMenuSettings);

});