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

// 右滑事件
$(document).ready(function () {
   $("div").bind("swiperight",function (event) {
       $("#myPanel").panel("open");
   });
});

// swiper插件
var swiper = new Swiper('.swiper-container',{
    direction : 'vertical',
    followFinger : false,
    speed:800,
    mousewheel: true,
    pagination : {
        el:'.swiper-pagination',
    },
    on:{
        init:function(swiper){
            slide=this.slides.eq(0);
            slide.addClass('ani-slide');
        },
        transitionStart: function(){
            for(i=0;i<this.slides.length;i++){
                slide=this.slides.eq(i);
                slide.removeClass('ani-slide');
            }
        },
        transitionEnd: function(){
            slide=this.slides.eq(this.activeIndex);
            slide.addClass('ani-slide');
        },
    }
});