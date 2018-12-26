	// 获取页面
	var boxs1=document.getElementsByClassName("box1");
	// 获取show
	var show=document.getElementsByClassName("show")[0];

	var start=document.getElementById("start");
	// 加载6秒后转到第二页
	start.onclick=function(){
		show.style.marginLeft="-640px";
		show.style.transition='all 1s';
	}


	var sub=document.getElementsByClassName("sub");
	var pass=document.getElementsByClassName("pass");


	for (var i = 0; i < sub.length; i++) {

		sub[i].a=i;
		sub[i].onclick=function(){
			// alert(1)
			show.style.marginLeft=(-(this.a+2)*640)+"px";
			show.style.transition='all 1s 2.5s';
			// sub[this.a].className="hd";

		}		
	}

	for (var i = 0; i < pass.length; i++) {
		pass[i].a=i;
		pass[i].onclick=function(){
			show.style.marginLeft=(-(this.a+2)*640)+"px";
			show.style.transition='all 1s';
		}
	}


/*	var sub_b=document.getElementById("sub_b");
	var pas_b=document.getElementById("pas_b");
	
	//2
	sub_b.onclick=b;
	pas_b.onclick=b;
	function b(){

		show.style.marginLeft="-1280px";
		show.style.transition='all 1s';
	}	

	//3
	sub_c.onclick=c;
	pas_c.onclick=c;
	function c(){

		show.style.marginLeft="-1920px";
		show.style.transition='all 1s';
	}

	//4
	sub_d.onclick=d;
	pas_d.onclick=d;
	function d(){

		show.style.marginLeft="-2560px";
		show.style.transition='all 1s';
	}	

	//5
	sub_e.onclick=e;
	pas_e.onclick=e;
	function e(){

		show.style.marginLeft="-3200px";
		show.style.transition='all 1s';
	}	
	//6
	sub_e.onclick=e;
	pas_e.onclick=e;
	function e(){

		show.style.marginLeft="-3200px";
		show.style.transition='all 1s';
	}	
	//7
	sub_e.onclick=e;
	pas_e.onclick=e;
	function e(){

		show.style.marginLeft="-3200px";
		show.style.transition='all 1s';
	}	
	//8
	sub_e.onclick=e;
	pas_e.onclick=e;
	function e(){

		show.style.marginLeft="-3200px";
		show.style.transition='all 1s';
	}*/