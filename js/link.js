//function setTab(name,cursel,n){
//	for(i=1;i<=n;i++){
//		var menu=$("#"+name+i);
//		var con=$("#con_"+name+"_"+i);		
//		if(i==cursel){
//			$(menu).addClass("hover");
//			$(con).show();
//		}else{
//			$(menu).removeClass("hover");
//			$(con).hide();
//		}
//	}
//}

function changeSrc(obj,cat_id){
	$(".cj_cnt2 ul li").each(function(index, element) {
		$(this).removeClass("hover");
	});
	$(obj).addClass("hover");
	$("#childName").html($(obj).html());
	$("#rightFrame").attr("src","#"+cat_id);
}



