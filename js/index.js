function mobile_device_detect(url){
	var thisOS=navigator.platform;
	var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");
	for(var i=0;i<os.length;i++){
		if(thisOS.match(os[i])){   
			window.location=url;
		}
	}

//因为相当部分的手机系统不知道信息,这里是做临时性特殊辨认
	if(navigator.platform.indexOf('iPad') != -1){
		window.location=url;
	}

//做这一部分是因为Android手机的内核也是Linux



 //但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断



  var check = navigator.appVersion;



  if( check.match(/linux/i) )



          {



   //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件



   if(check.match(/mobile/i) || check.match(/X11/i))



                 {



   window.location=url;



   }  



 }



 //类in_array函数



 Array.prototype.in_array = function(e)



 {



  for(i=0;i<this.length;i++)



  {



   if(this[i] == e)



   return true;



  }



  return false;



 }



 } 



mobile_device_detect("http://www.flyes.cc/sj");





$(function(){

	setTimeout(function(){

			 $(".kaishi").addClass("a-bouncein");

		},1250)

		$(".reveal-modal-bg1").css({height:4451})

		//height:$(document).height()-400

		$(".kaishi").css({left:$(document).width()/2-350});

		

		$('.reveal-modal-bg1').click(function(){

			$(".reveal-modal-bg1").hide();

		$(".kaishi").addClass("a-bounceout");

		setTimeout(function(){

			$('.kaishi').hide();

		},1000)

	})

	})



	setTimeout(function(){

 		$(".kaishi").addClass("a-bounceout");

		setTimeout(function(){

			$('.kaishi').hide();

		},1000)

		$('.reveal-modal-bg').hide();

	},60000)



$(window).resize(function(){

		$(".kaishi").css({left:$(document).width()/2-$(".kaishi").width()/2});

	});

$(document).ready(function(){	





	function xt(){ 

		var iv=0;

		var is=8;

		var se=Math.random()*10;

		setInterval(function(){

			if(iv<=8){

				is=8;

				iv++;

		$('.sj p').eq(0).css({width:iv});

		$('.sj p').eq(1).css({width:iv+Math.random()*5});

		$('.sj p').eq(2).css({width:iv+Math.random()*5});	

			

			}else{

				if(is>=1){

						is--;

			$('.sj p').eq(0).css({width:is});	

			$('.sj p').eq(1).css({width:is+Math.random()*5});	

			$('.sj p').eq(2).css({width:is+Math.random()*5});	

					}else{

					iv=0;	

				}

			}

		},150)

	}

xt();

setTimeout(function(){

	$(".logo_w").addClass('a-ssc');

	$(".logo_w").css({opacity:1})

},300)

$(".ks").click(function () {

        var speed=200;//滑动的速度

        $('body,html').animate({ scrollTop: 0 }, speed);

        return false;

 });

 

 	 $(".b1_z p").addClass("a-fadeinB");

			$(".b1_z p").css({opacity:1});

			setTimeout(function(){

				$(".b1_z span").addClass("a-fadeinB");	

				$(".b1_z span").css({opacity:1});

			},200);

				setTimeout(function(){

				$(".b1_z b").eq(0).addClass("a-fadeinB");

				$(".b1_z b").eq(0).css({opacity:1});	

			},200);

				setTimeout(function(){

				$(".b1_z b").eq(1).addClass("a-fadeinB");	

				$(".b1_z b").eq(1).css({opacity:1});

			},300);

				setTimeout(function(){

				$(".b1_z b").eq(2).addClass("a-fadeinB");	

				$(".b1_z b").eq(2).css({opacity:1});

			},400);

function bd(){

$(".reveal-modal-bg").css({

		height:$(document).height()

	})



$(".list_jg").eq(i).click(function(){  

$("#works_prev").css("display","block");

})

for(var i=0;i<$(".list_jg").length;i++){

	$(".list_jg").eq(i).click(function(){  

	$(".kaishi1").eq($(this).index()).css("display","block");

	$(".kaishi1").eq($(this).index()).css("z-index","101");

	$(".reveal-modal-bg").css("display","block");

	$(".xins").css("display","block");

	var fg=$(this).index()

	$(".works_prev").click(function(){

		

		if(fg==0){

			fg=0;

			}else{

		$(".kaishi1").css("display","none");

		$(".kaishi1 .dt_t").addClass("a-fadein");



		fg--;

		$(".kaishi1").eq(fg).css("display","block");

		$(".kaishi1 .dt_t").removeClass("a-fadeinr");

		return false;

		}

		 });

	$(".works_next").click(function(){  

	if(fg==$(".list_jg").size()-1){

			fg=$(".list_jg").size()-1;

			}else{

	fg++;

	$(".kaishi1").css("display","none");

		$(".kaishi1").eq(fg).css("display","block");

		$(".kaishi1 .dt_t").addClass("a-fadeinr");	

		$(".kaishi1 .dt_t").removeClass("a-fadein");

		return false;

			}

	});



});

}

var vs=0;

for(var i=0;i<$(".list_jg").length;i++){

	vs+=3;

	$(".kaishi1").eq($(this).index()+1).css("top","250");

	$(".kaishi1").eq($(this).index()+2).css("top","250");

	$(".kaishi1").eq($(this).index()+3).css("top","250");

}

$(".pzcc").click(function(){ 

$(".kaishi2").css("display","block");

$(".kaishi2").css("z-index","101");

$(".reveal-modal-bg").css("display","block");

$("#fi").attr("src","test.html");	

$(".video").css("display","block");

setTimeout(function(){		},800)

});

 

for(var i=0;i<$(".list_jg").length;i++){

$(".reveal-modal-bg").click(function(){

	$(".reveal-modal-bg").css("display","none");

	$(".kaishi1").css("display","none");

	$(".xins").css("display","none");

});

}

}

/*bd();*/

})

