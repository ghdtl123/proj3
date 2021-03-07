$(document).ready(function() {
        $('#nav .depth1 > li').hover(function() {
                $(this).find('.depth2').stop().fadeIn(300);
            }, function() {
                $('#nav .depth1 > li .depth2').stop().fadeOut(300);
            }) //네비 오버
        $('#sec1').each(function() {
                var anchor_all = $(this).find('.listerinebtn li');
                var panels_all = $(this).find('.popup');
                var anchor_active = $(this).find('.listerinebtn li.active');
                var panels_active = anchor_active.attr('href');

                $(panels_active).show();

                anchor_all.each(function() {
                    var panels_active = $(this).attr('href');

                    $(this).click(function() {
                        panels_all.hide();
                        anchor_all.removeClass('active');
                        $(this).addClass('active');
                        $(panels_active).show();
                    })
                })
            }) //popup end
    }) //jq end