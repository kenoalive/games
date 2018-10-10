$(document).ready(function() {
	var bWidth = document.documentElement.clientWidth;
	console.log(bWidth);
	if(bWidth<=1180){
		bWidth=1100;
	}
	var sWidth = bWidth;
	var len = 2;
	var timer;
	var index = 0;

	$('.slide-c').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			showPic(index);
			index++;
			if(index == len){index = 0;}
		},3000);
	}).trigger('mouseleave');
	function showPic(index){
		var nowLeft = -index * sWidth;
		$('.slidebar').stop(true,false).animate({left:nowLeft},500);
		$('#focus ul li').removeClass('cur').eq(index).addClass('cur');
	}

	$('#focus ul li').click(function(){
		index = $('#focus ul li').index(this);
		showPic(index);
	}).eq(0).trigger('click');
});