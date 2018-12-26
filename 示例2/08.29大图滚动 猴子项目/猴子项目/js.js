window.onload=function(){

	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
	var box4=document.getElementById("box4");
	var box5=document.getElementById("box5");
	var box6=document.getElementById("box6");
	var box7=document.getElementById("box7");

	var monk=document.getElementsByClassName("monk");

	// 规则
	var gZe=document.getElementById("gZe");
	var del_b=document.getElementById("del_b");
	// 中奖名单
	var zJiang=document.getElementById("zJiang");
	var del_c=document.getElementById("del_c");
	// 开始游戏
	var start_a=document.getElementsByClassName("start_a");
	// 喂东西按钮
	var fd_btn=document.getElementsByClassName("fd_btn");

	var box_arr=[box1,box2,box3,box4];
	// 时间
	var time2=document.getElementById("time2");
	// 倒计时
	var time=document.getElementById("time");
	var img_1=document.getElementById("img_1");
	var img_2=document.getElementById("img_2");
	var img_3=document.getElementById("img_3");
	var img_4=document.getElementById("img_4");
	var img_5=document.getElementById("img_5");
	var time_src=["images/game-time9.png","images/game-time8.png","images/game-time7.png","images/game-time6.png","images/game-time5.png",
	"images/game-time4.png","images/game-time3.png","images/game-time2.png","images/game-time1.png","images/game-time0.png"];
	// 重来
	var again=document.getElementById("again");
	// 分享
	var call=document.getElementById("call");
	var z=7,j=0,k=0;
	var time_d;
	var time_s ,time_s2;
	var bl=false;
	var bll=true;

	// 题目
	var span_d=document.getElementById("span_d");
	var tm_arr=["我好饿呀~快点击盼盼生榨椰子汁喂我吧","我好饿呀~快点击盼盼在一起喂我吧",
	"我好饿呀~快点击盼盼核桃慧喂我吧","我好饿呀~快点击盼盼就是蒙喂我吧"];

	// 框
	// var d2_tMu=document.getElementById("d2_tMu");
	var d2_tMu=I("d2_tMu");
	// console.log(d2_tMu);
	// 猴子
	var d2_mo=document.getElementById("d2_mo");
	// var box9=document.getElement();

	// 音乐
	var audio=document.getElementById("audio");

	for (var i = 0; i < monk.length; i++) {

		monk[i].a=i;
		monk[i].onclick=function(){
			if (audio.paused) {
				audio.play();
				for (var i = 0; i < monk.length; i++) {
					monk[i].src="images/music-on.png";
				
				}

			}else{

				audio.pause();
				for (var i = 0; i < monk.length; i++) {
					monk[i].src="images/music-off.png";
					
				}
				
				
			}
		}
	}
	// 规则
	gZe.onclick=function(){

		box1.style.display="none";
		box2.style.display="block";
	}
	// 名单
	zJiang.onclick=function(){

		box1.style.display="none";
		box3.style.display="block";
	}	

	del_b.onclick=function(){
		box1.style.display="block";
		box2.style.display="none";
	}	
	del_c.onclick=function(){
		box1.style.display="block";
		box3.style.display="none";
	}

	// 三个开始游戏的按钮
	for (var i = 0; i < start_a.length; i++) {
		start_a[i].onclick=start;
	}
	

	 function start(){
	 	// 第一个倒计时
		box1.style.display="none";
		box4.style.display="block";
		// 重新开始
		if (bl) {

				for (var i = 0; i < fd_btn.length; i++){
					fd_btn[i].onclick="";
						
				}


				time2.style.display="block";
				img_1.style.display="none";
				img_2.style.display="none";
				img_3.style.display="none";
				img_4.style.display="none";
				img_5.style.display="none";
				img_4.src="images/game-time1.png";
				d2_tMu.style.display="none";
				time2.src=time_src[z];
				temp=[];
				z++;

		};

			var temp=[];
			var t=0;
			time_s=setInterval(function(){
			time2.src=time_src[z];
			bl=true;

			z++;
			// 第二个倒计时
			if (z>=10) {
				clearInterval(time_s);
				time2.style.display="none";
				z=6;
				// time.innerHTML=time_src[0]+;
				img_1.style.display="block";
				img_2.style.display="block";
				img_3.style.display="block";
				img_4.style.display="block";
				img_5.style.display="block";
				d2_tMu.style.display="block";			
				
				var math=Math.floor(Math.random()*4);
				// temp[t]=math;
				span_d.innerHTML=tm_arr[math];
				time_s=setInterval(function(){
					// console.log(2222222222222222)


					//88
					
				 img_4.src="images/game-time0.png";
				 img_5.src=time_src[j];
				 j++;
				if (j>=10) {
					clearInterval(time_s);

					console.log(k)
					
					if (k>=3) {
						
						box5.style.display="block";

				}else{
						box6.style.display="block";
				}
					j=0;
					k=0;
				}



			},1000);

				// 第二个倒计时开始可以点击
				// 喂东西按钮


				// 给按钮添加事件
				for (var i = 0; i < fd_btn.length; i++) {
					fd_btn[i].a=i;
					fd_btn[i].onclick=function(){
						// console.log("68886666868686888866666");

/*				for (var i = 0; i < fd_btn.length; i++){
					fd_btn[i].onclick="";
						
				}*/

						// clearInterval(time_s2);
					
						// 正确
						if (bll) {
							console.log("888");
							bll=false;
							if (this.a==math) {
							// console.log(math+"11111");
							d2_tMu.style.backgroundImage="url('images/game-trueTip.png')";
							span_d.innerHTML="选择正确,盼盼好好喝";
							d2_mo.src="images/game-trueMonkey.png";
							k++;
							if (k>=3) {
									// clearInterval(time_d);
									clearInterval(time_s);
									box5.style.display="block";

							}

							 time_s2=setTimeout(function(){
							 	bll=true;
							 	// clearInterval(time_s2);
							 	temp[t]=math;
							 	console.log(temp[t]);
							 	// console.log()
							 	t++;
								math=Math.floor(Math.random()*4);
								// console.log(math+"55555555");
								for (var q = 0; q < temp.length; q++) {
									if (math==temp[q]) {
										math=Math.floor(Math.random()*4);
										// console.log(math+"888");
										q=-1;

									}
								}

								span_d.innerHTML=tm_arr[math];
								d2_tMu.style.backgroundImage="url('images/game-dialogBox.png')";
								d2_mo.src="images/game-monkey.png";

							},1000);
						}else{
							// 错误
							d2_tMu.style.backgroundImage="url('images/game-errorTip.png')";
							span_d.innerHTML="喂！选错啦";
							d2_mo.src="images/game-errorMonkey.png";
							 time_s2=setTimeout(function(){
							 	bll=true;
							 	// clearInterval(time_s2);
								// math=Math.floor(Math.random()*4);
								// temp[t]=math;
							 	// t++;
/*
							for (var w = 0; w < temp.length; w++) {
									if (math==temp[w]) {
										math=Math.floor(Math.random()*4);
										w=-1;
									}
								}*/
								span_d.innerHTML=tm_arr[math];
								d2_tMu.style.backgroundImage="url('images/game-dialogBox.png')";
								d2_mo.src="images/game-monkey.png";
							},1000);
						}
						};

					}
				}





			}
		},1000);
	}

	// 呼叫好友
	call.onclick=function(){

		box7.style.display="block";
	}
	// 重新开始	
	again.onclick=function(){

		box6.style.display="none";
		start();

	}
	// 退出分享页
	box7.onclick=function(){
		this.style.display="none";
		
	}



}