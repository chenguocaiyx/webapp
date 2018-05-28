$(function () {
    $("#news").click(function () {
        $("#news_page").show();
        $("#news_header").show();

        $("iframe").hide();
    });

    $("#friends").click(function () {
        $("#news_page").hide();
        $("#news_header").hide();


        $("iframe").show();
        $("iframe").attr("src","friends.html")
            .css("height", $(window).height()).show();
    });

    $("#activities").click(function () {
        $("#news_page").hide();
        $("#news_header").hide();

        $("iframe").show();
        $("iframe").attr("src","activities.html")
            .css("height", $(window).height()).show();
    });
});