var pm=$(window).width();

$(document).ready(function() {

    var f, a = $("#nav").find(".cur").size() > 0 ? $("#nav").find(".cur") : 0,

    b = 0,

    c = 0,

    d = 0,

    e = $("#nav").offset().left;

    a && (b = a.offset().left - e, c = a.width(), d = 1, $("#nav_line").css({

        left: b,

        width: c

    }).animate({

        opacity: 1

    },

    300)),

    $("#nav .tops").on("mouseenter",

    function() {

        var d = $(this).offset().left - e,

        f = $(this).width();

        a || (b = d, c = f),

        $("#nav_line").stop().animate({

            left: d,

            width: f,

            opacity: 1

        },

        600,

        function() {

            f > 1150 && $("#nav_line").animate({

                left: d + (f - 50) / 2,

                width: 50

            },

            200)

        })

    }),

    $("#nav").mouseleave(function() {

        $("#nav_line").stop().animate({

            left: b,

            width: c,

            opacity: 1

        },

        500)

    }),

    f = 0,

    $(window).on("scroll",

    function() {

        $(window).scrollTop() > 50 && !f ? ($("#header").addClass("min"), f = 1) : $(window).scrollTop() < 50 && f && ($("#header").removeClass(), f = 0)

    }),

    $(window).resize(function() {

        e = $("#nav").offset().left

    })

});

setTimeout(function(){

$(".lx_list ul li").eq(0).css({opacity:1});

$(".lx_list ul li").eq(0).addClass('a-fadeinL');

},200)

setTimeout(function(){

	$(".jies.jc .jTitle").css({opacity:1});

	$(".jies.jc .jTitle").addClass('jn');

},400)

setTimeout(function(){

	$(".jies.jc p").addClass('jn');

	$(".jies.jc p").css({opacity:1});

},600)

