$(function(){
	var _sceneimg=$('#sceneimg');
	var _starttitle=$('#starttitle');
	var _box1_start=$('#box1_start');
	var _box1=$('#box1');


	var _box2=$('#box2');
	var _cards=$('#cards');
	var _box2Start=$('#box2_start');
	var _acard=$('#acard');
	var _pai=$('.pai');
	var _box2_31=$('#box2_31');
	var _box2_32=$('#box2_32');
	//抽奖页结果显示
	var _endcard=$('#endcard');
	//抽牌结果
	var _endcard1=$('#endcard_1');
	//花
	var _endcard3=$('#endcard_3');
	var _b2Img;
	//拍文解析按钮
	var _endcardBtn=$('#endcard_2');
	var box2Img=['endcard1_03.png','endcard2_03.png','endcard3_03.png','endcard4_03.png','endcard5_03.png',
	'endcard6_03.png','endcard7_03.png','endcard8_03.png'];


	var _box3=$('#box3');
	var box3_1=$('#box3_1');
	var box3_2=$('#box3_2');
	var box3_3=$('#box3_3');
	var box3_4=$('#box3_4');
	var box3_5=$('#box3_5');
    //分享页
    var _fxiang=$('#fxiang');

    var loadArr=['img/hanxiangzi.png','img/lancaihua.png','img/ludongbin.png','img/hanzhongli.png',
	'img/chaogoujiu.png','img/tieguaili.png','img/hexiangu.png','img/zhangguolai.png','img/juanzhou1_06.png','img/juanzhou6_03.png','img/juanzhou4_03.png','img/juanzhou8_03.png','img/juanzhou5_03.png',
	'img/juanzhou7_03.png','img/juanzhou3_03.png','img/juanzhou2_03.png',"img/scene01_1.png","img/scene01_2.png","img/scene01_3.png","img/scene01_4.png","img/scene01_5.png","img/scene01_6.png","img/scene01_7.png",
	"img/scene01_8.png","img/scene01_9.png","img/scene01_10.png","img/scene01_11.png","img/scene01_12.png",'img/acard_03.png','img/btnn_03.png','img/btnn_05.png',
	'img/cards_03.png','img/colour_03.png','img/explain_03.png','img/juanzhou1_03.png','img/mixupbtn_03.png',
	'img/start_03.png','img/starttitle_03.png','img/ddd_03.png'];

    var _lon=$('#lon');
    var _box=$('#box');
    var _span=$('#span');
    var myNum=0;
	for (var i = 0; i < loadArr.length; i++) {
	var nImg=new Image();
	//图片加载
	nImg.src=loadArr[i]
	//图片加载完成时
	nImg.onload=function(){
		myNum++;
		// $(".lon_wrap i").css({'width':(myNum/_loIndex)*100 + "%"});
		// ii.style.width=(myNum/loadArr.length)*100+"%";
		_span.html(""+Math.round((myNum/loadArr.length)*100)+"%");
		if(myNum>=loadArr.length){
			_lon.hide();
			_box.show();
			// box.style.display="block";
		}
	}
};


	var box3img1=['hanxiangzi.png','lancaihua.png','ludongbin.png','hanzhongli.png',
	'chaogoujiu.png','tieguaili.png','hexiangu.png','zhangguolai.png'];
	var box3img2=['juanzhou1_06.png','juanzhou6_03.png','juanzhou4_03.png','juanzhou8_03.png','juanzhou5_03.png',
	'juanzhou7_03.png','juanzhou3_03.png','juanzhou2_03.png'];
    //手指定时器
    var szhiTime;
	var _scimg=["scene01_1.png","scene01_2.png","scene01_3.png","scene01_4.png","scene01_5.png","scene01_6.png","scene01_7.png",
	"scene01_8.png","scene01_9.png","scene01_10.png","scene01_11.png","scene01_12.png"];
	var s=1;
	setInterval(function(){
		_sceneimg.attr("src","img/"+_scimg[s]+"");
		s++;
		if (s>11) {
			s=0;
		}

	},100);

	_box1_start.on("click",function(){
		_box2.show();
		_box1.hide();
	});
	//开始洗牌
	//洗牌
	function xPai(x,t,l,ro){
			x.css({
				top:''+t[0]+'%',
				left:''+l[0]+'%',
				transform:'rotate('+ro[0]+'deg)'});
	}	
	//摊牌
	function tPai(x,l,t,ro){
			x.css({
				top:''+t+'%',
				left:''+l+'%',
				transform:'rotate('+ro+'deg)'});
	}

	//洗完后返回
	function fHui(f){
			f.css({top:'0%',
				left:'0%',
				right:'0%',
				margin:'auto',
				transform:'rotate(0deg)'
			});
	}


	var t=0;
	var num1=1;
	var _index;
	_box2Start.on("click",function(){
		_box2Start.fadeOut(1);
		_cards.addClass("cards");
		_cards.fadeOut(1500);
		_acard.fadeIn(2000);
		setTimeout(function(){
			var pai1=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(0),top,left,rota);
					t++;
					if (t>=6) {
						clearInterval(pai1);
						fHui(_pai.eq(0));
					}
				},600);			
			var pai2=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(1),top,left,rota);
					if (t>=6) {
						clearInterval(pai2);
						fHui(_pai.eq(1));
					}
				},640);			

			var pai3=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(2),top,left,rota);
					if (t>=6) {
						clearInterval(pai3);
						fHui(_pai.eq(2));
					}
				},680);

			var pai4=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(3),top,left,rota);
					if (t>=6) {
						clearInterval(pai4);
						fHui(_pai.eq(3));
					}
				},700);			
			var pai5=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(4),top,left,rota);
					if (t>=6) {
						clearInterval(pai5);
						fHui(_pai.eq(4));
					}
				},735);			
			var pai6=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(5),top,left,rota);
					if (t>=6) {
						clearInterval(pai6);
						fHui(_pai.eq(5));
					}
				},765);			
			var pai7=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(6),top,left,rota);
					if (t>=6) {
						clearInterval(pai7);
						fHui(_pai.eq(6));
					}
				},780);			
			var pai8=setInterval(function(){
					var top=createRandom(1 ,0 ,200);
					var left=createRandom(1 ,-60 ,60);
					var rota=createRandom(1 ,0 ,360);
					xPai(_pai.eq(7),top,left,rota);
					if (t>=6) {
						clearInterval(pai8);
						fHui(_pai.eq(7));
						setTimeout(tPai1,1000);
						setTimeout(sPai,1700);
						setTimeout(tPai1,2250);

					}
				},820);

			
		},1000);


		function tPai1(){
			num1++;
			tPai(_pai.eq(7),65,0,37);
			tPai(_pai.eq(6),48,-12,30);
			tPai(_pai.eq(5),30,-20,20);
			tPai(_pai.eq(4),13,-25,7);
			tPai(_pai.eq(3),-5,-25,-7);
			tPai(_pai.eq(2),-23,-20,-20);
			tPai(_pai.eq(1),-43,-11,-30);
			tPai(_pai.eq(0),-61,0,-40);
			if (num1>=3) {
				console.log(111)
				setTimeout(function(){
				_box2_31.show();
				_box2_32.show();
				//手指动画
				_box2_32.animate({
   					top: -124+"%", 
 				}, 'fast',function(){
 					szhiTime=setInterval(function(){
						_box2_32.toggle();
						
				},400);
 					addOn();
 				});
 				
				
			},700);

			}
		}	

	});
	function sPai(){
				fHui(_pai.eq(7));
				fHui(_pai.eq(6));
				fHui(_pai.eq(5));
				fHui(_pai.eq(4));
				fHui(_pai.eq(3));
				fHui(_pai.eq(2));
				fHui(_pai.eq(1));
				fHui(_pai.eq(0));
				console.log("shou");
		}

	function addOn(){
		for (let i = 0; i < _pai.length; i++) {
			//选牌
			console.log(_pai.length)
			_pai.eq(i).on('touchmove',function(){
				// console.log(123)
				_pai.eq(i).unbind();
				_box2_31.hide();
				clearInterval(szhiTime);
				_box2_32.hide();
				$(this).css({top:'-42%'});
				_index=$(this).index();
				setTimeout(function(){
					for (var i = 0; i < _pai.length; i++) {
						if (_pai.eq(i).index()==_index) {
							continue;
						}else{
							_pai.eq(i).hide();
						}
					}
					fHui(_pai.eq(_index));
					setTimeout(function(){
						_pai.eq(_index).addClass('paiDh');
						setTimeout(function(){
							_b2Img=createRandom(1 ,0 ,7);
							// console.log(_b2Img)
							_endcard1.attr("src","img/"+box2Img[_b2Img]+"");
							_endcard.show();
							_endcardBtn.on('click',jieX)
						},900);
						
					},1000)
				},1000);
			});
		}		

	}
	//拍文解析
	function jieX(){
		_box2.hide();
		box3_1.attr("src","img/"+box3img1[_b2Img]+"");
		box3_2.attr("src","img/"+box3img2[_b2Img]+"");
		_box3.show();
		box3_4.on('click',function(){
			console.log(5656)
			_fxiang.show();
			//阻止事件流
			return false;
		});
		$(document).on('click',function(){
				_fxiang.hide();
		});
		//在玩一次
		box3_5.on('click',function(){
			t=0;
			num1=1;
			_box3.hide();
			_box2.show();
			_cards.show();
			_box2Start.show();
			_acard.hide();
			_endcard.hide();
			_pai.eq(_index).removeClass('paiDh');
			_pai.eq(_index).css({opacity:"1"});
			_cards.removeClass('cards');
			_box2_32.css({
				top:'280px',
			});
			for (var i = 0; i < _pai.length; i++) {
					_pai.eq(i).unbind();
					_pai.eq(i).show();
				}

			sPai();
					
		});
	}
});