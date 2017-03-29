var mainJS = {
 
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                
            },
            end: function () {
                   if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#profile').offset().top}, "slow"); 
                return false;
            });
    },   
	waySlide: function(){
	   	$('#profile').waypoint(function() {				
			$('#profile .col-md-3').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
		$('#Self-appraisal').waypoint(function() {				
			$('#Self-appraisal').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
		$('#Suggestion').waypoint(function() {				
			$('#Suggestion .parlex-back').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			 						 
		}, 
    init: function () {
        mainJS.onePageNav();  
		mainJS.waySlide(); 
    }
}

$('document').ready(function () { 
  
    mainJS.init();
	$('#profile .col-md-3, #features, #Self-appraisal, #clients, #portfolio, #plans, #Suggestion .parlex-back').css('opacity','0');
		$( "#menuToggle" ).toggle(function() {
		$(this).find('i').removeClass('fa-bars').addClass('fa-remove');
			$('#mainNav').animate({"right":"0px"}, "slow");}, function() {
			$('#mainNav').animate({"right":"-200px"}, "slow");
		$(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});	
});

//轮播图JS
$(function(){
    var num2=6;
    $('.Carousel ol li').mouseover(function(e){
      $(this).attr('class','current');
      $(this).siblings().attr('class','');
    
    var num=$(this).index()
		num2++
      $('.Carousel ul li').eq(num).css('z-index',num2)
      //$('.Carousel ul li').eq(num).animate({left:'0'},1000);
    });
});