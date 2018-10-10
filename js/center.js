$(document).ready(function() {
	$('.list-title').click(function(event) {
		$(this).siblings('ul').slideToggle(200);
		var tri = $(this).children('.tri');
		if(tri.hasClass('tri-open')){
			tri.removeClass('tri-open').addClass('tri-close');
		}else{
			tri.removeClass('tri-close').addClass('tri-open');
		}
	});
	

	var sidebarList = $('.list-type2');
	var orderList = $('.order-list');
	var address = $('.address'); 
	var purchase = $('.purchase');
	sidebarList.each(function(index, el) {
		$(this).click(function(event) {
			var listIndex = $(this).attr('index');
			// console.log(listIndex);
			$('.panel').eq(listIndex).show().siblings().hide();
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

	$('.m-btn').each(function(index, el) {
		$(this).click(function(event) {
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

	$('.list-title-top').each(function(index, el) {
		$(this).click(function(event) {
			$(this).addClass('active').siblings().removeClass('active');
			var tit = $(this).siblings('.list-title-bottom').children('.list-tit');

			var content = $(this).parent('.center-list-title').siblings('.order-list-content').children('div');
			tit.eq($(this).index()).show().siblings('.list-tit').hide();
			content.eq($(this).index()).show().siblings().hide();
		});
	});

	$('.a-tablist ul li').each(function(index, el) {
		$(this).click(function(event) {
			$('.reset').eq($(this).index()).show().siblings('.reset').hide();
			

		});
	});
	$('.binding').click(function(event) {
		$(this).parents('.panel').hide().siblings('.binding-buyer').show();
	});
});