setTimeout(function(){

	$(".jies.jc span").addClass('jn');

	$(".jies.jc span").css({opacity:1});

},800);

	setTimeout(function(){

		$(".dt_center").addClass('jnc');

		$(".dt_center").css({opacity:1});

		},400)

		setTimeout(function(){

		$(".csr_tit").addClass('jns');

		$(".csr_tit").css({opacity:1});

		

		},800)

		setTimeout(function(){

	

		$(".list_index.sh").addClass('jnc');

	

		$(".list_index.sh").css({opacity:1});

		

		},300)

		setTimeout(function(){

	

		$(".csr").css({opacity:1});

		$(".csr").addClass('jns');

		

		},300)

			

		setTimeout(function(){

	

		$(".jgs.gm.jsc").css({opacity:1});

		$(".jgs.gm.jsc").addClass('a-fadein');

		

		},500)

		setTimeout(function(){

	/*

		$(".lxv").css({opacity:1});

		$(".lxv").addClass('jn');*/

		

		},300)

		

		setTimeout(function(){

	

	/*	$(".ditc").css({opacity:1});

		$(".ditc").addClass('jn');

		*/

		},700)

		setTimeout(function(){

	

		$(".list_m ul li").eq(0).css({opacity:1});

				$(".list_m ul li").eq(0).addClass('jns');

		},300)

		

function ksg(div,sj){

	setTimeout(function(){

		$(div).addClass('jns');

		$(div).css({opacity:1});

	},sj)	

}

ksg(".ditc",700);

ksg(".lxv",300);

window.onscroll=function ()

