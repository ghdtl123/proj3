$(document).ready(function(){
    $('#nav .depth1 > li').hover(function(){
        $(this).find('.depth2').stop().fadeIn(300);
    },function(){
        $('#nav .depth1 > li .depth2').stop().fadeOut(300);
    })//네비 오버

    var menu = $("#gnb ul li");
	var content = $("section");
	
	menu.click(function(){
		/*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
별도의 브라우저 행동을 막기 위해 사용됩니다.*/
		event.preventDefault();
		
		//사용자가 클릭한 li
		var tg = $(this);
		//순서값을 찾는 함수 index()
		var idx = tg.index();
		//선택한 li와 순서가 같은 content 를 찾음 eq()
		var section = content.eq(idx);
		//선택된 영역의 top 의 좌표값을 저장
		//.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
		var tt = section.offset().top;

		//스크롤이 tt의 값에 맞게 움직이게
		$("html,body").stop().animate({scrollTop:tt});
		});//menu.click() 끝
		
		// 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
		$(window).scroll(function(){
		//.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
		var location = $(window).scrollTop();
		
		content.each(function() {
			//반복문(each)
        var tg = $(this);
		var idx = tg.index();
			
			if(tg.offset().top <= location){ //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
				menu.removeClass("active");
				menu.eq(idx).addClass("active");
				}

    });//each() 끝
		
			
			});//scroll() 끝

			$('#sec1').each(function(){
				var anchor_all = $(this).find('.listerinebtn li');
				var panels_all = $(this).find('.popup');
				var anchor_active = $(this).find('.listerinebtn li.active');
				var panels_active = anchor_active.attr('href');
	  
				$(panels_active).show();
				
				anchor_all.each(function(){
				  var panels_active = $(this).attr('href');
	  
					$(this).click(function(){
					  panels_all.hide();
					  anchor_all.removeClass('active');
					  $(this).addClass('active');
					  $(panels_active).show();
					})
				})
			})//popup end
})//jq end

