$(function() {
	var bannerSlider = new Slider($('#banner_tabs'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner_tabs .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner_tabs .flex-next').click(function() {
		bannerSlider.next()
	});
})

/*****************导航条   鼠标移入时    样式跟着移动  字体颜色和下拉菜单的展开收缩在2.js里面  *******************/
$("#contain>li").hover(function(){
	index = $("#contain>li").index(this);
	$(".nav-tabg").show();


	var left=$(this).offset().left;

	var pos=left+2;
	$(".nav-tabg").stop().animate({"left":pos},500)
});
$("#contain>li").mouseover(function(){
	$(".nav-tabg").show();
	$(this).children("div").show();
	$(this).children("a").css("color","#fff");
});
$("#contain>li").mouseout(function(){
	$(".nav-tabg").hide();
	$(this).children("div").hide();
	$(this).children("a").css("color","#666");

});
/*   telephone-number   */
$(".telephone-number>a").hover(function(){
	$(this).siblings().children(".img-red").hide();
	$(this).siblings().children(".img-grey").show();
	$(this).children(".img-red").show();
	$(this).children(".img-grey").hide();
})



/**************************导航条里面的内容************************/
/*互动交流*/
$(function(){
	/**$(".li1").mouseover(function(){
		$(this).children().attr("src","images/red1.png");
		$(".pop").show();
		$(".pop1").hide();
		$(".pop2").hide();
	});
	$(".li2").mouseover(function(){
		$(this).children().attr("src","images/45.png");
		$(".li1").children().attr("src","images/grey1.png");
		$(".pop1").show();
		$(".pop").hide();
		$(".pop2").hide();
	});
	$(".pop1").mouseover(function(){
		$(".li2").children().attr("src","images/45.png");
	})
	$(".li2").mouseout(function(){
		$(this).children().attr("src","images/44.png");
	
	});
	$(".pop1").mouseout(function(){
		$(".li2").children().attr("src","images/44.png");
	})
	$(".li3").mouseover(function(){
		$(this).children().attr("src","images/46.png");
		$(".li1").children().attr("src","images/grey1.png");
		$(".pop2").show();
		$(".pop").hide();
		$(".pop1").hide();
	});
	$(".pop2").mouseover(function(){
		$(".li3").children().attr("src","images/46.png");
	});
	$(".li3").mouseout(function(){
		$(this).children().attr("src","images/grey3.png");
		
	});
	$(".pop2").mouseout(function(){
		$(".li3").children().attr("src","images/grey3.png");
	});**/
	$(".Tourism-producer-left li").mouseover(function(){
		$(this).addClass("active3");
		$(this).siblings().removeClass("active3");
		if($(this).attr("hhh")==0)
		{
			$("#ml1").show();
			$("#ml2").hide();
			$("#ml3").hide();
			$("#ml4").hide();
			$("#ml5").hide();
			$("#ml6").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==1)
		{
			$("#ml2").show();
			$("#ml1").hide();
			$("#ml3").hide();
			$("#ml4").hide();
			$("#ml5").hide();
			$("#ml6").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==2)
		{
			$("#ml3").show();
			$("#ml1").hide();
			$("#ml2").hide();
			$("#ml4").hide();
			$("#ml5").hide();
			$("#ml6").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==3)
		{
			$("#ml4").show();
			$("#ml1").hide();
			$("#ml3").hide();
			$("#ml2").hide();
			$("#ml5").hide();
			$("#ml6").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==4)
		{
			$("#ml5").show();
			$("#ml1").hide();
			$("#ml3").hide();
			$("#ml4").hide();
			$("#ml2").hide();
			$("#ml6").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==5)
		{
			$("#ml6").show();
			$("#ml1").hide();
			$("#ml3").hide();
			$("#ml4").hide();
			$("#ml5").hide();
			$("#ml2").hide();
			$("#ml7").hide();
		}
		if($(this).attr("hhh")==6)
		{
			$("#ml7").show();
			$("#ml1").hide();
			$("#ml3").hide();
			$("#ml4").hide();
			$("#ml5").hide();
			$("#ml6").hide();
			$("#ml2").hide();
		}
	});

	$(window).scroll(function() {
		// 当滚动到最底部以上100像素时， 加载新内容
		if ($(document).height() - $(this).scrollTop() - $(this).height() < 800) {
			$(".shou").show();
		}
		else{
			$(".shou").hide();
		}
	});


})