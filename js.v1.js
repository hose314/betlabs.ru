$(window).ready(function(){
	var wLab = $('.b-lab').outerWidth();
	window.onresize = resizeReact;
	window.onscroll = scrollReact;
	function resizeReact() {
		layout.resizeWindow();
		wLab = $('.b-lab').outerWidth();
		
		var shift = -wLab * +$('.labs-menu-item_active').data('level');
		$('.labs-full').css({
			"transform": "translate3d("+shift+"px, 0, 0)"
		});
	};
	function scrollReact() {
		if ($(window).scrollTop() >= 50 ) {
				$('.b-navigation').addClass('b-navigation_scroll');
				$('.manifold').attr('class', 'manifold manifold_grey');
			} else {
				$('.b-navigation').removeClass('b-navigation_scroll');
				$('.manifold').attr('class', 'manifold');
			}
		layout.parallaxMovement($('.introduction'), $(".intro-svg circle:nth-child(2n+1)"));
	};
	$('.labs-menu-item').on('click', function() {
		$('.labs-menu-item').each(function(){
			$(this).removeClass('labs-menu-item_active');
		});
		$(this).addClass('labs-menu-item_active');
		
		var shift = -wLab * +$(this).data('level');
		$('.labs-full').css({
			"transform": "translate3d("+shift+"px, 0, 0)"
		});
	});
	
	$('.cross-btn').on('click', function() {
		$(this).toggleClass('exp-btn-rot');
		$(this).siblings('.exp-list-item-content').slideToggle();
	});
	
	$('.js-mobile-menu').on('click', function() {
		$('.mobile-menu').slideToggle();
		$(this).toggleClass('active');
		$(this).find('*').each(function() {
			$(this).toggleClass('active');
		});
		$('.navigation-content').toggleClass('active');
		$('.navigation').toggleClass('active');
		$('.mobile-navigations-items').toggleClass('active');
	});
	
});