{

	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

	/*document.title=scrollTop;*/	

			if(scrollTop>=0){

			} 

			if(scrollTop>=100){

		$(".header").css({top:-101});

				$(".dh").css({position:"fixed" });

				$(".dh").css({top:0});

			}else{ 

			$(".header").css({top:0});

			$(".dh").css({top:101});

			/*$('.dh').css({top:0,position:"relative" })

				if($(window).width()>=765||scrollTop>=100){

				

			}*/

			

							

				

/*var dc=document.getElementById('hsc');

$(".header").mouseenter(function(){ 

	$(".header").addClass('cur');

	

});



$(".header").mouseleave(function(){ 

		$(".header").removeClass('cur');

	

});



$(".ks").mouseenter(function(){ 

	$(".header").css({top:0});

	$(".dh").css({top:101});

});



$(".ks").mouseleave(function(){  

if(dc.className=="cur"){

	

	 

	 

$(".xd").removeClass("cur"); 

	$(".header").css({top:0});

	$(".dh").css({top:101});

		return false

}else{ 



	$(".header").css({top:-101});

	$(".dh").css({top:0});

	$(".xd").addClass("cur");

	}

});*/

			} 

			

	

			

			if(scrollTop>=30){

			

			/*	setTimeout(function(){

				$(".jies.jc span").addClass('jn');

				$(".jies.jc span").css({opacity:1});

	            },200);*/

				

				

$(".ks").mouseenter(function(){ 

	$(".header").css({top:0});

	$(".dh").css({top:101});

});



$(".ks").mouseleave(function(){  

if($(".header").offset().top>=101){

	 $(".header").css({top:-101});

	$(".dh").css({top:0});

}

});

		

		

			} 

			if(scrollTop>=430){

				$("#works_wrap").css({opacity:1});

				$("#works_wrap").addClass('jn');

				

			

		

			} 

			

			

			

			if(scrollTop>=920){

				$(".jies.jk .jTitle").css({opacity:1});

				$(".jies.jk .jTitle").addClass('jn');

				

				setTimeout(function(){

				$(".jies.jk p").addClass('jn');

				$(".jies.jk p").css({opacity:1});

	            },200)

				setTimeout(function(){

				$(".jies.jk span").addClass('jn');

				$(".jies.jk span").css({opacity:1});

	            },500)

			} 

			

			if(scrollTop>=1682){

				$(".jies.ju .jTitle").css({opacity:1});

				$(".jies.ju .jTitle").addClass('jn');

				

				setTimeout(function(){

				$(".jies.ju p").addClass('jn');

				$(".jies.ju p").css({opacity:1});

	            },200)

				setTimeout(function(){

				$(".jies.ju span").addClass('jn');

				$(".jies.ju span").css({opacity:1});

	            },500)

		

		

			} 

			

			if(scrollTop>=2310){

				$(".jies.jo .jTitle").css({opacity:1});

				$(".jies.jo .jTitle").addClass('jn');

				

				setTimeout(function(){

				$(".jies.jo p").addClass('jn');

				$(".jies.jo p").css({opacity:1});

	            },200)

				setTimeout(function(){

				$(".jies.jo span").addClass('jn');

				$(".jies.jo span").css({opacity:1});

	            },500)

		

		

			} 

			if(scrollTop>=2807){

				$(".jies.jy .jTitle").css({opacity:1});

				$(".jies.jy .jTitle").addClass('jn');

				

				setTimeout(function(){

				$(".jies.jy p").addClass('jn');

				$(".jies.jy p").css({opacity:1});

	            },200)

				setTimeout(function(){

				$(".jies.jy span").addClass('jn');

				$(".jies.jy span").css({opacity:1});

	            },500)

		

		

			} 

			

			if(scrollTop>=90){

				$(".list_index.yk").addClass('a-fadein');

				$(".list_index.yk").css({opacity:1});

			} 

			if(scrollTop>=168){

				$(".works_wrap").addClass('a-fadein');

				$(".works_wrap").css({opacity:1});

			} 

			if(scrollTop>=1875){

				$(".list_jg").eq(0).css({opacity:1});

				$(".list_jg").eq(0).addClass('a-fadein');

				$(".vct").css({opacity:1});

			

				setTimeout(function(){

						$(".list_jg").eq(1).css({opacity:1});

				$(".list_jg").eq(1).addClass('a-fadein');

			

	            },200)

				setTimeout(function(){

					$(".list_jg").eq(2).css({opacity:1});

				$(".list_jg").eq(2).addClass('a-fadein');

				

	            },400)

			} 

			if(scrollTop>=3000){

				$(".fooders.yd").css({bottom:0});

		

			} 

			

			

			

			

			

			

			if(scrollTop>=2500){

				$(".pp_logo").css({opacity:1});

			$("pp_logo").addClass('jn');

			

		

			} 

		

			if(scrollTop>=1140){

				$(".g1").addClass('a-fadeinT');

				$(".g1").css({opacity:1});

				setTimeout(function(){

		        $(".g2").addClass('a-fadeinT');

				$(".g2").css({opacity:1});

	            },100)

				setTimeout(function(){

		        $(".g3").addClass('a-fadeinT');

				$(".g3").css({opacity:1});

	            },200)

				setTimeout(function(){

		        $(".g4").addClass('a-fadeinT');

				$(".g4").css({opacity:1});

	            },300)

				

				setTimeout(function(){

				$(".bjc ul li h2").eq(0).addClass('a-fadeinT');

				$(".bjc ul li h2").eq(0).css({opacity:1});

				},100)

				setTimeout(function(){

		        $(".bjc ul li h2").eq(1).addClass('a-fadeinT');

				$(".bjc ul li h2").eq(1).css({opacity:1});

	            },200)

				setTimeout(function(){

		        $(".bjc ul li h2").eq(2).addClass('a-fadeinT');

				$(".bjc ul li h2").eq(2).css({opacity:1});

	            },300)

				setTimeout(function(){

		        $(".bjc ul li h2").eq(3).addClass('a-fadeinT');

				$(".bjc ul li h2").eq(3).css({opacity:1});

	            },400)

				

					

				

					setTimeout(function(){		

						

					var i=0;

					var tt=setInterval(function(){ 

					if(i<$(".bjc p").length){

						

					$(".bjc p").eq(i).addClass('a-fadeinJ');

					$(".bjc p").eq(i).css({opacity:1});

					i++;

					}else{

						clearInterval(tt);	

					}

					

					},60)	

				  },1000)	

	           

				

			

			}

		/*	if(scrollTop>=2850){

				var ic=0;

					var ttc=setInterval(function(){ 

					if(ic<$(".pp_logo ul li").length){

						

					$(".pp_logo ul li a").eq(ic).addClass('sx');

				

					ic++;

					}else{

						clearInterval(ttc);	

					}

					},100)	

					var is=0;

					var tts=setInterval(function(){ 

					if(is<$(".pp_logo ul li").length){

						

					$(".pp_logo ul li a").eq(is).removeClass('sx');

					is++;

					}else{

						clearInterval(tts);	

					}

					},101)

			}*/

			if(scrollTop>=2190){

				$(".wect p").css({opacity:1});

				$(".wect p").addClass('a-fadeinR');

				setTimeout(function(){

				$(".wect span").css({opacity:1});

		        $(".wect span").addClass('a-fadeinR');

	            },400)

				setTimeout(function(){

				$(".wect font").css({opacity:1});

		        $(".wect font").addClass('a-fadeinR');

	            },700)

			}

			if(scrollTop>=1190){

				$(".news1").css({opacity:1});

				$(".news1").addClass('a-fadein');

			}

			



			

			if(scrollTop>=1292){

				$(".news2 ul li").eq(0).addClass('a-fadeinR');

				setTimeout(function(){

		        $(".news2 ul li").eq(1).addClass('a-fadeinR');

	            },400)

				setTimeout(function(){

		       $(".news2 ul li").eq(2).addClass('a-fadeinR');

	            },700)

			}

	

				if(scrollTop>=2450){

					setTimeout(function(){

					$(".xianze ul li").eq(0).addClass('a-bounceinL');

					},200)

					setTimeout(function(){

					$(".xianze ul li").eq(1).addClass('a-bounceinL');

					},400)

					setTimeout(function(){

					$(".xianze ul li").eq(2).addClass('a-bounceinL');

					},600)

					setTimeout(function(){

					$(".xianze ul li").eq(3).addClass('a-bounceinL');

					},800)

					setTimeout(function(){

					$(".xianze ul li").eq(4).addClass('a-bounceinL');

					},1000)

					setTimeout(function(){

					$(".xianze ul li").eq(5).addClass('a-bounceinL');

					},1200)

					

				}

				

				

				/*关于*/

			if(scrollTop>=0){

				$(".csr").css({opacity:1});

				$(".csr").addClass('jns');

			} 

			

		/*	if(scrollTop>=0){

				$(".list_m ul li").eq(0).css({opacity:1});

				$(".list_m ul li").eq(0).addClass('jns');

			} */

			if(scrollTop>=180){

				$(".list_m ul li").eq(1).css({opacity:1});

				$(".list_m ul li").eq(1).addClass('jns');

			} 

			if(scrollTop>=470){

				$(".list_m ul li").eq(2).css({opacity:1});

				$(".list_m ul li").eq(2).addClass('jns');

			} 

			

			if(scrollTop>=755){

				$(".list_m ul li").eq(3).css({opacity:1});

				$(".list_m ul li").eq(3).addClass('jns');

			} 

			

			/*联系我们*/

			

			if(scrollTop>=100){

				/*$(".lx_list ul li").eq(0).css({opacity:1});

				$(".lx_list ul li").eq(0).addClass('a-fadeinL');*/

			} 

			if(scrollTop>=300){

				$(".bzh").eq(0).css({opacity:1});

				$(".bzh").eq(0).addClass('a-fadeinT');

			} 

			if(scrollTop>=300){

				$(".lsv").eq(0).css({opacity:1});

				$(".lsv").eq(0).addClass('a-fadeinT');

			} 

			

			

			if(scrollTop>=400){

				$(".lx_list ul li").eq(1).css({opacity:1});

				$(".lx_list ul li").eq(1).addClass('a-fadeinL');

			} 

			

			if(scrollTop>=650){

				$(".lx_list ul li").eq(2).css({opacity:1});

				$(".lx_list ul li").eq(2).addClass('a-fadeinL');

			} 

			

			if(scrollTop>=890){

				$(".lx_list ul li").eq(3).css({opacity:1});

				$(".lx_list ul li").eq(3).addClass('a-fadeinL');

			} 

			

			if(scrollTop>=1125){

				$(".lx_list ul li").eq(4).css({opacity:1});

				$(".lx_list ul li").eq(4).addClass('a-fadeinL');

			} 

			



}

	