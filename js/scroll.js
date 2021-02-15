(function($){
    $.aniPage=function(e,type){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },500,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },500,function(){
                    $.aniOk = 0;
            });
        }
    };
})(jQuery);
$(function(){
    $(window).height();
    $.aniOk=0;
    $(window).scrollTop();
});
$(document).on("mousewheel DOMMouseScroll",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e,e.type);
        $.aniOk = 1;
    }
});